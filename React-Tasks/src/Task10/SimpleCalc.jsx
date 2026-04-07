import React from 'react';
import './style.css';

class SimpleCalculator extends React.Component {
    state = {
        txt: '',
        op: ''
    };

    handleClick = (val) => {

        if (val === 'C') {
            this.setState({ txt: '', op: '' });
        }

        else if (val === '+' || val === '-' || val === '*' || val === '/') {
            this.setState({
                op: val,
                txt: this.state.txt + val
            });
        }

        else if (val === '=') {
            // var { txt, op } = this.state;
            var parts = this.state.txt.split(this.state.op);
            var n1 = parseFloat(parts[0]);
            var n2 = parseFloat(parts[1]);
            let res = 0;

            if (this.state.op === '+') res = n1 + n2;
            else if (this.state.op === '-') res = n1 - n2;
            else if (this.state.op === '*') res = n1 * n2;
            else if (this.state.op === '/') {
                if (n2 === 0) {
                    alert("Can't divide by 0");
                    return;
                }
                res = n1 / n2;
            }

            this.setState({
                txt: res.toString(),
                op: ''
            });
        }

        else {
            this.setState({
                txt: this.state.txt + val
            });
        }
    };

    render() {
        return (
            <>
                <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                    <h3>Task 10 - Calculator</h3>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                    <div style={{ width: '170px' }}>

                        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                            <p>
                                <input type="text" value={this.state.txt} readOnly />
                            </p>
                        </div>

                        <div>
                            <button className='btn' onClick={() => this.handleClick('1')}>1</button>
                            <button className='btn' onClick={() => this.handleClick('2')}>2</button>
                            <button className='btn' onClick={() => this.handleClick('3')}>3</button>
                            <button className='btn' onClick={() => this.handleClick('+')}>+</button>

                            <button className='btn' onClick={() => this.handleClick('4')}>4</button>
                            <button className='btn' onClick={() => this.handleClick('5')}>5</button>
                            <button className='btn' onClick={() => this.handleClick('6')}>6</button>
                            <button className='btn' onClick={() => this.handleClick('-')}>-</button>

                            <button className='btn' onClick={() => this.handleClick('7')}>7</button>
                            <button className='btn' onClick={() => this.handleClick('8')}>8</button>
                            <button className='btn' onClick={() => this.handleClick('9')}>9</button>
                            <button className='btn' onClick={() => this.handleClick('*')}>*</button>

                            <button className='btn' onClick={() => this.handleClick('.')}>.</button>
                            <button className='btn' onClick={() => this.handleClick('0')}>0</button>
                            <button className='btn' onClick={() => this.handleClick('=')}>=</button>
                            <button className='btn' onClick={() => this.handleClick('/')}>/</button>

                            <button className='btn' onClick={() => this.handleClick('C')}>C</button>
                        </div>

                    </div>
                </div>
            </>
        );
    }
}

export default SimpleCalculator;