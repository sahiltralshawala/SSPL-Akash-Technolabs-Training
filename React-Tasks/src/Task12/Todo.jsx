import React from 'react';
class Todo extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {
        txt: '',
        task: [],
        editIndex: null,
    }

    componentDidMount() {
        var data = JSON.parse(localStorage.getItem("arr"));
        if (data) {
            this.setState({
                task: data
            });
        }
    }

    newTask = (e) => {
        this.setState({
            txt: e.target.value,
        });
    }

    editTask = (ind) => {
        this.setState({
            txt: this.state.task[ind],
            editIndex: ind
        });
    };

    deleteTask = (ind) => {
        var newTasks = [];
        for (let i = 0; i < this.state.task.length; i++) {
            if (i !== ind) {
                newTasks.push(this.state.task[i]);
            }
        }
        this.setState({
            task: newTasks
        },
            () => {
                localStorage.setItem("arr", JSON.stringify(this.state.task));
            });
    };

    addTask = () => {
        if (this.state.txt.trim() === '') return;
        if (this.state.editIndex !== null) {
            var newTasks = [...this.state.task];
            newTasks[this.state.editIndex] = this.state.txt;
            this.setState({
                task: newTasks,
                txt: '',
                editIndex: null
            },
                () => {
                    localStorage.setItem("arr", JSON.stringify(this.state.task));
                });
        }
        else {
            this.setState({
                task: [...this.state.task, this.state.txt],
                txt: ''
            },
                () => {
                    localStorage.setItem("arr", JSON.stringify(this.state.task));
                }
            );
        }
    };

    render() {
        return (
            <>
                <div style={{
                    border: '1px solid black',
                    width: '450px',
                    padding: '10px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px'
                }}>
                    <div>
                        <h3>ToDo List</h3>
                    </div>
                    <div>
                        {/* 
                        If you wrote functionName() { } - bind it
                        If you wrote functionName = () => { }- don’t bind it */}
                        <input type="text" name="txt" value={this.state.txt} onChange={this.newTask} />
                        <input style={{ marginLeft: '6px' }} type="button" value={this.state.editIndex !== null ? "Update ToDo" : "Add ToDo"} onClick={this.addTask} />
                    </div>

                    <div style={{ width: '100%' }}>
                        <ul style={{ margin: 0 }}>
                            {this.state.task.map((item, index) => (
                                <li key={index}>{item}
                                    <input style={{ margin: '2px' }} type="button" value="Edit" onClick={() => this.editTask(index)} />
                                    <input style={{ margin: '2px' }} type="button" value="Delete" onClick={() => this.deleteTask(index)} />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </>
        );
    }
}

export default Todo;