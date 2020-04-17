import React, { Component } from 'react';

class Price extends Component {
    render() {
        return (
            <div>
                <h4>Price:</h4>
                <div id="budgetInputs">
                    <input type="number" name="min" className="budget" placeholder="Min"></input>
                    <input type="number" name="max" className="budget" placeholder="Max"></input>
                </div>
            </div>
        )
    }
}

export default Price;