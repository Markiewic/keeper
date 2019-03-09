import React, { Component } from 'react';
import { connect } from 'react-redux';
import CartProductsList from './CartProductsList/CartProductsList';
import CartItemsList from './CartItemsList/CartItemsList';

class Cart extends Component {

    getProductsQuantity() {
        return this.props.cart.length;
    }

    getTotalAmount() {
        return this.props.cart.reduce((amount, item) => {
            const product = this.props.products.find(product => product.id === item.id);
            return amount + item.quantity * (product ? product.cost : 0);
        }, 0);
    }

    getTotalItemsQuantity() {
        return this.props.cart.reduce((quantity, item) => quantity + item.quantity, 0);
    }

    render() {
        return (
            <div>
                <h1>Cart</h1>
                <p>Cart contains {this.getProductsQuantity()} different products, totally {this.getTotalItemsQuantity()} items.</p>
                <hr />
                <CartProductsList />
                <hr />
                <CartItemsList />
                <h3>Total: ${this.getTotalAmount()}</h3>
            </div>
        )
    }

}

function mapStateToProps(state) {
    return {
        products: state.products.items,
        cart: state.cart.items
    }
}

export default connect(mapStateToProps)(Cart);