import React from 'react';
import {Route} from 'react-router-dom';
import NewsPage from './pages/NewsPage';

const App = () => {
  return (
   <Route path="/:category?" component={NewsPage} />
  );
};

export default App;

// category? > category 값이 선택적이라는 의미 (있을 수도 있고 없을 수도 있다는 뜻)
// category URL 파라미터가 없다면 전체 카테고리를 선택한 것으로 간주