import logo from './logo.svg';
import './App.css';
import ColorBox from './components/ColorBox';
import ColorContext from './contexts/color';

function App() {
  return (
    <ColorContext.Provider value={{color : 'red'}}>
  {/*<ColorContext.Provider> 이렇게 하면 오류 발생*/}
      <div>
      <ColorBox />
      </div>
    </ColorContext.Provider>
  );
}

export default App;
