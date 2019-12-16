import React from 'react';
import './App.css';
import QuizBar from './components/QuizBar';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardStyle: 'Random',
    };
  }

  userChoice = cardStyle => {
    this.setState({
      cardStyle
    })
  }

  render() {
    console.log(this.state.cardStyle);
    return (
      <div className="App">
        <QuizBar userChoice={this.userChoice} />
      </div>
    );
  }
} 

export default App;