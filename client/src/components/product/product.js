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
        this.setState({ account, product }); // set state account and product with it's parameters values

    }

    componentWillMount() {
        let prodId = sessionStorage.getItem('product_______________') // set prodId with product's id

        productsServices.productAndSeller(prodId, this.onRetreive.bind(this)); // retreive data and set it in the state
    }

    render() {
        return (
            <div id="productPage">
                <Prod product={this.state.product} />
                <div id="prodAndSeller" style={{ marginLeft: "30px" }}>
                    <Prod1 product={this.state.product} />
                    <Seller seller={this.state.account} />
                </div>
            </div >
        )
    }
}

export default Product;