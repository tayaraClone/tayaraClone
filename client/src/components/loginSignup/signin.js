import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import accServices from './../../services/accountServices'
class Signin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ""
        }
    }
    onchange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onclick(e) {
        e.preventDefault()
        let emailValidator = /@./;
        if (this.state.password < 9 || emailValidator.test(this.state.email)) {
            accServices.signIn(this.state, this.props.openAccount)
        }
    }
    render() {
        return (
            <div>
                <h1>Sign In</h1>
                <form>
                    <label for="email">Email:</label>
                    <input id="inEmail" type="text" name="email" onChange={this.onchange.bind(this)}></input><br></br>
                    <label for="password">Password:</label>
                    <input id="inPass" type="password" name="password" onChange={this.onchange.bind(this)}></input><br></br>
                    <button onClick={this.onclick.bind(this)}>Sign In</button>
                </form>
                <Link to="/signup" >Make new Account</Link>
            </div>
        )
    }
}

export default Signin;