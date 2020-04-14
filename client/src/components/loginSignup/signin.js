import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Signin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ""
        }
    }
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