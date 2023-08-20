import React from "react";
import "../../CSS/notFoundStyle.css";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found-parent">
      <div>
        <div className="spinner-container">
          <h1> Page Not Found :( </h1>
        </div>
        <br />
        <button>
          <Link to="/" className="link-to-btn">
            Home
          </Link>
        </button>
      </div>
    </div>
  );
};

export default NotFound;
