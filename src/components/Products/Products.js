import React, { Component } from 'react';
import ProductForm from './ProductForm/ProductForm';
import ProductsList from './ProductsList/ProductsList';

class Products extends Component {

    render() {
        return (
            <div>
                <h1>Products</h1>
                This is the Products Section of Application
                <hr />
                <ProductForm />
                <hr />
                <ProductsList />
            </div>
        );
    }
}

export default Products;