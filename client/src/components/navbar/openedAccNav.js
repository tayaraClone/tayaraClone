import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class OpenedAccNav extends Component {
    constructor(props) {
        super(props);
    }
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
                <ul>
                    <li style={listStyle}><Link to="/">Home</Link></li>
                    <li style={listStyle}><Link to="myProducts">My Products</Link></li>
                    <li style={listStyle}><Link to="makeProduct">make Product</Link></li>
                    <li style={listStyle} onClick={this.props.logOut}>Log Out</li>
                </ul>
            </nav>
        )
    }
}

export default OpenedAccNav;