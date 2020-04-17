import React, { Component } from 'react';

class Price extends Component {

    render() {
        return (
            <div>
                <h4>Price:</h4>
                <div id="budgetInputs">
                    <input type="number" min="1" max="18000" name="min" className="budget" placeholder="Min" onChange={e => this.props.onBudget(e.target.name, e.target.value)}></input>
                    <input type="number" max="18000" min="1" name="max" className="budget" placeholder="Max" onChange={e => this.props.onBudget(e.target.name, e.target.value)}></input>
                </div>
            </div>
        )
    }
}

export default Price;