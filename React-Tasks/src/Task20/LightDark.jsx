import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "./Context/themecontext";

const LightDark = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className="theme-shell">
            <div className="theme-card">
                <p className="theme-kicker">Task 20</p>
                <h1>Theme Playground</h1>
                <p className="theme-copy">
                    A small theme switcher with a clean preview card.
                </p>

                <div className="theme-toggle-btns">
                    <button onClick={() => toggleTheme("light")} className={theme === "light" ? "active" : ""}>
                        Light
                    </button>
                    <button onClick={() => toggleTheme("dark")} className={theme === "dark" ? "active" : ""}>
                        Dark
                    </button>
                </div>

                <div className="theme-preview">
                    <span>Current mode</span>
                    <strong>{theme}</strong>
                </div>

                <Link to="/task20/page" className="theme-link">
                    Open sample page →
                </Link>
            </div>
        </div>
    );
};

export default LightDark;