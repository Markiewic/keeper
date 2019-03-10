import React, { Component } from 'react';
import ProductForm from './ProductForm/ProductForm';
import ProductsList from './ProductsList/ProductsList';
import { Header, VerticalVector, Separator, Layout } from '../Elements';

class Products extends Component {

    render() {
        return (
            <React.Fragment>
                <Header>Products</Header>
                <Layout>
                    <VerticalVector>
                        <ProductForm />
                        <Separator label="Available Products" />
                        <ProductsList />
                    </VerticalVector>
                </Layout>
            </React.Fragment>
        );
    }
}

export default Products;