import React, { Component } from 'react';
import { connect } from 'react-redux';
import Product from './Product';
import { removeProduct } from '../actions/products-actions';

class ProductsList extends Component {

    render() {
        const items = this.props.items.map((item, index) => <Product key={index} {...item} removeProduct={this.props.removeProduct} />);
        return (
            <div>
                <h2>Available products</h2>
                <div className="list-group">
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

export default connect(mapStateToProps, { removeProduct })(ProductsList);