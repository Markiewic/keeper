import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Menu.module.css';

class Menu extends Component {

    render() {
        return (
            <div className={styles.root}>
                <Link to="/">Main</Link>
                <Link to="/products">Products</Link>
                <Link to="/cart">Cart</Link>
            </div>
        );
    }

}

export default Menu;