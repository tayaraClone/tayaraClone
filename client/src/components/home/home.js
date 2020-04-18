import React, { Component } from 'react';
import AllProds from './homeComponents/allProducts';
import Search from './../searchBar/search'
class Home extends Component {
    render() {
        return (
            <div id='homePage'>
                <Search />
                <AllProds />
            </div>
        )
    }
}

export default Home;