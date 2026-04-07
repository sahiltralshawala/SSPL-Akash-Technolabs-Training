import React from 'react';

class UserForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            myObj: {
                txt: '',
                phone: '',
                gender: '',
                hobby: [],
                city: ''
            }
        };
    }

    handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        let obj = { ...this.state.myObj };

        if (type === "checkbox") {
            if (checked) {
                obj.hobby.push(value);
            } else {
                obj.hobby = obj.hobby.filter(h => h !== value);
            }
        } else {
            obj[name] = value;
        }

        this.setState({ myObj: obj });
    };

    Submit() {
        console.log(this.state.myObj);
        alert("Data Submitted!");
    }

    render() {
        return (
            <div>
                <p>
                    Enter Name:
                    <input
                        type="text"
                        name="txt"
                        onChange={this.handleChange}
                    />
                </p>

                <p>
                    Enter Mobile Number:
                    <input
                        type="number"
                        name="phone"
                        onChange={this.handleChange}
                    />
                </p>

                <p>
                    Gender:
                    <input
                        type="radio"
                        name="gender"
                        value="Male"
                        onChange={this.handleChange}
                    /> Male
                    <input
                        type="radio"
                        name="gender"
                        value="Female"
                        onChange={this.handleChange}
                    /> Female
                </p>

                <p>
                    Hobby:
                    <input
                        type="checkbox"
                        value="Reading"
                        onChange={this.handleChange}
                    /> Reading
                    <input
                        type="checkbox"
                        value="Dancing"
                        onChange={this.handleChange}
                    /> Dancing
                    <input
                        type="checkbox"
                        value="Singing"
                        onChange={this.handleChange}
                    /> Singing
                </p>

                <p>
                    City:
                    <select name="city" onChange={this.handleChange}>
                        <option value="">---Select City---</option>
                        <option value="Surat">Surat</option>
                        <option value="Rajkot">Rajkot</option>
                        <option value="Ahmedabad">Ahmedabad</option>
                        <option value="Anand">Anand</option>
                    </select>
                </p>

                <p>
                    <input
                        type="button"
                        value="Submit Data"
                        onClick={this.Submit.bind(this)}
                    />
                </p>

                <pre>
                    {JSON.stringify(this.state.myObj, null, 2)}
                </pre>
            </div>
        );
    }
}

export default UserForm;