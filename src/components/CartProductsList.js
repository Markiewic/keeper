import React, { Component } from 'react';
import { connect } from 'react-redux';
import CartProduct from './CartProduct';
import { addToCart } from '../actions/cart-actions';

class CartProductList extends Component {

    render() {
        const items = this.props.items.map((item, index) => <CartProduct key={index} {...item} addToCart={this.props.addToCart} />);
        return (
            <div>
                <h2>Available products</h2>
                <div>
                    {items}
                </div>
            </div>
        );
    }

}

function mapStateToProps(state) {
    return {
        items: state.products.items
    };
}

export default connect(mapStateToProps, { addToCart })(CartProductList);