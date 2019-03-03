import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addProduct } from '../actions/products-actions';

class ProductForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            description: '',
            cost: ''
        }
    }

    onNameChanged(event) {
        this.setState({
            name: event.target.value
        });
    }

    onDescriptionChanged(event) {
        this.setState({
            description: event.target.value
        });
    }

    onCostChanged(event) {
        this.setState({
            cost: event.target.value
        });
    }

    onSubmit(event) {
        event.preventDefault();

        this.props.addProduct({
            name: this.state.name,
            description: this.state.description,
            cost: +this.state.cost
        });

        this.setState({
            name: '',
            description: '',
            cost: ''
        })
    }

    render() {
        return (
            <div>
                <h2>Add a product</h2>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <div>
                        <label>Name:</label><br />
                        <input type="text" name="name" value={this.state.name} onChange={this.onNameChanged.bind(this)}></input>
                    </div>
                    <div>
                        <label>Description:</label><br />
                        <textarea name="description" value={this.state.description} onChange={this.onDescriptionChanged.bind(this)}></textarea>
                    </div>
                    <div>
                        <label>Cost:</label><br />
                        <input type="text" name="cost" value={this.state.cost} onChange={this.onCostChanged.bind(this)}></input>
                    </div>
                    <div>
                        <button type="submit">Add</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default connect(null, { addProduct })(ProductForm);