import React, { Component } from 'react';
import productsServices from './../../services/productServices';
import Search from './../searchBar/search';

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
            <div>
                <Search />
                <div id="searchProds">
                    {
                        this.state.products.map((product, i) => {
                            return (
                                <div key={i} id={product._id} className="seachProd" onClick={this.onclick.bind(this)}>
                                    <img src={product.image} className="searchProdsImgs" alt="product image" ></img>
                                    <h3>{product.cost} DT</h3>
                                    <h4>{product.name}</h4>
                                    <p>Stock: {product.stockCondition} | Delivery: {product.deliveryCondition}</p>
                                    <p>{product.description}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

        )
    }
}

export default ByName;