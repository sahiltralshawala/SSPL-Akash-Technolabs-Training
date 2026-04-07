import React from "react";

class NewsApp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            articles: [],
            search: "",
            error: "",
        };
    }

    componentDidMount() {
        this.getNews();
    }

    getNews = () => {
        const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

        if (!API_KEY) {
            this.setState({ error: "API key missing. Add it in .env file.", articles: [] });
            return;
        }

        fetch(
            `https://newsapi.org/v2/top-headlines?country=in&apiKey=${API_KEY}`
        )
            .then((res) => res.json())
            .then((data) => {
                if (data.status === "ok") {
                    this.setState({ articles: data.articles, error: "" });
                } else {
                    this.setState({ error: "Failed to load news" });
                }
            });
    };

    handleChange = (e) => {
        this.setState({ search: e.target.value });
    };

    searchNews = () => {
        const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

        fetch(
            `https://newsapi.org/v2/everything?q=${this.state.search}&apiKey=${API_KEY}`
        )
            .then((res) => res.json())
            .then((data) => {
                if (data.status === "ok") {
                    this.setState({ articles: data.articles, error: "" });
                } else {
                    this.setState({ error: "No news found" });
                }
            });
    };

    render() {
        return (
            <div style={styles.container}>
                <h2>📰 News App</h2>

                <input
                    type="text"
                    placeholder="Search news..."
                    value={this.state.search}
                    onChange={this.handleChange}
                    style={styles.input}
                />

                <button onClick={this.searchNews} style={styles.button}>
                    Search
                </button>

                {this.state.error && (
                    <p style={{ color: "red" }}>{this.state.error}</p>
                )}

                <div style={styles.grid}>
                    {this.state.articles.map((news, index) => (
                        <div key={index} style={styles.card}>
                            <img
                                src={
                                    news.urlToImage ||
                                    "https://via.placeholder.com/300x200"
                                }
                                alt="news"
                                style={styles.image}
                            />

                            <h4>{news.title}</h4>
                            <p>{news.description}</p>
                            <p><b>Source:</b> {news.source.name}</p>

                            <a href={news.url} target="_blank" rel="noreferrer">
                                Read More →
                            </a>
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
        gap: "20px",
        marginTop: "20px",
    },
    card: {
        width: "300px",
        padding: "15px",
        border: "1px solid #ccc",
        borderRadius: "10px",
        boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
        textAlign: "left",
    },
    image: {
        width: "100%",
        height: "200px",
        objectFit: "cover",
        borderRadius: "5px",
    },
};

export default NewsApp;