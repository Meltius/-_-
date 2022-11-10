import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import { Link } from 'react-router-dom';


/**
 * 회원가입/로그인 페이지의 레이아웃을 담당하는 컴포넌트입니다.
 */



/* 화면 전체를 채움 */
const AuthTemplateBlock = styled.div</span>
  <span class="cd2 co33">position</span><span class="cd2 co34">:</span> <span class="cd2 co33">absolute</span><span class="cd2 co33">;</span>
  <span class="cd2 co33">left</span><span class="cd2 co34">:</span> <span class="cd2 co32">0</span><span class="cd2 co33">;</span>
  <span class="cd2 co33">top</span><span class="cd2 co34">:</span> <span class="cd2 co32">0</span><span class="cd2 co33">;</span>
  <span class="cd2 co33">bottom</span><span class="cd2 co34">:</span> <span class="cd2 co32">0</span><span class="cd2 co33">;</span>
  <span class="cd2 co33">right</span><span class="cd2 co34">:</span> <span class="cd2 co32">0</span><span class="cd2 co33">;</span>
  <span class="cd2 co33">background</span><span class="cd2 co34">:</span> <span class="co49">${</span><span class="cd2 co34">palette</span><span class="cd2 co33">.</span><span class="cd2 co34">gray</span><span class="cd2 co33">[</span><span class="cd2 co32">2</span><span class="cd2 co33">]</span><span class="co33">}</span><span class="cd2 co33">;</span>
  <span class="cd2 co44">/* flex</span><span class="cd2 co44">로</span><span class="cd2 co44"> </span><span class="cd2 co44">내부</span><span class="cd2 co44"> </span><span class="cd2 co44">내용</span><span class="cd2 co44"> </span><span class="cd2 co44">중앙</span><span class="cd2 co44"> </span><span class="cd2 co44">정렬</span><span class="cd2 co44"> */</span>
  <span class="cd2 co33">display</span><span class="cd2 co34">:</span> <span class="cd2 co33">flex</span><span class="cd2 co33">;</span>
  <span class="cd2 co33">flex-direction</span><span class="cd2 co34">:</span> <span class="cd2 co33">column</span><span class="cd2 co33">;</span>
  <span class="cd2 co33">justify-content</span><span class="cd2 co34">:</span> <span class="cd2 co33">center</span><span class="cd2 co33">;</span>
  <span class="cd2 co33">align-items</span><span class="cd2 co34">:</span> <span class="cd2 co33">center</span><span class="cd2 co33">;</span>
<span class="cd2 co31">;



/* 흰색 박스 */
const WhiteBox = styled.div</span>
  <span class="cd2 co32">.logo-area</span><span class="cd2 co33"> {</span>
    <span class="cd2 co33">display:</span> <span class="cd2 co33">block</span><span class="cd2 co33">;</span>
    <span class="cd2 co33">padding-bottom:</span> <span class="cd2 co32">2rem</span><span class="cd2 co33">;</span>
    <span class="cd2 co33">text-align:</span> <span class="cd2 co33">center</span><span class="cd2 co33">;</span>
    <span class="cd2 co33">font-weight:</span> <span class="cd2 co33">bold</span><span class="cd2 co33">;</span>
    <span class="cd2 co33">letter-spacing:</span> <span class="cd2 co32">2px</span><span class="cd2 co33">;</span>
<span class="cd2 co33">  }</span>
  <span class="cd2 co33">box-shadow</span><span class="cd2 co34">:</span> <span class="cd2 co32">0</span> <span class="cd2 co32">0</span> <span class="cd2 co32">8px</span> <span class="cd2 co47">rgba</span><span class="cd2 co33">(</span><span class="cd2 co32">0</span><span class="cd2 co33">, </span><span class="cd2 co32">0</span><span class="cd2 co33">, </span><span class="cd2 co32">0</span><span class="cd2 co33">, </span><span class="cd2 co32">0.025</span><span class="cd2 co33">);</span>
  <span class="cd2 co33">padding</span><span class="cd2 co34">:</span> <span class="cd2 co32">2rem</span><span class="cd2 co33">;</span>
  <span class="cd2 co33">width</span><span class="cd2 co34">:</span> <span class="cd2 co32">360px</span><span class="cd2 co33">;</span>
  <span class="cd2 co33">background</span><span class="cd2 co34">:</span> <span class="cd2 co32">white</span><span class="cd2 co33">;</span>
  <span class="cd2 co33">border-radius</span><span class="cd2 co34">:</span> <span class="cd2 co32">2px</span><span class="cd2 co33">;</span>
<span class="cd2 co31">;



const AuthTemplate = ({ children }) => {
  return (
    <AuthTemplateBlock>
      <WhiteBox>
        <div className="logo-area">
          <Link to="/">REACTERS</Link>
        </div>
        {children}
      </WhiteBox>
    </AuthTemplateBlock>
  );
};



export default AuthTemplate;