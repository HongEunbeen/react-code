import logo from './logo.svg';
import './App.css';
import {Link, Route} from 'react-router-dom';
import About from './About.js';
import Home from './Home.js';
import Profile from './Profile';

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
        <li>
          <Link to="/profile/velopert">velopert 프로필</Link>
        </li>
        <li>
          <Link to="/profile/gildong">gildong 프로필</Link>
        </li>
      </ul>
      <hr/>
      <Route path="/" component={Home} exact={true}/>{/*exact props 이유는 /about 규칙에 / 규칙도 포함되기 때문*/} 
      <Route path={['/info', "/about"]} component={About}/>
      <Route path='/profile/:username' component={Profile}/>
      {/*이렇게 설정하면 match.params.username 값을 통해 username 값 조회 가능*/}
    </div>
  );
}

export default App;