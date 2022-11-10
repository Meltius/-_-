import React from 'react';
import styled from 'styled-components';


const categories = [
  {
    name: 'all',
    text: '전체보기'
  },
  {
    name: 'business',
    text: '비즈니스'
  },
  {
    name: 'entertainment',
    text: '엔터테인먼트'
  },
  {
    name: 'health',
    text: '건강'
  },
  {
    name: 'science',
    text: '과학'
  },
  {
    name: 'sports',
    text: '스포츠'
  },
  {
    name: 'technology',
    text: '기술'
  }
];



const CategoriesBlock = styled.div</span>
  <span class="co33">display</span><span class="co34">:</span> <span class="co33">flex</span><span class="co36">;</span>
  <span class="co33">padding</span><span class="co34">:</span> <span class="co32">1rem</span><span class="co36">;</span>
  <span class="co33">width</span><span class="co34">:</span> <span class="co32">768px</span><span class="co36">;</span>
  <span class="co33">margin</span><span class="co34">:</span> <span class="co32">0</span> <span class="co33">auto</span><span class="co36">;</span>
  <span class="co46">@media</span> <span class="co32">screen</span> <span class="co35">and</span><span class="co36"> (</span><span class="co33">max-width</span><span class="co34">:</span> <span class="co32">768px</span><span class="co36">) {</span>
    <span class="co33">width:</span> <span class="co32">100%</span><span class="co36">;</span>
    <span class="co33">overflow-x:</span> <span class="co33">auto</span><span class="co36">;</span>
  }
<span class="co31">;



const Category = styled.div`
  font-size: 1.125rem;
  cursor: pointer;
  white-space: pre;
  text-decoration: none;
  color: inherit;
  padding-bottom: 0.25rem;



&:hover {
    color: #495057;
  }



& + & {
    margin-left: 1rem;
  }
`;
const Categories = () => {
  return (
    <CategoriesBlock>
      {categories.map(c => (
        <Category key={c.name}>{c.text}</Category>
      ))}
    </CategoriesBlock>
  );
};



export default Categories;