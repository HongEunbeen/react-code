import logo from './logo.svg';
import './App.css';
import { Link , Route, Switch, Swtich } from 'react-router-dom';
import About from './About.js';
import Home from './Home.js';
import Profiles from './Profiles';
import HistorySample from './HistorySample';

const App = () => {
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
          <Link to="/profiles">프로필</Link>
        </li>
        <li>
          <Link to="/history">History 예제</Link>
        </li>
      </ul>
      <hr/>
      <Switch>
        <Route path="/" component={Home} exact={true}/>{/*exact props 이유는 /about 규칙에 / 규칙도 포함되기 때문*/} 
        <Route path={['/info', "/about"]} component={About}/>
        <Route path='/profiles' component={Profiles}/>
        <Route path="/history" component={HistorySample}/>
        <Route 
          render={({location}) => (
            <div>
              <h2>이 페이지는 존재하지 않습니다:</h2>
              <p>{location.pathname}</p>
            </div>
          )}
        />
        {/*Not Found page */}
      </Switch>
    </div>
  );
}

export default App;