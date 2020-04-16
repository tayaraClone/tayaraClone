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
            "men's fashion": [],
            "women's fashion": [],
            "boy's fashion": [],
            "video games": [],
            "baby's essentials": [],
            "Art": [],
            "Other": []
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

                {this.state.mensFashion ? this.state["men's fashion"].map((product, i) => (
                    <div key={i} id={product._id} className="allProds" onClick={this.onclick.bind(this)}>
                        <img src={product.image} className="allProdsImgs" alt="product image" ></img>
                        <p>Stock: {product.stockCondition} | Delivery: {product.deliveryCondition}</p>
                        <h4>{product.name}</h4>
                    </div>)) : <div></div>}
                {this.state.womensFashion ? this.state["women's fashion"].map((product, i) => (
                    <div key={i} id={product._id} className="allProds" onClick={this.onclick.bind(this)}>
                        <img src={product.image} className="allProdsImgs" alt="product image" ></img>
                        <p>Stock: {product.stockCondition} | Delivery: {product.deliveryCondition}</p>
                        <h4>{product.name}</h4>
                    </div>
                )) : <div></div>}
                {this.state.boysFashion ? this.state["boy's fashion"].map((product, i) => (
                    <div key={i} id={product._id} className="allProds" onClick={this.onclick.bind(this)}>
                        <img src={product.image} className="allProdsImgs" alt="product image" ></img>
                        <p>Stock: {product.stockCondition} | Delivery: {product.deliveryCondition}</p>
                        <h4>{product.name}</h4>
                    </div>
                )) : <div></div>}
                {this.state.babysEssential ? this.state["baby's essentials"].map((product, i) => (
                    <div key={i} id={product._id} className="allProds" onClick={this.onclick.bind(this)}>
                        <img src={product.image} className="allProdsImgs" alt="product image" ></img>
                        <p>Stock: {product.stockCondition} | Delivery: {product.deliveryCondition}</p>
                        <h4>{product.name}</h4>
                    </div>
                )) : <div></div>}
                {this.state.videoGames ? this.state["video games"].map((product, i) => (
                    <div key={i} id={product._id} className="allProds" onClick={this.onclick.bind(this)}>
                        <img src={product.image} className="allProdsImgs" alt="product image" ></img>
                        <p>Stock: {product.stockCondition} | Delivery: {product.deliveryCondition}</p>
                        <h4>{product.name}</h4>
                    </div>
                )) : <div></div>}
                {this.state.art ? this.state["Art"].map((product, i) => (
                    <div key={i} id={product._id} className="allProds" onClick={this.onclick.bind(this)}>
                        <img src={product.image} className="allProdsImgs" alt="product image" ></img>
                        <p>Stock: {product.stockCondition} | Delivery: {product.deliveryCondition}</p>
                        <h4>{product.name}</h4>
                    </div>
                )) : <div></div>}
                {this.state.other ? this.state["Other"].map((product, i) => (
                    <div key={i} id={product._id} className="allProds" onClick={this.onclick.bind(this)}>
                        <img src={product.image} className="allProdsImgs" alt="product image" ></img>
                        <p>Stock: {product.stockCondition} | Delivery: {product.deliveryCondition}</p>

                        <h4>{product.name}</h4>
                    </div>
                )) : <div></div>}
            </div>
        )
    }
}

export default AllProds;