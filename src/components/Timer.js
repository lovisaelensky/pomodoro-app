import React from 'react';

class Timer extends React.Component {
    constructor() {
        super();

        this.state = {
          isSession: true,
          timerSecond: 0,
          intervalId: 0
        }

        this.play = this.play.bind(this);
        this.decreaseTimer = this.decreaseTimer.bind(this);
    }

    play() {
        let intervalId = setInterval(this.decreaseTimer, 1000);

        this.setState({
            intervalId: intervalId
        })
    }

    decreaseTimer() {
        switch (this.state.timerSecond) {
            case 0:
                this.props.updateTimerMinute()
                this.setState({
                    timerSecond: 59
                })
                break;
            default:
                this.setState((prevState) => {
                    return {
                        timerSecond: prevState.timerSecond - 1
                    }
                })
                break;
        }
    }

    render() {
        return (
            <section>
                <section className="timer-container">
                    <h4>{this.state.isSession === true ? "Session" : "Break"}</h4>
                    <span className="timer">{this.props.timerMinute}</span>
                    <span className="timer">:</span>
                    <span className="timer">{this.state.timerSecond === 0 
                        ? "00" 
                        : this.state.timerSecond < 10 
                        ? "0" + this.state.timerSecond 
                        : this.state.timerSecond}</span>
                </section>
                <section className="timer-actions">
                    <button onClick={this.play}>Play</button>
                    <button onClick={this.stop}>Stop</button>
                    <button onClick={this.reset}>Reset</button>
                </section>
            </section>
        );
    }
}

export default Timer;