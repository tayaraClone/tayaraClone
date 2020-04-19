import React, { Component } from 'react';
import productsServices from './../../services/productServices';
import Prod from './prod';
import Prod1 from './prod1';
import Seller from './acc';
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
                <Prod product={this.state.product} />
                <div>
                    <Prod1 product={this.state.product} />
                    <Seller seller={this.state.account} />
                </div>
            </div>
        )
    }
}

export default Product;