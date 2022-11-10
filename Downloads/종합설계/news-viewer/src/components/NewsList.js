import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import NewsItem from './NewsItem';
import axios from 'axios';


const NewsListBlock = styled.div</span>
  <span class="co33">(...)</span>
<span class="co31">;



const NewsList = ({ category }) => {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);



useEffect(() => {
    // async를 사용하는 함수 따로 선언
    const fetchData = async () => {
      setLoading(true);
      try {
        const query = category === ‘all‘ ? “ : &amp;category=</span><span class="cd2 co49">${</span><span class="cd2 co33">category</span><span class="cd2 co49">}</span><span class="cd2 co31">;
        const response = await axios.get(
          https://newsapi.org/v2/top-headlines?country=kr</span><span class="cd2 co49">${</span><span class="cd2 co33">query</span><span class="cd2 co49">}</span><span class="cd2 co31">&amp;apiKey=0a8c4202385d4ec1bb93b7e277b3c51f,
        );
        setArticles(response.data.articles);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
  }, [category]);



(…)
};



export default NewsList;