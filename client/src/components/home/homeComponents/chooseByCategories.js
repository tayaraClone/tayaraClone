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
                    <input type="checkbox" name="men's fashion" checked></input>
                    <label for="women">Women's Fashion:</label>
                    <input type="checkbox" name="women's fashion" checked></input>
                    <label for="boys">Boy's Fashion:</label>
                    <input type="checkbox" name="boy's fashion" checked></input>
                    <label for="babys">Baby's Essentials</label>
                    <input type="checkbox" name="baby's essentials" checked></input>
                    <label for="videoGames">Video Games:</label>
                    <input type="checkbox" name="video games" checked></input>
                    <label for="art">Art:</label>
                    <input type="checkbox" name="art" checked></input>
                    <label for="other">Other:</label>
                    <input type="checkbox" name="other" checked></input>
                </div>
            </div>
        )
    }
}

export default ChooseCategorie;