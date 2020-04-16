import React, { Component } from 'react';
import AllProds from './homeComponents/allProducts';
class Home extends Component {
    render() {
        return (
            <div id='homePage'>
                <AllProds />
            </div>
        )
    }
}

export default Home;