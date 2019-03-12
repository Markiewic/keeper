import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

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
                <Route render={({ location }) => (
                    <React.Fragment>
                        <Menu location={location} />
                        <div className="content-router">
                            <TransitionGroup>
                                <CSSTransition
                                    key={location.key}
                                    timeout={300}
                                    classNames="fade"
                                >
                                    <div>
                                        <Switch location={location}>
                                            <Route path="/" exact component={Main} />
                                            <Route path="/products" component={Products} />
                                            <Route path="/cart" component={Cart} />
                                        </Switch>
                                    </div>

                                </CSSTransition>
                            </TransitionGroup>
                        </div>
                    </React.Fragment>
                )} />
            </BrowserRouter >
        );
    }
}

export default connect(null, { fetchProducts })(App); 