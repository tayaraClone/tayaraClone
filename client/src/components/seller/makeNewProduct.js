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

                </form>
            </div>
        )
    }
}
export default MakeProduct;