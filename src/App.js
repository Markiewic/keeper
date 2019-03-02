import React, { Component } from 'react';
import { connect } from 'react-redux';
import Products from './components/Products';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Products />
      </div>
    );
  }
}

export default connect(null, null)(App); 