import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Signin extends Component {
    render() {
        return (
            <div>
                <h1>Sign In</h1>
                <Link to="/signup" >Make new Account</Link>
            </div>
        )
    }
}

export default Signin;