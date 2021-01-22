//API를 요청하고 뉴스 데이터가 들어 있는 배열을 컴포넌트 배열로 변환하여 렌더링 해주는 컴포넌트
//컴포넌트가 화면에 보이는 시점에 API 요청 > useEffect 사용해 컴포넌트가 처음 렌더링되는 시점에 API 요청
//주의할 점 > useEfect에 등록하는 함수에 async x > useeffect에서 반환해야 하는 값을 뒷정리 함수 때문
//sueEffect 내부에서 async.await를 사용하고 싶다면, 함수 내부에 async 키워드가 붙은 또 다른 함수 만들어서 사용하기!
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from '../../node_modules/axios/index';
import NewsItem from './NewsItem';

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const sampleArticle = {
    title : "제목",
    description : "내용",
    url : "https://google.com",
    urlToImage : "https://via.placeholder.com/160"
};

const NewList = () => {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try{
        const response = await axios.get(
          'https://newsapi.org/v2/top_headlines?country=kr&apiKey=2e756a921492466584495df8604c71aa'
        );
      }catch(e){
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  if(loading){
    return <NewsListBlock>대기중.....</NewsListBlock>
  }
  if(!articles){
    return null;
  }

  return (
      <NewsListBlock>
          <NewsItem article={sampleArticle}/>
          <NewsItem article={sampleArticle}/>
          <NewsItem article={sampleArticle}/>
          <NewsItem article={sampleArticle}/>
          <NewsItem article={sampleArticle}/>
          <NewsItem article={sampleArticle}/>
          <NewsItem article={sampleArticle}/>
      </NewsListBlock>
  );
};

export default NewList;