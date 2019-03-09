import React, { Component } from 'react';
import { connect } from 'react-redux';
import CartItem from '../CartItem/CartItem';
import { addToCart, removeFromCart } from '../../../actions/cart-actions';

class CartItemsList extends Component {

    render() {
        const items = this.props.cart.map((item, index) => {
            const product = this.props.products.find(product => product.id === item.id);
            return <CartItem key={index} {...item} {...product} addToCart={this.props.addToCart} removeFromCart={this.props.removeFromCart} />
        });
        return (
            <div>
                {items}
            </div>
        );
    }

}

function mapStateToProps(state) {
    return {
        products: state.products.items,
        cart: state.cart.items
    }
}

export default connect(mapStateToProps, { addToCart, removeFromCart })(CartItemsList);