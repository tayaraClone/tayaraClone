import React, { Component } from 'react';
import productsServices from './../../services/productServices';

class ByName extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        }
    }

    onRetreive(data) {
        this.setState({ products: data })
    }

    componentWillMount() {
        let name = sessionStorage.getItem('-----------________search')
        productsServices.byNameProducts(name, this.onRetreive.bind(this))
    }

    onclick(e) {
        e.preventDefault()
    }

    render() {
        return (
            <div id="searchProds">
                {
                    this.state.products.map((product, i) => {
                        return (
                            <div key={i} id={product._id} className="allProds" onClick={this.onclick.bind(this)}>
                                <img src={product.image} className="allProdsImgs" alt="product image" ></img>
                                <h3>{product.cost} DT</h3>
                                <h4>{product.name}</h4>
                                <p>Stock: {product.stockCondition} | Delivery: {product.deliveryCondition}</p>
                            </div>
                        )
                    })
                }
            </div>

        )
    }
}

export default ByName;