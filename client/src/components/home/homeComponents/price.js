import React, { Component } from 'react';

class Price extends Component {
    render() {
        return (
            <div id="budgetInputs">
                <input type="number" name="min" className="budget"></input>
                <input type="number" name="max" className="budget"></input>
            </div>
        )
    }
}

export default Price;