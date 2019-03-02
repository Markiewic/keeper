import React, { Component } from 'react';

class Product extends Component {

    onRemove(event) {
        event.preventDefault();
        console.log(this.props);
        this.props.removeProduct(this.props.id);
    }
    
    render() {
        return (
            <div className="list-group-item list-group-item-action">
                <div>
                    <h5 className="d-inline w-100 justify-content-between">{this.props.name}</h5>
                    <small className="mb-1">${this.props.cost}</small>
                </div>
                <p className="mb-1">{this.props.description}</p>
                <div>
                    <button onClick={this.onRemove.bind(this)}>Remove</button>
                </div>
            </div>
        );
    }
}

export default Product;