import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class OpenedAccNav extends Component {
    render() {
        return (
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="myProducts">My Products</Link></li>
                    <li>Log Out</li>
                </ul>
            </nav>
        )
    }
}

export default OpenedAccNav;