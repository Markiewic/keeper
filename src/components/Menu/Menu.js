import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Menu.module.css';

class Menu extends Component {

    render() {
        console.log(this.props)
        return (
            <div className={styles.root}>
                <Link to="/" className={"/" === this.props.location.pathname ? styles.activated : ""}>Main</Link>
                <Link to="/products" className={"/products" === this.props.location.pathname ? styles.activated : ""}>Products</Link>
                <Link to="/cart" className={"/cart" === this.props.location.pathname ? styles.activated : ""}>Cart</Link>
            </div>
        );
    }

}

export default Menu;