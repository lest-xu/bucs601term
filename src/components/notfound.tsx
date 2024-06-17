import React from 'react';
import { Link } from "react-router-dom";

class NotFound extends React.Component {
    componentDidMount() {
    }

    render() {
        return (
            <div>
                <h3>Page not found.</h3>
                <Link to={'/'}>Back to Home</Link>
            </div>
        );
    }
}

export default NotFound;