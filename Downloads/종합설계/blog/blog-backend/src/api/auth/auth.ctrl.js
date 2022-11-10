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



<span class="co46">const</span> <span class="co32">user</span> <span class="co35">=</span> <span class="co46">new</span> <span class="co48">User</span><span class="co33">({</span>
  <span class="co33">username,</span>
<span class="co33">});</span>
<span class="co46">await</span> <span class="co34">user</span><span class="co33">.</span><span class="co47">setPassword</span><span class="co33">(password);</span> <span class="co44">// 비밀번호 설정</span>
<span class="co46">await</span> <span class="co34">user</span><span class="co33">.</span><span class="co47">save</span><span class="co33">();</span> <span class="co44">// 데이터베이스에 저장</span>

<span class="co34">ctx</span><span class="co33">.</span><span class="co34">body</span> <span class="co35">=</span> <span class="cd2 co34">user</span><span class="cd2 co33">.</span><span class="cd2 co47">serialize</span><span class="cd2 co33">();</span>


} catch (e) {
    ctx.throw(500, e);
  }
};

