import React from 'react';
import './App.css';
import QuizBar from './components/QuizBar';

class App extends React.Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    return (
      <div className="App">
        <QuizBar />
      </div>
    );
  }
} 

export default App;