import React from "react";

class UserFrm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            myObj: {
                txt: "",
                phone: "",
                gender: "",
                hobby: [],
                city: "",
            },
            userList: [],
            editIndex: null,
        };
    }

    componentDidMount() {
        const data = JSON.parse(localStorage.getItem("users")) || [];
        this.setState({ userList: data });
    }

    handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        let obj = { ...this.state.myObj };

        if (type === "checkbox") {
            if (checked) {
                obj.hobby.push(value);
            } else {
                obj.hobby = obj.hobby.filter((h) => h !== value);
            }
        } else {
            obj[name] = value;
        }

        this.setState({ myObj: obj });
    };

    Submit = () => {
        let list = [...this.state.userList];

        if (this.state.editIndex !== null) {
            // Update
            list[this.state.editIndex] = this.state.myObj;
        } else {
            // Insert
            list.push(this.state.myObj);
        }

        localStorage.setItem("users", JSON.stringify(list));

        this.setState({
            userList: list,
            myObj: { txt: "", phone: "", gender: "", hobby: [], city: "" },
            editIndex: null,
        });
    };

    deleteUser = (index) => {
        let list = [...this.state.userList];
        list.splice(index, 1);

        localStorage.setItem("users", JSON.stringify(list));
        this.setState({ userList: list });
    };

    editUser = (index) => {
        const user = this.state.userList[index];
        this.setState({
            myObj: { ...user },
            editIndex: index,
        });
    };

    render() {
        return (
            <div>
                <h2>User Form</h2>

                <p>
                    Name:
                    <input
                        type="text"
                        name="txt"
                        value={this.state.myObj.txt}
                        onChange={this.handleChange}
                    />
                </p>

                <p>
                    Mobile:
                    <input
                        type="number"
                        name="phone"
                        value={this.state.myObj.phone}
                        onChange={this.handleChange}
                    />
                </p>

                <p>
                    Gender:
                    <input
                        type="radio"
                        name="gender"
                        value="Male"
                        checked={this.state.myObj.gender === "Male"}
                        onChange={this.handleChange}
                    /> Male
                    <input
                        type="radio"
                        name="gender"
                        value="Female"
                        checked={this.state.myObj.gender === "Female"}
                        onChange={this.handleChange}
                    /> Female
                </p>

                <p>
                    Hobby:
                    <input
                        type="checkbox"
                        value="Reading"
                        checked={this.state.myObj.hobby.includes("Reading")}
                        onChange={this.handleChange}
                    /> Reading
                    <input
                        type="checkbox"
                        value="Dancing"
                        checked={this.state.myObj.hobby.includes("Dancing")}
                        onChange={this.handleChange}
                    /> Dancing
                    <input
                        type="checkbox"
                        value="Singing"
                        checked={this.state.myObj.hobby.includes("Singing")}
                        onChange={this.handleChange}
                    /> Singing
                </p>

                <p>
                    City:
                    <select
                        name="city"
                        value={this.state.myObj.city}
                        onChange={this.handleChange}
                    >
                        <option value="">---Select City---</option>
                        <option value="Surat">Surat</option>
                        <option value="Rajkot">Rajkot</option>
                        <option value="Ahmedabad">Ahmedabad</option>
                        <option value="Anand">Anand</option>
                    </select>
                </p>

                <button onClick={this.Submit}>
                    {this.state.editIndex !== null ? "Update" : "Submit"}
                </button>

                <hr />

                <h2>User List</h2>

                <table border="1" cellPadding="10">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Gender</th>
                            <th>Hobby</th>
                            <th>City</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {this.state.userList.map((user, index) => (
                            <tr key={index}>
                                <td>{user.txt}</td>
                                <td>{user.phone}</td>
                                <td>{user.gender}</td>
                                <td>{user.hobby.join(", ")}</td>
                                <td>{user.city}</td>
                                <td>
                                    <button onClick={() => this.editUser(index)}>Edit</button>
                                    <button onClick={() => this.deleteUser(index)}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default UserFrm;