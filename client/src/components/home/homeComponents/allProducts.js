import React, { Component } from 'react';
import productsServices from './../../../services/productServices'
import ChooseCategorie from './chooseByCategories';
import Price from './price';
import { Redirect } from 'react-router-dom';
import Prod from './prod';
class AllProds extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "men's fashion": true,
            "women's fashion": true,
            "boy's fashion": true,
            "baby's essentials": true,
            "video games": true,
            "art": true,
            "other": true,
            allProds: [],
            min: 0,
            max: 18000,
            clickedOnProduct: false
        }
    }

    onRetrieve(data) {

        this.setState({ allProds: data }); // set allProds state to the data value
    }

    removeCategory(name) {
        this.setState({ [name]: !this.state[name] }); // set state with the name value to true or false
    }

    componentWillMount() {
        productsServices.allProds(this.onRetrieve.bind(this)); // this will retreive all products and set it to allProds state
    }

    onclick(prodId) {
        sessionStorage.setItem('product_______________', prodId);
        this.setState({ clickedOnProduct: true });
    }

    makeBudget(name, price) {
        this.setState({ [name]: price }) // set state with name value to price value
    }

    render() {
        return !this.state.clickedOnProduct ? (
            <div id="allProducts">
                <div>
                    <ChooseCategorie onRemoveCategorie={this.removeCategory.bind(this)} />
                    <hr></hr>
                    <Price onBudget={this.makeBudget.bind(this)} />
                </div>

                <div id="homeProducts">
                    {
                        this.state.allProds.map((product, i) => {
                            if (this.state[product.categorie] && product.cost > (this.state.min || 1) && product.cost < (this.state.max || 18000)) {
                                return (
                                    <Prod i={i} product={product} onclick={this.onclick.bind(this)} />
                                )
                            }
                        })
                    }

                </div>
            </div>
        ) : (<Redirect to="/product" />)
    }
}

export default AllProds;