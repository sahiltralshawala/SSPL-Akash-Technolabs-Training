import React from "react";

class UserCards extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
        };
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((data) => {
                this.setState({ users: data });
            })
            .catch((err) => console.log(err));
    }

    render() {
        return (
            <div style={styles.page}>
                <h2 style={styles.heading}>User Cards</h2>

                <div style={styles.container}>
                    {this.state.users.map((user) => (
                        <div key={user.id} style={styles.card}>
                            <div style={styles.imgSection}>
                                <img
                                    src={`https://i.pravatar.cc/150?img=${user.id}`}
                                    alt={user.name}
                                    style={styles.image}
                                />
                            </div>
                            <div style={styles.desSection}>
                                <h3 style={styles.name}>{user.name}</h3>
                                <p><b>Username:</b> {user.username}</p>
                                <p><b>Email:</b> {user.email}</p>
                                <p><b>Phone:</b> {user.phone}</p>
                                <p><b>City:</b> {user.address.city}</p>
                                <p><b>Company:</b> {user.company.name}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

const styles = {
    page: {
        width: "100%",
    },
    heading: {
        margin: "0 0 12px 0",
    },
    container: {
        width: "100%",
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
    },
    card: {
        border: "1px solid grey",
        width: "260px",
        height: "450px",
        borderRadius: "10px",
        margin: "20px",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
    },
    imgSection: {
        width: "260px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        width: "150px",
        padding: "10px",
        objectFit: "cover",
    },
    desSection: {
        padding: "10px 15px",
        marginTop: "17px",
        borderRadius: "30px 30px 10px 10px",
        backgroundColor: "rgba(222, 184, 135, 0.555)",
        overflow: "hidden",
        flex: 1,
    },
    name: {
        margin: "0 0 8px 0",
    },
};

export default UserCards;