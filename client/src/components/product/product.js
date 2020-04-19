import React, { Component } from 'react';
import productsServices from './../../services/productServices'

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            account: {},
            product: {}
        }
    }

    onRetreive(account, product) {
        this.setState({ account, product });
        console.log(account, product)
    }

    componentWillMount() {
        let prodId = sessionStorage.getItem('product_______________')

        productsServices.productAndSeller(prodId, this.onRetreive.bind(this));
    }

    render() {
        return (
            <div>
                <img src={this.state.product.image} />
            </div>
        )
    }
}

export default Product;