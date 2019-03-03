import React, { Component } from 'react';

class CartItem extends Component {

    onAddMore(event) { 
        event.preventDefault();
        this.props.addToCart(this.props.id);
    }

    onRemoveOne(event) { 
        event.preventDefault();
        this.props.removeFromCart(this.props.id);
    }

    getQuantity() {
        return this.props.quantity;
    }

    getTotalAmount() {
        return this.props.quantity * this.props.cost;
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
                    Quantity: {this.getQuantity()}, total amount: ${this.getTotalAmount()}
                </div>

                <div>
                    <button onClick={this.onAddMore.bind(this)}>Add more</button>
                    <button onClick={this.onRemoveOne.bind(this)}>Remove one</button>
                </div>
            </div>
        )
    }

}

export default CartItem;