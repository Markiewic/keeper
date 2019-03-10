import React, { Component } from 'react';
import { connect } from 'react-redux';
import Product from '../Product/Product';
import { removeProduct } from '../../../actions/products-actions';

class ProductsList extends Component {

    render() {
        const items = this.props.items.map((item, index) => <Product key={index} {...item} removeProduct={this.props.removeProduct} />);
        return (
            <React.Fragment>
                {items}
            </React.Fragment>
        );
    }

}

function mapStateToProps(state) {
    return {
        items: state.products.items
    };
}

export default connect(mapStateToProps, { removeProduct })(ProductsList);