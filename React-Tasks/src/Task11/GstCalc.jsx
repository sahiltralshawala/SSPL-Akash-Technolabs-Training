import React from 'react';
class GstCalculator extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {
        txt: '',
        rate: 0.03,
        amount: 0.00,
        gst: 0.00,
        total: 0.00,
    }

    handleChange(e) {
        this.setState({
            // txt: e.target.value, //we can't set both txt and rate to the same value in handleChange
            // rate: e.target.value,
            [e.target.name]: e.target.value   //dynamic way
        });
    }

    calculateGST() {
        var value = parseFloat(this.state.txt) || 0;
        var r = parseFloat(this.state.rate) || 0;
        this.setState({
            amount: value,
            gst: value * r,
            total: value + (value * r),
        });

    }
    render() {
        return (
            <>
                <div style={{ display: 'flex', justifyContent: 'center' }}><h3>GST Calculator</h3></div>
                <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>

                    <div>Enter Amount (in INR):
                        <input type="text" name="txt" onChange={this.handleChange.bind(this)} />
                    </div><br /><div>Select GST Rate:
                        <select name="rate" onChange={this.handleChange.bind(this)} >
                            <option value="0.03"> 3%</option>
                            <option value="0.05"> 5%</option>
                            <option value="0.18"> 18%</option>
                            <option value="0.40"> 40%</option>
                        </select></div><br />
                    <div><input type="button" value="Calculate GST" onClick={this.calculateGST.bind(this)} /></div><br />
                    <div>Amount: ₹{this.state.amount.toFixed(2)}</div>
                    <div>GST(18%): ₹{this.state.gst.toFixed(2)}</div>
                    <div>Total: ₹{this.state.total.toFixed(2)}</div>

                </div>
            </>
        );
    }
}

export default GstCalculator 