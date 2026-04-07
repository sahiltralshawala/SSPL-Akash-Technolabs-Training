import React from 'react';

class CountCharacters extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {
        txt1: '',
        count: 0,
    }
    handleChange = (e) => {
        this.setState({
            txt1: e.target.value,
        })
    }
    Submit = () => {
        var len = this.state.txt1.trim().length;
        this.setState({
            count: len,
        })
    }
    render() {
        return (
            <>
                <h3>Task 3 - Count Characters</h3>
                Enter String: <input type="text" name="txt1" onChange={this.handleChange.bind(this)} />
                <p>Character Count: {this.state.count}</p>
                <br />
                <input type="button" value="Submit" onClick={this.Submit.bind(this)} />
            </>
        );
    }
}

export default CountCharacters;