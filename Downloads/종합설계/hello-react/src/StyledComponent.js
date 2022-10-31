import React from ‘react‘;
import styled, { css } from ‘styled-components‘;


const Box = styled.div</span>
  <span class="co44">/* props</span><span class="co44">로</span> <span class="co44">넣어</span> <span class="co44">준</span> <span class="co44">값을</span> <span class="co44">직접</span> <span class="co44">전달해</span> <span class="co44">줄</span> <span class="co44">수</span> <span class="co44">있습니다</span><span class="co44">. */</span>
  <span class="co33">background</span><span class="co34">:</span> <span class="co49">${</span><span class="co33">props</span> <span class="co46">=&gt;</span> <span class="co34">props</span><span class="co33">.</span><span class="co34">color</span> <span class="co35">||</span> <span class="co31">'</span><span class="co31">blue</span><span class="co31">'</span><span class="co49">}</span><span class="co36">;</span>
  <span class="co33">padding</span><span class="co34">:</span> <span class="co32">1rem</span><span class="co36">;</span>
  <span class="co33">display</span><span class="co34">:</span> <span class="co33">flex</span><span class="co36">;</span>
<span class="co31">;



const Button = styled.button`
  background: white;
  color: black;
  border-radius: 4px;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  font-size: 1rem;
  font-weight: 600;



/* & 문자를 사용하여 Sass처럼 자기 자신 선택 가능 */
  &:hover {
    background: rgba(255, 255, 255, 0.9);
  }



/* 다음 코드는 inverted 값이 true일 때 특정 스타일을 부여해 줍니다. */
  ${props =>
    props.inverted &&
    css</span>
      <span class="co33">background</span><span class="co34">:</span> <span class="co33">none</span><span class="co49">;</span>
      <span class="co33">border</span><span class="co34">:</span> <span class="co32">2px</span> <span class="co33">solid</span> <span class="co32">white</span><span class="co49">;</span>
      <span class="co33">color</span><span class="co34">:</span> <span class="co32">white</span><span class="co49">;</span>
      <span class="co34">&amp;</span><span class="co32">:hover</span><span class="co49"> {</span>
        <span class="co33">background:</span> <span class="co32">white</span><span class="co49">;</span>
        <span class="co33">color:</span> <span class="co32">black</span><span class="co49">;</span>
<span class="co49">      }</span>
    <span class="co31">};
  & + button {
    margin-left: 1rem;
  }
`;



const StyledComponent = () => (
  <Box color=“black“>
    <Button>안녕하세요</Button>
    <Button inverted={true}>테두리만</Button>
  </Box>
);



export default StyledComponent;