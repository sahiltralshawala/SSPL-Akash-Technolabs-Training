import React from 'react';
class CounterApplicaion extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {
        val: 0,
    }
    Increment() {
        if (this.state.val < 10) {
            this.setState({
                val: this.state.val + 1,
            })
        }
        else {
            return;
        }
    }
    render() {
        return (
            <>
                <h3>Task 4 - Counter Application</h3>
                <p>{this.state.val}</p>
                <input type="button" value="+" onClick={this.Increment.bind(this)} disabled={this.state.val === 10} />
                <input type="button" value="-" onClick={() => { this.setState({ val: this.state.val - 1 }) }} disabled={this.state.val === 0} />
            </>
        );
    }
}

export default CounterApplicaion;