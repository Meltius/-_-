import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import palette from '../../lib/styles/palette';
import Button from '../common/Button';


/**
 * 회원가입 또는 로그인 폼을 보여 줍니다.
 */



const AuthFormBlock = styled.div</span>
  <span class="cd2 co34">h3</span><span class="cd2 co33"> {</span>
    <span class="cd2 co33">margin:</span> <span class="cd2 co32">0</span><span class="cd2 co33">;</span>
    <span class="cd2 co33">color:</span> <span class="co49">${</span><span class="cd2 co34">palette</span><span class="cd2 co33">.</span><span class="cd2 co34">gray</span><span class="cd2 co33">[</span><span class="cd2 co32">8</span><span class="cd2 co33">]</span><span class="co33">}</span><span class="cd2 co33">;</span>
    <span class="cd2 co33">margin-bottom:</span> <span class="cd2 co32">1rem</span><span class="cd2 co33">;</span>
<span class="cd2 co33">  }</span>
<span class="cd2 co31">;



/**
 * 스타일링된 input
 */
const StyledInput = styled.input</span>
  <span class="cd2 co33">font-size</span><span class="cd2 co34">:</span> <span class="cd2 co32">1rem</span><span class="cd2 co33">;</span>
  <span class="cd2 co33">border</span><span class="cd2 co34">:</span> <span class="cd2 co33">none</span><span class="cd2 co33">;</span>
  <span class="cd2 co33">border-bottom</span><span class="cd2 co34">:</span> <span class="cd2 co32">1px</span> <span class="cd2 co33">solid</span> <span class="co49">${</span><span class="cd2 co34">palette</span><span class="cd2 co33">.</span><span class="cd2 co34">gray</span><span class="cd2 co33">[</span><span class="cd2 co32">5</span><span class="cd2 co33">]</span><span class="co33">}</span><span class="cd2 co33">;</span>
  <span class="cd2 co33">padding-bottom</span><span class="cd2 co34">:</span> <span class="cd2 co32">0.5rem</span><span class="cd2 co33">;</span>
  <span class="cd2 co33">outline</span><span class="cd2 co34">:</span> <span class="cd2 co33">none</span><span class="cd2 co33">;</span>
  <span class="cd2 co33">width</span><span class="cd2 co34">:</span> <span class="cd2 co32">100%</span><span class="cd2 co33">;</span>
  <span class="cd2 co34">&amp;</span><span class="cd2 co32">:focus</span><span class="cd2 co33"> {</span>
    <span class="cd2 co33">color:</span><span class="cd2 co33"> $oc</span><span class="cd2 co32">-</span><span class="cd2 co33">teal</span><span class="cd2 co32">-</span><span class="cd2 co33">7;</span>
    <span class="cd2 co33">border-bottom:</span> <span class="cd2 co32">1px</span> <span class="cd2 co33">solid</span> <span class="co49">${</span><span class="cd2 co34">palette</span><span class="cd2 co33">.</span><span class="cd2 co34">gray</span><span class="cd2 co33">[</span><span class="cd2 co32">7</span><span class="cd2 co33">]</span><span class="co33">}</span><span class="cd2 co33">;</span>
<span class="cd2 co33">  }</span>
  <span class="cd2 co34">&amp;</span><span class="cd2 co33"> + </span><span class="cd2 co34">&amp;</span><span class="cd2 co33"> {</span>
    <span class="cd2 co33">margin-top:</span> <span class="cd2 co32">1rem</span><span class="cd2 co33">;</span>
<span class="cd2 co33">  }</span>
<span class="cd2 co31">;



/**
 * 폼 하단에 로그인 혹은 회원가입 링크를 보여 줌
 */
