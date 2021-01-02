import React, {Component} from 'react';
import './App.css';

//import MyComponent from './MyComponent';
//import Counter from './Counter';
//import Say from './Say';
//import EventPracties from './EventPractice';
//import ValidationSample from './ValidationSample';
//import ScrollBox from './ScrollBox.js'
//import IterationSample from './IterationSample.js'
import LifeCycleSample from './LifeCycleSample.js';
import ErrorBoundary from './ErrorBoundary.js';

function getRandomColor(){
  return'#' + Math.floor(Math.random() * 16777215).toString(16);
  //state의 color 값을 랜덤 색상으로 설정 > hex로 표현 000000 ~ ffffff
}

class App extends Component {
  state = {
    color : '#000000'
  }
  
  handleClick = () => {
    this.setState({
      color : getRandomColor()
    });
  }

  render(){
    return(
      <div>
        <button onClick={this.handleClick}>랜덤 색상</button>
        <ErrorBoundary>
          <LifeCycleSample color={this.state.color}/>
        </ErrorBoundary>
      </div>
    );
  }
}


// const App = () => {
//   //return <MyComponent name='React' favoriteNumber={1}>React</MyComponent>;
//   //return  <Counter/>;
//   //return <Say />;
//   //return <EventPracties />;
//   return <ValidationSample/>;
//    return <div><IterationSmaple/></div>
// };


/* 
<div>
          <ScrollBox ref={(ref) => {this.scrollBox=ref}}/>
          <button onClick={() => {this.scrollBox.scrollToBottom()}}>
            맨 밑으로
          </button>
      </div>


*/

export default App;
