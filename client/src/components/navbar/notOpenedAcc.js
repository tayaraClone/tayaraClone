import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class NotOpendAccNav extends Component {
    render() {
        let listStyle = {

            display: "inline",
            marginLeft: "10px"
        }

        let ulStyle = {
            listStyleType: "none"
        }
        return (
            <nav class="nav">
                <ul style={ulStyle}>
                    <li style={listStyle}><Link to="/">Home</Link></li>
                    <li style={listStyle}><Link to="/signin">Open Seller Account</Link></li>
                </ul>
            </nav>
        )
    }
}

export default NotOpendAccNav;