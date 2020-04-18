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
        this.setState({ [e.target.name]: e.target.value })
    }

    on_click(e) {
        e.preventDefault()
        if (this.state.search.length === 0) alert("Search bar is empty")
        else {
            sessionStorage.setItem('-----------________search', this.state.search)
            this.setState({ madeSearch: true });
        }
    }
    render() {
        return !this.state.madeSearch ? (
            <div>
                <form>
                    <input type="text" name="search" onChange={this.on_change}></input>
                    <button onClick={this.on_click}></button>
                </form>
            </div>
        ) : <Redirect to="search" />
    }
}

export default Search;