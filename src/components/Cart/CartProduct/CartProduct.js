import React, { Component } from 'react';
import ActionCard from '../../Elements/ActionCard/ActionCard';

class CartProduct extends Component {

    onAddToCart(event) {
        event.preventDefault();
        this.props.addToCart(this.props.id);
    }

    render() {
        return (
            <ActionCard
                title={this.props.name}
                indicator={"$" + this.props.cost}
                actions={[
                    {
                        title: "Add to cart",
                        handler: this.onAddToCart.bind(this)
                    }
                ]}
            >
                {this.props.description}
            </ActionCard>
        );
    }

}

export default CartProduct;