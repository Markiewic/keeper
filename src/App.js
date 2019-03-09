import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import Main from './components/Main/Main';
import Products from './components/Products/Products';
import Cart from './components/Cart/Cart';

import { fetchProducts } from './actions/products-actions';

class App extends Component {

    componentWillMount() {
        this.props.fetchProducts();
    }

    render() {
        return (
            <BrowserRouter>
                <div>
                    <nav>
                        <Link to="/">Main</Link><br />
                        <Link to="/products">Products</Link><br />
                        <Link to="/cart">Cart</Link>
                    </nav>
                    <Switch>
                        <Route path="/" exact component={Main} />
                        <Route path="/products" component={Products} />
                        <Route path="/cart" component={Cart} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default connect(null, { fetchProducts })(App); 