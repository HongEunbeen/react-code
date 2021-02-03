import logo from './logo.svg';
import './App.css';
import Counter from './component/Counter';
import Todos from './component/Todos';

function App() {
  return (
    <div className="App">
      <Counter number={0}/>
      <hr />
      <Todos />
    </div>
  );
}

export default App;
