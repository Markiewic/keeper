import React, { Component } from 'react';
import ActionCard from '../../Elements/ActionCard/ActionCard';

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
            <ActionCard
                title={this.props.name}
                indicator={"$" + this.props.cost + " × " + this.getQuantity() + " = $" + this.getTotalAmount()}
                actions={[
                    {
                        title: "➕ Add",
                        handler: this.onAddMore.bind(this)
                    },
                    {
                        title: "➖ Remove",
                        handler: this.onRemoveOne.bind(this)
                    }
                ]}
            >
            </ActionCard>
        )
    }

}

export default CartItem;