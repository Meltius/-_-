import React from 'react';
import ReactDOMServer from 'react-dom/server';
import express from 'express';
import { StaticRouter } from 'react-router-dom';
import App from './App';
import path from 'path';
import fs from 'fs';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './modules';
import PreloadContext from './lib/PreloadContext';
import createSagaMiddleware from 'redux-saga';
import rootReducer, { rootSaga } from './modules';
import { END } from 'redux-saga';
import { ChunkExtractor, ChunkExtractorManager } from '@loadable/server';


const statsFile = path.resolve('./build/loadable-stats.json');



function createPage(root, tags) {
  return &lt;!DOCTYPE html&gt;</span>
<span class="co31">  &lt;html lang=</span><span class="co31">"</span><span class="co31">en</span><span class="co31">"</span><span class="co31">&gt;</span>
<span class="co31">  &lt;head&gt;</span>
<span class="co31">    &lt;meta charset=</span><span class="co31">"</span><span class="co31">utf-8</span><span class="co31">"</span><span class="co31"> /&gt;</span>
<span class="co31">    &lt;link rel=</span><span class="co31">"</span><span class="co31">shortcut icon</span><span class="co31">"</span><span class="co31"> href=</span><span class="co31">"</span><span class="co31">/favicon.ico</span><span class="co31">"</span><span class="co31"> /&gt;</span>
<span class="co31">    &lt;meta</span>
<span class="co31">      name=</span><span class="co31">"</span><span class="co31">viewport</span><span class="co31">"</span>
<span class="co31">      content=</span><span class="co31">"</span><span class="co31">width=device-width,initial-scale=1,shrink-to-fit=no</span><span class="co31">"</span>
<span class="co31">    /&gt;</span>
<span class="co31">    &lt;meta name=</span><span class="co31">"</span><span class="co31">theme-color</span><span class="co31">"</span><span class="co31"> content=</span><span class="co31">"</span><span class="co31">#000000</span><span class="co31">"</span><span class="co31"> /&gt;</span>
<span class="co31">    &lt;title&gt;React App&lt;/title&gt;</span>
<span class="cd2 co31">    </span><span class="co49">${</span><span class="cd2 co34">tags</span><span class="cd2 co31">.</span><span class="cd2 co34">styles</span><span class="co49">}</span>
<span class="cd2 co31">    </span><span class="co49">${</span><span class="cd2 co34">tags</span><span class="cd2 co31">.</span><span class="cd2 co34">links</span><span class="co49">}</span>
<span class="co31">  &lt;/head&gt;</span>
<span class="co31">  &lt;body&gt;</span>
<span class="co31">    &lt;noscript&gt;You need to enable JavaScript to run this app.&lt;/noscript&gt;</span>
<span class="co31">    &lt;div id=</span><span class="co31">"</span><span class="co31">root</span><span class="co31">"</span><span class="co31">&gt;</span>
      <span class="co49">${</span><span class="co34">root</span><span class="co49">}</span>
<span class="co31">    &lt;/div&gt;</span>
<span class="cd2 co31">    </span><span class="co49">${</span><span class="cd2 co34">tags</span><span class="cd2 co31">.</span><span class="cd2 co34">scripts</span><span class="co49">}</span>
<span class="co31">  &lt;/body&gt;</span>
<span class="co31">  &lt;/html&gt;</span>
<span class="co31">;
}
const app = express();



// 서버 사이드 렌더링을 처리할 핸들러 함수입니다.
const serverRender = async (req, res, next) => {
  // 이 함수는 404가 떠야 하는 상황에 404를 띄우지 않고 서버 사이드 렌더링을 해 줍니다.



const context = {};
  const sagaMiddleware = createSagaMiddleware();



const store = createStore(
    rootReducer,
    applyMiddleware(thunk, sagaMiddleware)
  );



const sagaPromise = sagaMiddleware.run(rootSaga).toPromise();



const preloadContext = {
    done: false,
    promises: []
  };



// 필요한 파일을 추출하기 위한 ChunkExtractor
  const extractor = new ChunkExtractor({ statsFile });



const jsx = (
    <ChunkExtractorManager extractor={extractor}>
      <PreloadContext.Provider value={preloadContext}>
        <Provider store={store}>
          <StaticRouter location={req.url} context={context}>
            <App />
          </StaticRouter>
        </Provider>
      </PreloadContext.Provider>
    </ChunkExtractorManager>
  );



ReactDOMServer.renderToStaticMarkup(jsx); // renderToStaticMarkup으로 한번 렌더링합니다.
  store.dispatch(END); // redux-saga의 END 액션을 발생시키면 액션을 모니터링하는 사가들이 모두 종료됩니다.
  try {
    await sagaPromise; // 기존에 진행 중이던 사가들이 모두 끝날 때까지 기다립니다.
    await Promise.all(preloadContext.promises); // 모든 프로미스를 기다립니다.
  } catch (e) {
    return res.status(500);
  }
  preloadContext.done = true;
  const root = ReactDOMServer.renderToString(jsx); // 렌더링을 합니다.
  // JSON을 문자열로 변환하고 악성 스크립트가 실행되는 것을 방지하기 위해 <를 치환 처리
  // https://redux.js.org/recipes/server-rendering#security-considerations
  const stateString = JSON.stringify(store.getState()).replace(/</g, ‘\u003c‘);
  const stateScript = &lt;script&gt;_ _PRELOADED_STATE_ _ = </span><span class="co49">${</span><span class="co33">stateString</span><span class="co49">}</span><span class="co31">&lt;/script&gt;; // 리덕스 초기 상태를 스크립트로 주입합니다.



// 미리 불러와야 하는 스타일/스크립트를 추출하고
  const tags = {
    scripts: stateScript + extractor.getScriptTags(), // 스크립트 앞부분에 리덕스 상태 넣기
    links: extractor.getLinkTags(),
    styles: extractor.getStyleTags()
  };



res.send(createPage(root, tags)); // 결과물을 응답합니다.
};




const serve = express.static(path.resolve('./build'), {
  index: false // “/” 경로에서 index.html을 보여 주지 않도록 설정
});



app.use(serve); // 순서가 중요합니다. serverRender 전에 위치해야 합니다.
app.use(serverRender);



// 5000 포트로 서버를 가동합니다.
app.listen(5000, () => {
  console.log('Running on http://localhost:5000');
});