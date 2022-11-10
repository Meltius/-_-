import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';


const categories = [
  (…)
];



const CategoriesBlock = styled.div</span>
  <span class="co33">(...)</span>
<span class="co31">;



const Category = styled(NavLink)`
  font-size: 1.125rem;
  cursor: pointer;
  white-space: pre;
  text-decoration: none;
  color: inherit;
  padding-bottom: 0.25rem;



&:hover {
    color: #495057;
  }



&.active {
    font-weight: 600;
    border-bottom: 2px solid #22b8cf;
    color: #22b8cf;
    &:hover {
      color: #3bc9db;
    }
  }



& + & {
    margin-left: 1rem;
  }
</span><span class="co33">;</span>
<span class="co46">const</span> <span class="co47">Categories</span> <span class="co35">=</span> <span class="co33">()</span> <span class="co46">=&gt;</span> <span class="co33">{</span>
  <span class="co46">return</span> <span class="co33">(</span>
    <span class="co33">&lt;</span><span class="co48">CategoriesBlock</span><span class="co33">&gt;</span>
      <span class="co49">{</span><span class="co34">categories</span><span class="co33">.</span><span class="co47">map</span><span class="co33">(c </span><span class="co46">=&gt;</span><span class="co33"> (</span>
<span class="co33">        &lt;</span><span class="co48">Category</span>
          <span class="co32">key</span><span class="co33">={</span><span class="co34">c</span><span class="co33">.</span><span class="co34">name</span><span class="co33">}</span>
          <span class="cd2 co32">activeClassName</span><span class="cd2 co33">=</span><span class="cd2 co31">"</span><span class="cd2 co31">active</span><span class="cd2 co31">"</span>
          <span class="cd2 co32">exact</span><span class="cd2 co33">={</span><span class="cd2 co34">c</span><span class="cd2 co33">.</span><span class="cd2 co34">name</span><span class="cd2 co33"> === </span><span class="cd2 co31">'</span><span class="cd2 co31">all</span><span class="cd2 co31">'</span><span class="cd2 co33">}</span>
          <span class="cd2 co32">to</span><span class="cd2 co33">={</span><span class="cd2 co34">c</span><span class="cd2 co33">.</span><span class="cd2 co34">name</span><span class="cd2 co33"> === </span><span class="cd2 co31">'</span><span class="cd2 co31">all</span><span class="cd2 co31">'</span><span class="cd2 co33"> ? </span><span class="cd2 co31">'</span><span class="cd2 co31">/</span><span class="cd2 co31">'</span><span class="cd2 co33"> : </span><span class="cd2 co31">/${c.name}`}
        >
          {c.text}
        </Category>
      ))}
    </CategoriesBlock>
  );
};



export default Categories;