import React, { Component } from 'react';
import CartProduct from '../CartProduct/CartProduct';
import { connect } from 'react-redux';
import { addToCart } from '../../../actions/cart-actions';

class CartProductList extends Component {

    render() {
        const items = this.props.items.map((item, index) => <CartProduct key={index} {...item} addToCart={this.props.addToCart} />);
        return (
            <div>
                {items}
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