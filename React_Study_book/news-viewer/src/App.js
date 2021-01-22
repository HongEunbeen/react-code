import React from 'react';
import {Route} from 'react-router-dom';
import NewsPage from './pages/NewPage';

const App = () => {
  return (
   <Route paht="/:category?" component={NewsPage} />
  );
};

export default App;