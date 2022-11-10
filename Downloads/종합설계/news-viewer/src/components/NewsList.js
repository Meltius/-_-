import React from 'react';
import styled from 'styled-components';
import NewsItem from './NewsItem';


const NewsListBlock = styled.div</span>
  <span class="co33">box-sizing</span><span class="co34">:</span> <span class="co33">border-box</span><span class="co36">;</span>
  <span class="co33">padding-bottom</span><span class="co34">:</span> <span class="co32">3rem</span><span class="co36">;</span>
  <span class="co33">width</span><span class="co34">:</span> <span class="co32">768px</span><span class="co36">;</span>
  <span class="co33">margin</span><span class="co34">:</span> <span class="co32">0</span> <span class="co33">auto</span><span class="co36">;</span>
  <span class="co33">margin-top</span><span class="co34">:</span> <span class="co32">2rem</span><span class="co36">;</span>
  <span class="co46">@media</span> <span class="co32">screen</span> <span class="co35">and</span><span class="co36"> (</span><span class="co33">max-width</span><span class="co34">:</span> <span class="co32">768px</span><span class="co36">) {</span>
    <span class="co33">width:</span> <span class="co32">100%</span><span class="co36">;</span>
    <span class="co33">padding-left:</span> <span class="co32">1rem</span><span class="co36">;</span>
    <span class="co33">padding-right:</span> <span class="co32">1rem</span><span class="co36">;</span>
  }
<span class="co31">;



const sampleArticle = {
  title: '제목',
  description: '내용',
  url: 'https://google.com',
  urlToImage: 'https://via.placeholder.com/160',
};



const NewsList = () => {
  return (
    <NewsListBlock>
      <NewsItem article={sampleArticle} />
      <NewsItem article={sampleArticle} />
      <NewsItem article={sampleArticle} />
      <NewsItem article={sampleArticle} />
      <NewsItem article={sampleArticle} />
      <NewsItem article={sampleArticle} />
    </NewsListBlock>
  );
};



export default NewsList;