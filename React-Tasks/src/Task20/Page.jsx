import React from "react";
import { Link } from "react-router-dom";


const Page = () => {


    return (
        <div className="theme-shell">
            <div className="theme-card theme-card-small">
                <p className="theme-kicker">Preview</p>
                <h1>Simple sample page</h1>
                <p className="theme-copy">
                    This page stays in the same theme and keeps the demo minimal.
                </p>

                <div className="theme-badges">
                    <span>Clean</span>
                    <span>Minimal</span>
                    <span>Reusable</span>
                </div>

                <Link to="/task20" className="theme-link">
                    Back to controls
                </Link>
            </div>
        </div>
    );
};

export default Page