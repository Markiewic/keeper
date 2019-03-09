import React, { Component } from 'react';
import styles from './CartProduct.module.css';

class CartProduct extends Component {

    onAddToCart(event) {
        event.preventDefault();
        this.props.addToCart(this.props.id);
    }

    render() {
        return (
            <div className={styles.root}>
                <div>
                    <h3>{this.props.name}</h3>
                    <small>${this.props.cost}</small>
                </div>
                <p>{this.props.description}</p>
                <button onClick={this.onAddToCart.bind(this)}>Add to cart</button>
            </div>
        );
    }

}

export default CartProduct;