import React, { Component } from 'react';
import ActionCard from '../../Elements/ActionCard/ActionCard'; 

class Product extends Component {

    onRemove(event) {
        event.preventDefault();
        this.props.removeProduct(this.props.id);
    }

    render() {
        return (
            <ActionCard
                title={this.props.name}
                indicator={"$" + this.props.cost}
                actions={[
                    {
                        title: "Remove",
                        handler: this.onRemove.bind(this)
                    }
                ]}
            >
                {this.props.description}
            </ActionCard>
        );
    }
}

export default Product;