import React from 'react';

class DigitalClock extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {
        currentTime: new Date()
    };

    componentDidMount() {
        this.timer = setInterval(() => {
            this.setState({
                currentTime: new Date()
            });
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    render() {
        return (
            <div style={{ textAlign: 'center', marginTop: '50px' }}>
                <h2>Digital Clock</h2>

                <h3>
                    {this.state.currentTime.toLocaleDateString()}
                </h3>

                <h1>
                    {this.state.currentTime.toLocaleTimeString()}
                </h1>
            </div>
        );
    }
}

export default DigitalClock;