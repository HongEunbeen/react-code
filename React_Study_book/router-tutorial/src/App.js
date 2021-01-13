import logo from './logo.svg';
import './App.css';
import {Link, Route} from 'react-router-dom';
import About from './About.js';
import Home from './Home.js';

function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
      </ul>
      <hr/>
      <Route path="/" component={Home} exact={true}/>{/*exact props 이유는 /about 규칙에 / 규칙도 포함되기 때문*/} 
      <Route path="/about" component={About}/>
    </div>
  );
}

export default App;
