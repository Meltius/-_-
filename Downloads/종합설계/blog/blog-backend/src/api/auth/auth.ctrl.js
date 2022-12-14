import Joi from 'joi';
import User from '../../models/user';



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
    ctx.body = user.serialize();
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



<span class="cd2 co46">const</span> <span class="cd2 co32">token</span> <span class="cd2 co47">=</span> <span class="cd2 co34">user</span><span class="cd2 co33">.</span><span class="cd2 co47">generateToken</span><span class="cd2 co33">();</span>
<span class="cd2 co34">ctx</span><span class="cd2 co33">.</span><span class="cd2 co34">cookies</span><span class="cd2 co33">.</span><span class="cd2 co47">set</span><span class="cd2 co33">(</span><span class="cd2 co31">'</span><span class="cd2 co31">access_token</span><span class="cd2 co31">'</span><span class="cd2 co33">,</span> <span class="cd2 co33">token,</span> <span class="cd2 co33">{</span>


      maxAge: 1000  60  60  24  7, // 7일
      httpOnly: true,
    });
  } catch (e) {
    ctx.throw(500, e);
  }
};



export const login = async ctx => {
  const { username, password } = ctx.request.body;


// username, password가 없으면 에러 처리
  if (!username || !password) {
    ctx.status = 401; // Unauthorized
    return;
  }



try {
    const user = await User.findByUsername(username);
    // 계정이 존재하지 않으면 에러 처리
    if (!user) {
      ctx.status = 401;
      return;
    }
    const valid = await user.checkPassword(password);
    // 잘못된 비밀번호
    if (!valid) {
      ctx.status = 401;
      return;
    }
    ctx.body = user.serialize();
    const token = user.generateToken();
    ctx.cookies.set('access_token', token, {
      maxAge: 1000  60  60  24  7, // 7일
      httpOnly: true,
    });
  } catch (e) {
    ctx.throw(500, e);
  }
};

export const check = async ctx => {
  const { user } = ctx.state;
  if (!user) {
    // 로그인 중 아님
    ctx.status = 401; // Unauthorized
    return;
  }
  ctx.body = user;
};

/*
  POST /api/auth/logout
*/
export const logout = async ctx => {
  ctx.cookies.set('access_token');
  ctx.status = 204; // No Content
};