import React, { Component } from 'react';

class Prod extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <div style={{

                padding: "20px",
                borderRadius: "1%",
                width: "610px",
                backgroundColor: "white"
            }} id="prod">
                <img id="prodImg" style={{ width: "600px" }} src={this.props.product.image} alt="product image"></img>

                <div id="prodCondition">
                    <p>Delivery: {this.props.product.deliveryCondition}</p>
                    <p>Stock: {this.props.product.stockCondition}</p>
                    <p>{this.props.product.description}</p>
                </div>
            </div>
        )
    }
}

export default Prod;