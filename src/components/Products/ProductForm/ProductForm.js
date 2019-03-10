import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addProduct } from '../../../actions/products-actions';
import { FluidLayout, HorizontalVector, VerticalVector } from '../../Elements';
import Button from '../../Elements/Button/Button';

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

        if (!(this.state.name && this.state.cost && !isNaN(+this.state.cost))) return;

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
            <React.Fragment>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <VerticalVector>
                        <HorizontalVector>
                            <FluidLayout>
                                Name:
                            </FluidLayout>
                            <FluidLayout>
                                Cost:
                            </FluidLayout>
                        </HorizontalVector>
                        <HorizontalVector>
                            <FluidLayout>
                                <input type="text" name="name" value={this.state.name} onChange={this.onNameChanged.bind(this)}></input>
                            </FluidLayout>
                            <FluidLayout>
                                <input type="text" name="cost" value={this.state.cost} onChange={this.onCostChanged.bind(this)}></input>
                            </FluidLayout>
                        </HorizontalVector>
                        <FluidLayout>
                            Description:
                        </FluidLayout>
                        <FluidLayout>
                            <textarea name="description" value={this.state.description} onChange={this.onDescriptionChanged.bind(this)}></textarea>
                        </FluidLayout>
                        <FluidLayout>
                            <Button type="submit">Add</Button>
                        </FluidLayout>
                    </VerticalVector>
                </form>
            </React.Fragment>
        );
    }
}

export default connect(null, { addProduct })(ProductForm);