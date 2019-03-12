import React, { Component } from 'react';
import { connect } from 'react-redux';
import CartItem from '../CartItem/CartItem';
import { addToCart, removeFromCart } from '../../../actions/cart-actions';
import { Placeholder } from '../../Elements';
import styles from './CartItemsList.module.css';

class CartItemsList extends Component {

    getProductsQuantity() {
        return this.props.cart.length;
    }

    getTotalItemsQuantity() {
        return this.props.cart.reduce((quantity, item) => quantity + item.quantity, 0);
    }

    render() {
        const items = this.props.cart.map((item, index) => {
            const product = this.props.products.find(product => product.id === item.id);
            return <CartItem key={index} {...item} {...product} addToCart={this.props.addToCart} removeFromCart={this.props.removeFromCart} />
        });
        return (
            <React.Fragment>
                {items}
                {items.length
                    ?
                    <div className={styles.totalDescription}>
                        Cart contains {this.getProductsQuantity()} different products, totally {this.getTotalItemsQuantity()} items.
                    </div>
                    :
                    <Placeholder label="Your cart is empty" description="Let add some products from list above.">
                        <span role="img" aria-label="">🛒</span>
                    </Placeholder>}
            </React.Fragment>
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