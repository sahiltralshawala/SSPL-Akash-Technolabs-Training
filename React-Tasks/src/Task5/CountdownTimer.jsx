import React from "react";
class CountdownTimer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }
    componentDidMount() {
        this.handleStart();
    }

    handleStop = () => {
        clearInterval(this.timer);
        this.timer = null; 
    }

    handleReset = () => {
        this.setState({ count: 0 });
    }
    
    handleStart = () => {
        if (!this.timer) {  
            this.timer = setInterval(() => {
                if (this.state.count === 10) {
                    this.handleStop();
                }
                else {
                    this.setState(prevState => ({
                        count: prevState.count + 1
                    }))
                }
            }, 1000);
        }
    }
    render() {
        return (
            <div>
                <h1>Countdown Timer</h1>
                <p>Count: {this.state.count}</p>
                <button onClick={this.handleReset}>Reset</button>
                <button onClick={this.handleStop}>Stop</button>
                <button onClick={this.handleStart}>Start</button>
            </div>
        )
    }
}

export default CountdownTimer;