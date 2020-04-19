import React, { Component } from 'react';

class Prod1 extends Component {
    render() {
        return (
            <div id="prodCondition1">
                <h3 style={{ marginRight: "160px" }}>{this.props.product.cost} DT</h3>
                <h3>{this.props.product.name}</h3>
            </div>
        )
    }
}

export default Prod1;