import React, { Component } from 'react';

class Prod extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <div>
                <img id="prodImg" src={this.props.product.image} alt="product image"></img>

                <p>Delivery: {this.props.product.deliveryCondition}</p>
                <p>Stock: {this.props.product.stockCondition}</p>
                <p>{this.props.product.description}</p>
            </div>
        )
    }
}

export default Prod;