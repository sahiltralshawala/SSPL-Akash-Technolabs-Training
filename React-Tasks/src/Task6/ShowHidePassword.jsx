import React from "react";

class ShowHidePass extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            pass: "",
            showPass: false
        }
    }
    handlePasswordToggle = () => {
        this.setState({
            showPass: !this.state.showPass
        })
    }
    render() {
        return (
            <div>
                <h1>Password Toggle</h1>
                <div style={{ display: "flex", alignItems: "center"}}>
                    <input
                        type={this.state.showPass ? "text" : "password"}
                        placeholder="Enter a password"
                        value={this.state.pass}
                        onChange={(e) => {
                            this.setState({
                                pass: e.target.value
                            })
                        }}
                    />
                    <button onClick={this.handlePasswordToggle}>
                        {this.state.showPass ? "❌" : "👁️"}
                    </button>
                </div>
            </div>
        )
    }
}

export default ShowHidePass;