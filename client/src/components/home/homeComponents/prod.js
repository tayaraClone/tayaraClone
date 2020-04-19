import React, { Component } from 'react';

class Prod extends Component {
    constructor(props) {
        super(props)
        this.getId = this.getId.bind(this);
    }

    getId(e) {
        e.preventDefault()
        let id = e.target.className.split(' ')[0]
        console.log(id)
        // let id = e.target.id;
        this.props.onclick(id)
    }


    render() {
        return (
            <div key={this.props.i} id={this.props.product['_id']} className="allProds" onClick={e => this.getId(e)}>
                <img src={this.props.product.image} style={{ width: "200px", height: "200px" }} className={this.props.product._id + " allProdsImgs"} alt="product image" ></img>
                <h3 className={this.props.product._id}>{this.props.product.cost} DT</h3>
                <h4 className={this.props.product._id}>{this.props.product.name}</h4>
                <p className={this.props.product._id}>Stock: {this.props.product.stockCondition} | Delivery: {this.props.product.deliveryCondition}</p>
            </div>
        )
    }
}

export default Prod;