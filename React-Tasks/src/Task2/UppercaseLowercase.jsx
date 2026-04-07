import React from 'react'
import '../Task2/Style.css'
class UpperCaseLowerCase extends React.Component {
    constructor(props) {
        super(props);
        this.state = { txt: '', uppercase: '', lowercase: '' }
    }
    Submit = (e) => {
        let a = e.target.txt.value;
        this.setState({
            uppercase: a.toUpperCase(),
            lowercase: a.toLowerCase()
        });
        e.preventDefault();
    }
    render() {
        return (
            <>
                <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                    <div className='main'>
                        <form onSubmit={this.Submit.bind(this)}>
                            {/* Enter String: <input type='text' name='txt' onChange={(e) => this.setState({ uppercase: e.target.value.toUpperCase(), lowercase: e.target.value.toLowerCase() })} /> */}
                            <div >
                                <b>Enter String: </b>  <input type="text" name="txt" classNam='field' />

                                <p style={{ fontWeight: '800' }}>UpperCase: {this.state.uppercase}</p>
                                <p style={{ fontWeight: '800' }}>LowerCase: {this.state.lowercase}</p>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <input type='submit' value='Submit' className='button' />
                            </div>
                        </form>
                    </div >
                </div >
            </>
        )
    }
}
export default UpperCaseLowerCase;