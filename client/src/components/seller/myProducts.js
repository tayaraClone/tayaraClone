import React, { Component } from 'react';
import productsServices from './../../services/productServices';
import productServices from './../../services/productServices';

class MyProducts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            myProds: []
        }
    }
    onRetreive(data) {
        this.setState({ myProds: data });
    }
    componentWillMount() {
        productServices.sellerProds(this.onRetreive.bind(this));
    }


    render() {
        return (
            <div id="myProds">
                {
                    this.state.myProds.map((product, i) => (
                        <div className="sellerProd" key={i}>
                            <img className="sellerProdImg" src={product.image} alt="product image"></img>
                            <p className="stockCondition">Stock: {product.stockCondition} </p>
                            <button id="finishedStock">Finished Stock</button>
                            <h4>{product.name}</h4>
                        </div>
                    ))
                }
            </div>
        )
    }
}

export default MyProducts;