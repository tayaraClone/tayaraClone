import React, { Component } from 'react';
import accountServices from './../../services/accountServices'
class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            email: '',
            password: '',
            longitude: '',
            latitude: "",
            heightAccuracy: '',
            phoneNumber: null,
            city: ''
        }
        this.onchange = this.onchange.bind(this);
    }
    onchange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    onSubmit(e) {
        e.preventDefault();
        let emailValidator = /@./;

        if (this.state.firstname === "" ||
            this.state.lastname === "" ||
            !emailValidator.test(this.state.email) ||
            this.state.password.length < 9||
            this.state.city === '') {

                if (this.state.firstname === "") alert('first name input is empty')
                else if (this.state.lastname === "") alert('last name input is empty')
                else if (!emailValidator.test(this.state.email)) alert('your email might be wrong check it again');
                else if (this.state.password.length < 9) alert('your word must be more than 9 letters long')
                else if (this.state.city === "") alert('you must choose a city')
        }

        else {
            accountServices.signUp(this.state)
        }


    }
    render() {
        return (
            <div>
                <form>
                    <label for="firstname">First Name:</label>
                    <input id="upFirstName" type="text" name="firstname" onChange={this.onchange}></input><br></br>
                    <label for="lastname">Last Name:</label>
                    <input id="upLastName" type="text" name="lastname" onChange={this.onchange}></input><br></br>
                    <label for="upEmail">Email:</label>
                    <input id="upEmail" type="email" name="email" onChange={this.onchange}></input><br></br>
                    <label for="password"></label>
                    <input id="upPassword" name="password" type="password" onChange={this.onchange}></input><br></br>
                    <label for="phoneNumber">Phone Number:</label>
                    <input id="upPhone" type="number" name="phoneNumber" onChange={this.onchange}></input><br></br>
                    <select name="city" id="upCity" onChange={this.onchange}>
                        <option disabled selected>Choose City</option>
                        <option value="Tunis">tunis</option>
                        <option value="sousse">sousse</option>
                        <option value="tabarka">tabarka</option>
                        <option value="hammamet">hammamet</option>
                        <option value="touzer">touzer</option>
                        <option value="gafsa">gafsa</option>
                        <option value="kef">kef</option>
                        <option value="beja">beja</option>
                    </select>
                    <button onClick={this.onSubmit.bind(this)}>Sign Up</button>

                </form>
            </div>
        )
    }
}

export default Signup;