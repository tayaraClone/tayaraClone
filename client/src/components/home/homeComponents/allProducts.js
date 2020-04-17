import React, { Component } from 'react';
import productsServices from './../../../services/productServices'

class AllProds extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mensFashion: true,
            womensFashion: true,
            boysFashion: true,
            videoGames: true,
            babysEssential: true,
            art: true,
            other: true,
            "men's fashion": true,
            "women's fashion": true,
            "boy's fashion": true,
            "video games": true,
            "baby's essentials": true,
            "Art": true,
            "Other": true,
            allProds: []

        }
    }

    onRetrieve(data) {
        console.log(data);
        this.setState(data);
    }

    componentWillMount() {
        productsServices.allProds(this.onRetrieve.bind(this));
    }

    onclick(e) {
        e.preventDefault()
    }

    render() {
        return (
            <div id="homeProducts">
                {
                    this.state.allProds.map((product, i) => {
                        if (this.state[product.categorie]) {
                            return (
                                <div key={i} id={product._id} className="allProds" onClick={this.onclick.bind(this)}>
                                    <img src={product.image} className="allProdsImgs" alt="product image" ></img>
                                    <p>Stock: {product.stockCondition} | Delivery: {product.deliveryCondition}</p>
                                    <h4>{product.name}</h4>
                                </div>
                            )
                        }
                    })
                }

            </div>
        )
    }
}

export default AllProds;