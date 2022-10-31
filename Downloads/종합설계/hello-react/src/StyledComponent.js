import styled from 'styled-components';
 
// 태그의 타입을 styled 함수의 인자로 전달
const MyInput = styled(‘input‘)</span>
  <span class="co33">background</span><span class="co34">:</span> <span class="co32">gray</span><span class="co36">;</span>
<span class="co31">
// 아예 컴포넌트 형식의 값을 넣어 줌
const StyledLink = styled(Link)</span>
  <span class="co33">color</span><span class="co34">:</span> <span class="co32">blue</span><span class="co36">;</span>
<span class="co31">
import styled, { css } from ‘styled-components‘;


const Box = styled.div`
  /* props로 넣어 준 값을 직접 전달해 줄 수 있습니다. */
  background: ${props => props.color || 'blue'};
  padding: 1rem;
  display: flex;
  /* 기본적으로는 가로 크기 1024px에 가운데 정렬을 하고
    가로 크기가 작아짐에 따라 크기를 줄이고
    768px 미만이 되면 꽉 채웁니다. */
  width: 1024px;
  margin: 0 auto;
  @media (max-width: 1024px) {
    width: 768px;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;



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