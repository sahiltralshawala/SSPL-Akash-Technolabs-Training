import React from "react";

class CurrencyConverter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            amount: 1,
            from: "USD",
            to: "INR",
            rate: null,
            result: null,
            error: "",
        };
    }

    componentDidMount() {
        this.getRate();
    }

    getRate = () => {
        const API_KEY = import.meta.env.VITE_EXCHANGERATE_API_KEY;

        fetch(`https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${this.state.from}`)
            .then((res) => res.json())
            .then((data) => {
                const rate = data.conversion_rates[this.state.to];
                this.setState({
                    rate: rate,
                    result: this.state.amount * rate,
                    error: "",
                });
            })
            .catch(() => {
                this.setState({ error: "Error fetching data.", result: null });
            });
    };

    handleChange = (e) => {
        this.setState(
            {
                [e.target.name]: e.target.value,
            },
            this.getRate
        );
    };

    render() {
        return (
            <div style={styles.container}>
                <h2> Currency Converter</h2>

                <input
                    type="number"
                    name="amount"
                    value={this.state.amount}
                    onChange={this.handleChange}
                    style={styles.input}
                />

                <div>
                    <select
                        name="from"
                        value={this.state.from}
                        onChange={this.handleChange}
                    >
                        <option value="USD">USD</option>
                        <option value="INR">INR</option>
                        <option value="EUR">EUR</option>
                        <option value="GBP">GBP</option>
                    </select>

                    ➡️

                    <select
                        name="to"
                        value={this.state.to}
                        onChange={this.handleChange}
                    >
                        <option value="INR">INR</option>
                        <option value="USD">USD</option>
                        <option value="EUR">EUR</option>
                        <option value="GBP">GBP</option>
                    </select>
                </div>

                <h3>
                    Result: {this.state.result?.toFixed(2)} {this.state.to}
                </h3>

                {this.state.error && <p style={{ color: "red" }}>{this.state.error}</p>}
            </div>
        );
    }
}

const styles = {
    container: {
        textAlign: "center",
        marginTop: "50px",
    },
    input: {
        padding: "10px",
        marginBottom: "20px",
    },
};

export default CurrencyConverter;