import React, { Component } from 'react';

class Prod extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <img src={this.props.product.image} alt="product image"></img>
                <h3>{this.props.product.cost}</h3>
                <h3>{this.props.product.name}</h3>
                <p>Created at: {this.props.product.createAt}</p>
                <p>Delivery: {this.props.product.deliveryCondition} | Stock: {this.props.product.stockCondition}</p>
                <p>{this.props.product.description}</p>
            </div>
        )
    }
}

export default Prod;