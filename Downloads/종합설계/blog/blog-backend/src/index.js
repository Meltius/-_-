const Koa = require('koa');
const Router = require('koa-router');


const app = new Koa();
const router = new Router();



// 라우터 설정
router.get('/', ctx => {
  ctx.body = '홈';
});



router.get('/about/:name?', ctx => {
  const { name } = ctx.params;
  // name의 존재 유무에 따라 다른 결과 출력
  ctx.body = name ? </span><span class="co49">${</span><span class="cd2 co33">name</span><span class="co33">}</span><span class="cd2 co31">의</span><span class="cd2 co31"> </span><span class="cd2 co31">소개</span><span class="cd2 co31"> : ‘소개‘;
});



router.get('/posts', ctx => {
  const { id } = ctx.query;
  // id의 존재 유무에 따라 다른 결과 출력
  ctx.body = id ? </span><span class="cd2 co31">포스트</span><span class="cd2 co31"> #</span><span class="co49">${</span><span class="cd2 co33">id</span><span class="co49">}</span><span class="cd2 co31"> : ‘포스트 아이디가 없습니다.’;
});



// app 인스턴스에 라우터 적용
app.use(router.routes()).use(router.allowedMethods());



app.listen(4000, () => {
  console.log('Listening to port 4000');
});