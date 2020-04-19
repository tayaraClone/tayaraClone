import React, { Component } from 'react';

class Prod extends Component {
    render() {
        return (
            <div key={this.props.i} id={this.props.product._id} className="allProds" onClick={this.props.onclick}>
                <img src={this.props.product.image} className="allProdsImgs" alt="product image" ></img>
                <h3>{this.props.product.cost} DT</h3>
                <h4>{this.props.product.name}</h4>
                <p>Stock: {this.props.product.stockCondition} | Delivery: {this.props.product.deliveryCondition}</p>
            </div>
        )
    }
}

export default Prod;