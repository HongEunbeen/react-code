import React, {Component} from 'react';
import './App.css';
//import MyComponent from './MyComponent';
//import Counter from './Counter';
//import Say from './Say';
//import EventPracties from './EventPractice';
//import ValidationSample from './ValidationSample';
//import ScrollBox from './ScrollBox.js'
import IterationSample from './IterationSample.js'


class App extends Component {
  render(){
    return(
      <div>
        <IterationSample/>
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
