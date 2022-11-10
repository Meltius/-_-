import Joi from ‘joi‘;
import User from ‘../../models/user‘;



export const register = async ctx => {
  // Request Body 검증하기
  const schema = Joi.object().keys({
    username: Joi.string()
      .alphanum()
      .min(3)
      .max(20)
      .required(),
    password: Joi.string().required(),
  });
  const result = Joi.validate(ctx.request.body, schema);
  if (result.error) {
    ctx.status = 400;
    ctx.body = result.error;
    return;
  }



const { username, password } = ctx.request.body;
  try {
    // username이 이미 존재하는지 확인
    const exists = await User.findByUsername(username);
    if (exists) {
      ctx.status = 409; // Conflict
      return;
    }



<span class="cd2 co46">const</span> <span class="cd2 co32">user</span> <span class="cd2 co47">=</span> <span class="cd2 co46">new</span> <span class="cd2 co48">User</span><span class="cd2 co33">({</span>
  <span class="cd2 co33">username,</span>
<span class="cd2 co33">});</span>
<span class="cd2 co46">await</span> <span class="cd2 co34">user</span><span class="cd2 co33">.</span><span class="cd2 co47">setPassword</span><span class="cd2 co33">(password);</span> <span class="cd2 co44">// </span><span class="cd2 co44">비밀번호</span><span class="cd2 co44"> </span><span class="cd2 co44">설정</span>
<span class="cd2 co46">await</span> <span class="cd2 co34">user</span><span class="cd2 co33">.</span><span class="cd2 co47">save</span><span class="cd2 co33">();</span> <span class="cd2 co44">// </span><span class="cd2 co44">데이터베이스에</span><span class="cd2 co44"> </span><span class="cd2 co44">저장</span>

<span class="cd2 co44">// </span><span class="cd2 co44">응답할</span><span class="cd2 co44"> </span><span class="cd2 co44">데이터에서</span><span class="cd2 co44"> hashedPassword </span><span class="cd2 co44">필드</span><span class="cd2 co44"> </span><span class="cd2 co44">제거</span>
<span class="cd2 co46">const</span> <span class="cd2 co32">data</span> <span class="cd2 co47">=</span> <span class="cd2 co34">user</span><span class="cd2 co33">.</span><span class="cd2 co47">toJSON</span><span class="cd2 co33">();</span>
<span class="cd2 co47">delete</span> <span class="cd2 co34">data</span><span class="cd2 co33">.</span><span class="cd2 co34">hashedPassword</span><span class="cd2 co33">;</span>
<span class="cd2 co34">ctx</span><span class="cd2 co33">.</span><span class="cd2 co34">body</span> <span class="cd2 co47">=</span> <span class="cd2 co33">data;</span>


} catch (e) {
    ctx.throw(500, e);
  }
};