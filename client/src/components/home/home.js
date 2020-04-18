import React, { Component } from 'react';
import AllProds from './homeComponents/allProducts';
import Search from './homeComponents/search'
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