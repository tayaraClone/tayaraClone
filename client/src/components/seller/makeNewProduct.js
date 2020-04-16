import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import productServices from './../../services/productServices'
class MakeProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            image: "",
            description: '',
            cost: null,
            stockCondition: '',
            categorie: '',
            deliveryCondition: '',
            productPlace: '',
            madeProd: false
        }
        this.on_change = this.on_change.bind(this);
    }

    on_change(e) {
        // on_change change states values by name
        this.setState({ [e.target.name]: e.target.value });
    }

    onMadeProduct() {
        // onMadeProduct set madeProd to true so it can redirect the page to myProducts page
        this.setState({ madeProd: true })
    }

    on_click(e) {
        e.preventDefault();
        let urlValidator = /[http][https]:\/\//

        if (this.state.name === "" ||
            this.state.description === "" ||
            this.state.cost === null ||
            !urlValidator.test(this.state.image) ||
            this.state.stockCondition === "" ||
            this.state.categorie === "" ||
            this.state.deliveryCondition === "" ||
            this.state.productPlace === "") {
            if (this.state.name === "") alert('the name input is empty')
            else if (!urlValidator.test(this.state.image)) alert('that is not a url in your image input')
            else if (this.state.description === "") alert('description is empty')
            else if (this.state.cost === null) alert('you have to write how much your product is for')
            else if (this.state.stockCondition === "") alert('you didn\' choose a stock condition')
            else if (this.state.categorie === "") alert('you didn\'t choose a categorie')
            else if (this.state.deliveryCondition === '') alert('you have to choose delivery condition')
            else if (this.state.productPlace === "") alert('you have write the product place')


        } else {
            productServices.makeProduct(this.state, this.onMadeProduct.bind(this))
        }

    }

    render() {
        return !this.state.madeProd ? (

            <div>
                <form>
                    <label for="name">Name:</label>
                    <input name="name" type="text" id="newProdId" onChange={this.on_change}></input><br></br>
                    <label for="image">Image url:</label>
                    <input type="text" name="image" id="newProdImage" onChange={this.on_change}></input><br></br>
                    <label for="description">Description:</label>
                    <input name="description" type="text" onChange={this.on_change}></input><br></br>
                    <label for="cost">Cost (in DT):</label>
                    <input name="cost" type="number" min="1" onChange={this.on_change}></input><br></br>
                    <label for="stockCondition">Stock Condition:</label>
                    <select name="stockCondition" onChange={this.on_change}>
                        <option selected disabled>choose</option>
                        <option value="available">available</option>
                        <option value="limited">limited</option>
                    </select><br></br>
                    <label for="categorie">Categorie:</label>
                    <select name="categorie" onChange={this.on_change}>
                        <option selected diseabled>choose</option>
                        <option value="men's fashion">men's fashion</option>
                        <option value="women's fashion">women's fashion</option>
                        <option value="boy's fashion">boy's fashion</option>
                        <option value="baby's essentials">baby's essentials</option>
                        <option value="art">art</option>
                        <option value="video games">video games</option>
                        <option value="other">other</option>
                    </select><br></br>
                    <label for="productPlace">Product Place:</label>
                    <input type="text" name="productPlace" onChange={this.on_change}></input><br></br>
                    <label for="deliver">Delivery:</label>
                    <select name="deliveryCondition" onChange={this.on_change}>
                        <option disabled selected>Choose</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select><br></br>
                    <button onClick={this.on_click.bind(this)}>Make Product</button>
                </form>
            </div>
        ) : (<Redirect to="/myProducts" />)
    }
}
export default MakeProduct;