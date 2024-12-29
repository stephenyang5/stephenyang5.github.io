import React from 'react';
import { Link } from 'react-router-dom';
const NotFound = () => {
    return (
        <>
        <div id="lost">
            <h1>404 - Page Not Found :(</h1>
            <span>
            <p> 
                <Link to="/">Click here to return home!</Link>
            </p>
            </span>
        </div>
        </>
    );
}

export default NotFound;