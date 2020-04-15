import React, { Component } from 'react';

class MakeProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            account_id: localStorage.getItem('___________id'),
            name: '',
            description: '',
            cost: null,
            stockCondition: '',
            categorie: '',
            deliveryCondition: '',
            productPlace: ''
        }
    }
    render() {
        return (
            <div>
                <form>
                    <label for="name">Name:</label>
                    <input name="name" type="text" id="newProdId"></input><br></br>
                    <label for="description">Description:</label>
                    <input name="description" type="text"></input><br></br>
                    <label for="cost">Cost:</label>
                    <input name="cost" type="number"></input><br></br>
                    <label for="stockCondition">Stock Condition:</label>
                    <select name="stockCondition">
                        <option selected disabled>choose</option>
                        <option value="available">available</option>
                        <option value="limited">limited</option>
                    </select><br></br>
                    <label for="categorie">Categorie:</label>
                    <select name="categorie">
                        <option selected diseabled>choose</option>
                        <option value="men's fashion">men's fashion</option>
                        <option value="women's fashion">women's fashion</option>
                        <option value="boy's fashion">boy's fashion</option>
                        <option value="baby">baby</option>
                        <option value="art">art</option>
                        <option value="video games">video games</option>
                        <option value="other">other</option>
                    </select><br></br>
                    <label for="deliver">Delivery:</label>
                    <select name="deliveryCondition">
                        <option disabled selected>Choose</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select><br></br>
                    <label for="productPlace">Product Place:</label>
                    <input type="text" name="productPlace"></input><br></br>
                    <button>Make Product</button>
                </form>
            </div>
        )
    }
}
export default MakeProduct;