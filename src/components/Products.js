import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchProducts } from '../actions/products-actions';
import ProductsList from './ProductsList';
import ProductForm from './ProductForm';

class Products extends Component {

    componentWillMount() {
        this.props.fetchProducts();
    }

    render() {
        return (
            <div>
                This Is Products Section Of Application<br />
                <Link to="/">Go to Root</Link>
                <ProductForm />
                <ProductsList />
            </div>
        );
    }
}

export default connect(null, { fetchProducts })(Products);