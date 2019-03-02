import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Root extends Component {
    render() {
        return (
            <div>
                This Is Root Of Application<br />
                <Link to="/products">Go to Products</Link>
            </div>
        );
    }
}

export default Root;