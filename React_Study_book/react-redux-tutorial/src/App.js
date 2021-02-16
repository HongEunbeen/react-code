import logo from './logo.svg';
import './App.css';
import Counter from './component/Counter';
import Todos from './component/Todos';
import CounterContainer from './containers/CounterContainer';

function App() {
  return (
    <div className="App">
      <CounterContainer/>
      <hr/>
      <Todos/>
    </div>
  );
}

export default App;
