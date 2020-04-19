import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: "",
            madeSearch: false
        }
    }
    on_change(e) {
        this.setState({ [e.target.name]: e.target.value }) // set state with value
    }

    on_click(e) {
        e.preventDefault()
        if (this.state.search.length === 0) alert("Search bar is empty")
        else {
            sessionStorage.setItem('-----------________search', this.state.search) // give session storage with a search name
            this.setState({ madeSearch: true }); // set state madeSearch to true so it can redirect to "/search" path
        }
    }
    render() {
        return !this.state.madeSearch ? (
            <div>
                <form>
                    <input type="text" name="search" onChange={this.on_change.bind(this)}></input>
                    <button onClick={this.on_click.bind(this)}>Search</button>
                </form>
            </div>
        ) : <Redirect to="/search" />
    }
}

export default Search;