import React, { Component } from 'react';

class Prod extends Component {
    render() {
        return (
            <div>
                <img src={this.props.product.image} alt="product image"></img>
                <h3>{this.props.product.cost}</h3>
                <h3>{this.props.product.name}</h3>
                <p>Created at: {this.props.product.data.spilt(' ')[1] + "/" + this.props.product.data.spilt(' ')[2] + "/" + this.props.product.data.spilt(' ')[3]}</p>
                <p>Delivery: {this.props.product.deliveryCondition} | Stock: {this.props.product.stockCondition}</p>
                <p>{this.props.product.description}</p>
            </div>
        )
    }
}

export default Prod;