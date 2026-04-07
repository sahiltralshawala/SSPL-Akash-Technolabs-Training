import React from 'react';
class GuessNo extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {
        randomNumber: Math.floor(Math.random() * 10) + 1,
        userInput: '',
        res: ''
    };

    handleChange = (e) => {
        this.setState({ userInput: e.target.value });
    };

    checkNumber = () => {
        const { userInput, randomNumber } = this.state;

        if (parseInt(userInput) === randomNumber) {
            this.setState({ res: " Success! You guessed it." });
        } else {
            this.setState({ res: "Try again." });
        }
    };

    render() {
        return (<>
            <div style={{ textAlign: 'center', marginTop: '50px' }}>
                <h2>Guess the Number (1 to 10)</h2>

                <input
                    type="number"
                    placeholder="Enter number"
                    value={this.state.userInput}
                    onChange={this.handleChange}
                />

                <br /><br />

                <button onClick={this.checkNumber}>
                    Check
                </button>

                <h3>{this.state.res}</h3>
            </div>
        </>);
    }
}
export default GuessNo;