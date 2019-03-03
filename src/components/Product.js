import React, { Component } from 'react';

class Product extends Component {

    onRemove(event) {
        event.preventDefault();
        this.props.removeProduct(this.props.id);
    }
    
    render() {
        return (
            <div>
                <div>
                    <h3>{this.props.name}</h3>
                    <small>${this.props.cost}</small>
                </div>
                <p>{this.props.description}</p>
                <div>
                    <button onClick={this.onRemove.bind(this)}>Remove</button>
                </div>
            </div>
        );
    }
}

export default Product;