const Footer = styled.div</span>
  <span class="cd2 co33">margin-top</span><span class="cd2 co34">:</span> <span class="cd2 co32">2rem</span><span class="cd2 co33">;</span>
  <span class="cd2 co33">text-align</span><span class="cd2 co34">:</span> <span class="cd2 co33">right</span><span class="cd2 co33">;</span>
  <span class="cd2 co34">a</span><span class="cd2 co33"> {</span>
    <span class="cd2 co33">color:</span> <span class="co49">${</span><span class="cd2 co34">palette</span><span class="cd2 co33">.</span><span class="cd2 co34">gray</span><span class="cd2 co33">[</span><span class="cd2 co32">6</span><span class="cd2 co33">]</span><span class="co33">}</span><span class="cd2 co33">;</span>
    <span class="cd2 co33">text-decoration:</span> <span class="cd2 co33">underline</span><span class="cd2 co33">;</span>
    <span class="cd2 co34">&amp;</span><span class="cd2 co32">:hover</span><span class="cd2 co33"> {</span>
      <span class="cd2 co33">color:</span> <span class="co49">${</span><span class="cd2 co34">palette</span><span class="cd2 co33">.</span><span class="cd2 co34">gray</span><span class="cd2 co33">[</span><span class="cd2 co32">9</span><span class="cd2 co33">]</span><span class="co33">}</span><span class="cd2 co33">;</span>
<span class="cd2 co33">    }</span>
<span class="cd2 co33">  }</span>
<span class="cd2 co31">;



const AuthForm = ({ type, form, onChange, onSubmit }) => {
  const text = textMap[type];
  return (
    <AuthFormBlock>
      <h3>{text}</h3>
      <form onSubmit={onSubmit}>
        <StyledInput
          autoComplete="username"
          name="username"
          placeholder="아이디"
          onChange={onChange}
          value={form.username}
        />
        <StyledInput
          autoComplete="new-password"
          name="password"
          placeholder="비밀번호"
          type="password"
          onChange={onChange}
          value={form.password}
        />
        {type = = = ‘register‘ && (
          <StyledInput
            autoComplete="new-password"
            name="passwordConfirm"
            placeholder="비밀번호 확인"
            type="password"
            onChange={onChange}
            value={form.passwordConfirm}
          />
        )}
        <ButtonWithMarginTop cyan fullWidth style={{ marginTop: '1rem' }}>
          {text}
        </ButtonWithMarginTop>
      </form>
      <Footer>
        {type = = = ‘login‘ ? (
          <Link to="/register">회원가입</Link>
        ) : (
          <Link to="/login">로그인</Link>
        )}
      </Footer>
    </AuthFormBlock>
  );

/**
 * 에러를 보여 줍니다.
 */
 const ErrorMessage = styled.div</span>
 <span class="cd2 co33">color</span><span class="cd2 co34">:</span> <span class="cd2 co32">red</span><span class="cd2 co33">;</span>
 <span class="cd2 co33">text-align</span><span class="cd2 co34">:</span> <span class="cd2 co33">center</span><span class="cd2 co33">;</span>
 <span class="cd2 co33">font-size</span><span class="cd2 co34">:</span> <span class="cd2 co32">0.875rem</span><span class="cd2 co33">;</span>
 <span class="cd2 co33">margin-top</span><span class="cd2 co34">:</span> <span class="cd2 co32">1rem</span><span class="cd2 co33">;</span>
<span class="cd2 co31">;



const AuthForm = ({ type, form, onChange, onSubmit }) => {
 const text = textMap[type];
 return (
   <AuthFormBlock>
     <h3>{text}</h3>
     <form onSubmit={onSubmit}>
       <StyledInput
         autoComplete="username"
         name="username"
         placeholder="아이디"
         onChange={onChange}
         value={form.username}
       />
       <StyledInput
         autoComplete="new-password"
         name="password"
         placeholder="비밀번호"
         type="password"
         onChange={onChange}
         value={form.password}
       />
       {type = = = 'register' && (
         <StyledInput
           autoComplete="new-password"
           name="passwordConfirm"
           placeholder="비밀번호 확인"
           type="password"
           onChange={onChange}
           value={form.passwordConfirm}
         />
       )}
       <ErrorMessage>에러 발생!</ErrorMessage>
       <ButtonWithMarginTop cyan fullWidth style={{ marginTop: '1rem' }}>
         {text}
       </ButtonWithMarginTop>
     </form>
     <Footer>
       {type = = = ‘login‘ ? (
         <Link to="/register">회원가입</Link>
       ) : (
         <Link to="/login">로그인</Link>
       )}
     </Footer>
   </AuthFormBlock>
 );
};



export default AuthForm;