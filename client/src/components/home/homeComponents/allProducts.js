import React, { Component } from 'react';
import productsServices from './../../../services/productServices'
import ChooseCategorie from './chooseByCategories';

class AllProds extends Component {
    constructor(props) {
        super(props);
        this.state = {

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
        this.setState({ allProds: data });
    }

    removeCategory(name) {
        this.setState({ [name]: this.state[name] });
    }

    componentWillMount() {
        productsServices.allProds(this.onRetrieve.bind(this)); // this will retreive all products and set it to allProds state
    }

    onclick(e) {
        e.preventDefault()
    }

    render() {
        return (
            <div id="allProducts">
                <ChooseCategorie />

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
            </div>
        )
    }
}

export default AllProds;