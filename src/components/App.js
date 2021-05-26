import React from 'react';
import '../App.css';
import Timer from './Timer';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      breakLength: 5,
      sessionLength: 25,
      timerMinute: 25
    }
  }
  render() {
      return (
      <main>
        <h2>Pomodoro Clock</h2>
        <Timer timerMinute={this.state.timerMinute} />
      </main>
    );
  }
}

export default App;
