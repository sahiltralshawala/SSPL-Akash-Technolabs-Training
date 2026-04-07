import React from "react";

class WeatherApp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            city: "",
            weather: null,
            error: "",
        };
    }

    handleChange = (e) => {
        this.setState({ city: e.target.value });
    };

    getWeather = () => {
        const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

        fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&appid=${API_KEY}&units=metric`
        )
            .then((res) => res.json())
            .then((data) => {
                if (data.cod === 200) {
                    this.setState({ weather: data, error: "" });
                } else {
                    this.setState({ error: "City not found!", weather: null });
                }
            })
            .catch(() => {
                this.setState({ error: "Error fetching data" });
            });
    };

    render() {
        return (
            <div style={styles.container}>
                <h2>🌦️ Weather App</h2>

                <input
                    type="text"
                    placeholder="Enter city name"
                    value={this.state.city}
                    onChange={this.handleChange}
                    style={styles.input}
                />

                <button onClick={this.getWeather} style={styles.button}>
                    Search
                </button>

                {this.state.error && (
                    <p style={{ color: "red" }}>{this.state.error}</p>
                )}

                {this.state.weather && (
                    <div style={styles.card}>
                        <h3>{this.state.weather.name}</h3>
                        <p>🌡 Temp: {this.state.weather.main.temp} °C</p>
                        <p>☁ Weather: {this.state.weather.weather[0].main}</p>
                        <p>💧 Humidity: {this.state.weather.main.humidity}%</p>
                        <p>🌬 Wind: {this.state.weather.wind.speed} km/h</p>
                    </div>
                )}
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
        width: "200px",
        marginRight: "10px",
    },
    button: {
        padding: "10px 15px",
        cursor: "pointer",
    },
    card: {
        marginTop: "20px",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "10px",
        display: "inline-block",
        backgroundColor: "#f1f1f1",
    },
};

export default WeatherApp;