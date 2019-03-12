import React, { Component } from 'react';
import { connect } from 'react-redux';
import CartProductsList from './CartProductsList/CartProductsList';
import CartItemsList from './CartItemsList/CartItemsList';
import { Separator, Header, VerticalVector, Layout } from "../Elements";
import styles from './Cart.module.css';

class Cart extends Component {

    getTotalAmount() {
        return this.props.cart.reduce((amount, item) => {
            const product = this.props.products.find(product => product.id === item.id);
            return amount + item.quantity * (product ? product.cost : 0);
        }, 0);
    }

    render() {
        return (
            <React.Fragment>
                <Header>Cart</Header>
                <Layout>
                    <VerticalVector>
                        <CartProductsList />
                        <Separator label="Your cart" />
                        <CartItemsList />
                        <div className={styles.totalAmountWrapper}>
                            <div className={styles.totalAmountLabel}>Total:</div>
                            <div className={styles.totalAmount}>${this.getTotalAmount()}</div>
                        </div>
                    </VerticalVector>
                </Layout>
            </React.Fragment>
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