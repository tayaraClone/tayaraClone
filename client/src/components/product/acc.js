import React, { Component } from 'react';

class Seller extends Component {
    render() {
        return (
            <div >
                <h4>{this.props.seller.firstname + ' ' + this.props.seller.lastname}</h4>
                <h5>{this.props.seller.phonenumber}</h5>
            </div>
        )
    }
}

export default Seller;