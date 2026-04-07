import React from 'react';
class Calc extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {}
    updateData(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    doSum() {
        var res = parseInt(this.state.txt1) + parseInt(this.state.txt2)
        this.setState({ msg: "Sum is: " + res })
    }
    doSub() {
        var res = parseInt(this.state.txt1) - parseInt(this.state.txt2)
        this.setState({ msg: "Sub is: " + res })
    }
    doMul() {
        var res = parseInt(this.state.txt1) * parseInt(this.state.txt2)
        this.setState({ msg: "Mul is: " + res })
    }
    doDiv() {
        if (parseInt(this.state.txt2) == 0) {
            alert('Can\'t divide by 0')
            return;
        }
        var res = parseInt(this.state.txt1) / parseInt(this.state.txt2)
        this.setState({ msg: "Div is: " + res })
    }
    render() {
        return (
            <>
                <p> Num1: <input type="text" name='txt1' onChange={this.updateData.bind(this)} /></p>
                <p> Num2: <input type="text" name='txt2' onChange={this.updateData.bind(this)} /></p>
                <p>{this.state.msg}</p>
                <button onClick={this.doSum.bind(this)}>Sum</button>
                <button onClick={this.doSub.bind(this)}>Sub</button>
                <button onClick={this.doMul.bind(this)}>Mul</button>
                <button onClick={this.doDiv.bind(this)}>Div</button>
            </>
        );
    }
}

export default Calc;