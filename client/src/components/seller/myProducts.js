import React, { Component } from 'react';
import productServices from './../../services/productServices';

class MyProducts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            myProds: []
        }
    }
    onRetreive(data) {
        // onRetereive takes data as a parameter and set myProds state to the data value
        this.setState({ myProds: data });

    }
    componentWillMount() {
        // componentWillMount invoke sellerProds from productServices file and takes onReteive as a parameter
        productServices.sellerProds(this.onRetreive.bind(this));
    }
    finishedStock(e) {
        // finishedStock invoke finishedStock from productServices file and takes the targets name (product id) as a parameter 
        productServices.finishedStock(e.target.name)
    }


    render() {
        let stockConditionStyle = {
            marginRight: "70px"
        }

        let sellerProdImg = {
            width: "200px",
            height: "200px"
        }
        return (
            <div id="myProds">
                {
                    this.state.myProds.map((product, i) => (
                        <div className="sellerProd" key={i}>
                            <img className="sellerProdImg" style={sellerProdImg} src={product.image} alt="product image"></img>
                            <p className="stockCondition" style={stockConditionStyle}>Stock: {product.stockCondition} </p>
                            <button id="finishedStock" name={product._id} onClick={this.finishedStock.bind(this)}>Finished Stock</button>
                            <h4>{product.name}</h4>
                        </div>
                    ))
                }
            </div>
        )
    }
}

export default MyProducts;