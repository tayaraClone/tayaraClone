import React, { Component } from 'react';

class Seller extends Component {
    render() {
        let sellerAccStyle = {
            borderStyle: "solid",
            borderColor: "#cdf296",
            borderRadius: "30%",
            marginTop: "10px",
            backgroundColor: 'white'
        }
        return (
            <div style={sellerAccStyle}>
                <h4>{this.props.seller.firstname + ' ' + this.props.seller.lastname}</h4>
                <h5>{this.props.seller.phonenumber}</h5>
            </div>
        )
    }
}

export default Seller;