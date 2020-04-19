import React, { Component } from 'react';

class Prod1 extends Component {
    render() {
        let prodCondStyle = {
            borderStyle: "solid",
            borderColor: "#f2ca96",
            borderRadius: "30%",
            backgroundColor: "white"
        }
        return (
            <div id="prodCondition1" style={prodCondStyle}>
                <h3>{this.props.product.cost} DT</h3>
                <h3>{this.props.product.name}</h3>
            </div>
        )
    }
}

export default Prod1;