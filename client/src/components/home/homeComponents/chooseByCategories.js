import React, { Component } from 'react';

class ChooseCategorie extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="categories">
                <h4>Categories :</h4>
                <div id="chooseCat">

                    <label for="men">Men's Fashion:</label>
                    <input type="checkbox" name="men's fashion" onClick={e => this.props.onRemoveCategorie(e.target.name)} checked></input>
                    <label for="women">Women's Fashion:</label>
                    <input type="checkbox" name="women's fashion" onClick={e => this.props.onRemoveCategorie(e.target.name)} checked></input>
                    <label for="boys">Boy's Fashion:</label>
                    <input type="checkbox" name="boy's fashion" onClick={e => this.props.onRemoveCategorie(e.target.name)} checked></input>
                    <label for="babys">Baby's Essentials</label>
                    <input type="checkbox" name="baby's essentials" onClick={e => this.props.onRemoveCategorie(e.target.name)} checked></input>
                    <label for="videoGames">Video Games:</label>
                    <input type="checkbox" name="video games" onClick={e => this.props.onRemoveCategorie(e.target.name)} checked></input>
                    <label for="art">Art:</label>
                    <input type="checkbox" name="art" onClick={e => this.props.onRemoveCategorie(e.target.name)} checked></input>
                    <label for="other">Other:</label>
                    <input type="checkbox" name="other" onClick={e => this.props.onRemoveCategorie(e.target.name)} checked></input>
                </div>
            </div>
        )
    }
}

export default ChooseCategorie;