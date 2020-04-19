import React, { Component } from 'react';

class Price extends Component {

    render() {
        let style = { width: "100px" }
        let inputsStyle = {
            marginLeft: "40px",
            display: "flex"
        }
        return (
            <div>
                <h4>Price:</h4>
                <div id="budgetInputs" style={inputsStyle}>
                    <input type="number" min="1" max="18000" name="min" className="budget" style={style} placeholder="Min" onChange={e => this.props.onBudget(e.target.name, e.target.value)}></input>
                    <input type="number" max="18000" min="1" name="max" className="budget" style={style} placeholder="Max" onChange={e => this.props.onBudget(e.target.name, e.target.value)}></input>
                </div>
            </div>
        )
    }
}

export default Price;