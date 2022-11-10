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

// asset-manifest.json에서 파일 경로들을 조회합니다.
const manifest = JSON.parse(
  fs.readFileSync(path.resolve('./build/asset-manifest.json'), 'utf8')
);



const chunks = Object.keys(manifest.files)
  .filter(key => /chunk</span>.js$/.exec(key)) // chunk.js로 끝나는 키를 찾아서
  .map(key => &lt;script src=</span><span class="cd2 co31">"</span><span class="co49">${</span><span class="cd2 co33">manifest[key]</span><span class="co49">&rbrace;</span><span class="cd2 co31">"</span><span class="cd2 co31">&gt;&lt;/script&gt;) // 스크립트 태그로 변환하고
  .join(“); // 합침




  function createPage(root, stateScript) {
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
<span class="co31">    &lt;link href=</span><span class="co31">"</span><span class="co49">${</span><span class="co33">manifest[</span><span class="co31">'</span><span class="co31">main.css</span><span class="co31">'</span><span class="co33">]</span><span class="co49">}</span><span class="co31">"</span><span class="co31"> rel=</span><span class="co31">"</span><span class="co31">stylesheet</span><span class="co31">"</span><span class="co31"> /&gt;</span>
<span class="co31">  &lt;/head&gt;</span>
<span class="co31">  &lt;body&gt;</span>
<span class="co31">    &lt;noscript&gt;You need to enable JavaScript to run this app.&lt;/noscript&gt;</span>
<span class="co31">    &lt;div id=</span><span class="co31">"</span><span class="co31">root</span><span class="co31">"</span><span class="co31">&gt;</span>
      <span class="co49">${</span><span class="co34">root</span><span class="co49">}</span>
<span class="co31">    &lt;/div&gt;</span>
<span class="cd2 co31">    </span><span class="co49">${</span><span class="cd2 co33">stateScript</span><span class="co33">}</span>
<span class="co31">    &lt;script src=</span><span class="co31">"</span><span class="co49">${</span><span class="co33">manifest[</span><span class="co31">'</span><span class="co31">runtime~main.js</span><span class="co31">'</span><span class="co33">]</span><span class="co49">}</span><span class="co31">"</span><span class="co31">&gt;&lt;/script&gt;</span>
    <span class="co49">${</span><span class="co33">chunks</span><span class="co49">}</span>
<span class="co31">    &lt;script src=</span><span class="co31">"</span><span class="co49">${</span><span class="co33">manifest[</span><span class="co31">'</span><span class="co31">main.js</span><span class="co31">'</span><span class="co33">]</span><span class="co49">}</span><span class="co31">"</span><span class="co31">&gt;&lt;/script&gt;</span>
<span class="co31">  &lt;/body&gt;</span>
<span class="co31">  &lt;/html&gt;</span>
<span class="co31">;
}
const app = express();



// 서버 사이드 렌더링을 처리할 핸들러 함수입니다.
const serverRender = async (req, res, next) => {
  // 이 함수는 404가 떠야 하는 상황에 404를 띄우지 않고 서버 사이드 렌더링을 해 줍니다.



const context = {};
  const store = createStore(rootReducer, applyMiddleware(thunk));



const preloadContext = {
    done: false,
    promises: []
  };
  const jsx = (
    <PreloadContext.Provider value={preloadContext}>
      <Provider store={store}>
        <StaticRouter location={req.url} context={context}>
          <App />
        </StaticRouter>
      </Provider>
    </PreloadContext.Provider>
  );



ReactDOMServer.renderToStaticMarkup(jsx); // renderToStaticMarkup으로 한번 렌더링합니다.
  try {
    await Promise.all(preloadContext.promises); // 모든 프로미스를 기다립니다.
  } catch (e) {
    return res.status(500);
  }
  preloadContext.done = true;
  const root = ReactDOMServer.renderToString(jsx); // 렌더링을 합니다.
  res.send(createPage(root)); // 결과물을 응답합니다.
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