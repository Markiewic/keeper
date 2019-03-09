import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Menu from './components/Menu/Menu';
import Main from './components/Main/Main';
import Products from './components/Products/Products';
import Cart from './components/Cart/Cart';

import './App.css';

import { fetchProducts } from './actions/products-actions';

class App extends Component {

    componentWillMount() {
        this.props.fetchProducts();
    }

    render() {
        return (
            <BrowserRouter>
                <div>
                    <Menu />
                    <div className="content-router">
                        <Switch>
                            <Route path="/" exact component={Main} />
                            <Route path="/products" component={Products} />
                            <Route path="/cart" component={Cart} />
                        </Switch>
                    </div>

                </div>
            </BrowserRouter>
        );
    }
}

export default connect(null, { fetchProducts })(App); 