import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class OpenedAccNav extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="myProducts">My Products</Link></li>
                    <li><Link to="makeProduct">make Product</Link></li>
                    <li onClick={this.props.logOut}>Log Out</li>
                </ul>
            </nav>
        )
    }
}

export default OpenedAccNav;