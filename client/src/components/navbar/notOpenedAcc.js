import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class NotOpendAccNav extends Component {
    render() {
        return (
            <nav>
                <ul>
                    <li><Link to="/signin">Open Seller Account</Link></li>
                </ul>
            </nav>
        )
    }
}

export default NotOpendAccNav;