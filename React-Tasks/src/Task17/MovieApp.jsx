import React from "react";

class MovieApp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            search: "",
            movies: [],
            error: "",
        };
    }

    handleChange = (e) => {
        this.setState({ search: e.target.value });
    };

    searchMovies = () => {
        const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
        fetch(
            `https://www.omdbapi.com/?s=${this.state.search}&apikey=${API_KEY}`
        )
            .then((res) => res.json())
            .then((data) => {
                if (data.Response === "True") {
                    this.setState({ movies: data.Search, error: "" });
                } else {
                    this.setState({ error: "No movies found!", movies: [] });
                }
            })
            .catch(() => {
                this.setState({ error: "Error fetching data" });
            });
    };

    render() {
        return (
            <div style={styles.container}>
                <h2>🎬 Movie Search App</h2>

                <input
                    type="text"
                    placeholder="Enter movie name"
                    value={this.state.search}
                    onChange={this.handleChange}
                    style={styles.input}
                />

                <button onClick={this.searchMovies} style={styles.button}>
                    Search
                </button>

                {this.state.error && (
                    <p style={{ color: "red" }}>{this.state.error}</p>
                )}

                <div style={styles.grid}>
                    {this.state.movies.map((movie) => (
                        <div key={movie.imdbID} style={styles.card}>
                            <img
                                src={
                                    movie.Poster !== "N/A"
                                        ? movie.Poster
                                        : "https://via.placeholder.com/200"
                                }
                                alt={movie.Title}
                                style={styles.image}
                            />
                            <h4>{movie.Title}</h4>
                            <p>📅 {movie.Year}</p>
                            <p>🎞 {movie.Type}</p>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

const styles = {
    container: {
        textAlign: "center",
        padding: "20px",
    },
    input: {
        padding: "10px",
        width: "250px",
        marginRight: "10px",
    },
    button: {
        padding: "10px 15px",
        cursor: "pointer",
    },
    grid: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        marginTop: "20px",
        gap: "20px",
    },
    card: {
        width: "200px",
        padding: "10px",
        border: "1px solid #ccc",
        borderRadius: "10px",
        boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
    },
    image: {
        width: "100%",
        height: "300px",
        objectFit: "cover",
    },
};

export default MovieApp;