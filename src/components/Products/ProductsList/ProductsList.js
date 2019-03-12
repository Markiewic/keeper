import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeProduct } from '../../../actions/products-actions';
import Product from '../Product/Product';
import { Placeholder } from '../../Elements';

class ProductsList extends Component {

    render() {
        const items = this.props.items.map((item, index) => <Product key={index} {...item} removeProduct={this.props.removeProduct} />);
        return (
            <React.Fragment>
                {items}
                {!items.length &&
                    <Placeholder label="There is no products" description="You should add some by the form above.">
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

export default connect(mapStateToProps, { removeProduct })(ProductsList);