import React, { Component } from 'react';
import CartProduct from '../CartProduct/CartProduct';
import { connect } from 'react-redux';
import { addToCart } from '../../../actions/cart-actions';
import { Placeholder } from '../../Elements';

class CartProductList extends Component {

    render() {
        const items = this.props.items.map((item, index) => <CartProduct key={index} {...item} addToCart={this.props.addToCart} />);
        return (
            <React.Fragment>
                {items}
                {!items.length &&
                    <Placeholder label="There is no products to add" description="You should add some from the Products section.">
                        <span role="img" aria-label="">✨</span>
                    </Placeholder>}
            </React.Fragment>
        );
    }

}

function mapStateToProps(state) {
    return {
        items: state.products.items
    };
}

export default connect(mapStateToProps, { addToCart })(CartProductList);