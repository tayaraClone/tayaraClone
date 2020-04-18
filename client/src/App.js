import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Home from './components/home/home';
import Signin from './components/loginSignup/signin';
import Signup from './components/loginSignup/signup';
import MyProducts from './components/seller/myProducts';
import OpenedAccNav from './components/navbar/openedAccNav';
import NotOpenedAccNav from './components/navbar/notOpenedAcc';
import MakeProduct from './components/seller/makeNewProduct';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openedAcc: false
    }
    this.openAccount = this.openAccount.bind(this);
  }

  openAccount() {
    this.setState({ openedAcc: true });
  }

  logOut() {
    localStorage.removeItem('_______________JWT_Token') // remove the token from the localStorage
    this.setState({ openedAcc: false }); // set openedAcc state to false so it can logs out
  }

  componentWillMount() {
    if (localStorage.getItem('_______________JWT_Token')) { this.setState({ openedAcc: true }) } // if the is a token it will set openedAcc to true 
  }

  render() {
    return (
      <Router>

        <div className="App">
          {this.state.openedAcc ? <OpenedAccNav logOut={this.logOut.bind(this)} /> : <NotOpenedAccNav />}

          <Switch>
            <Route exact path="/signin">
              {!this.state.openedAcc ? <Signin openAccount={this.openAccount} /> : <Redirect to="/myProducts" />}
            </Route>
            <Route exact path="/signup">
              {!this.state.openedAcc ? <Signup openAccount={this.openAccount} /> : <Redirect to="/myProducts" />}

            </Route>
            <Route exact path="/myProducts">
              {this.state.openedAcc ? <MyProducts /> : <Redirect to="/signin" />}

            </Route>
            <Route exact path="/makeProduct">
              {this.state.openedAcc ? <MakeProduct /> : <Redirect to="/" />}
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="*">
              <h1>THIS PATH IS NOT FOUND !!</h1>
            </Route>
          </Switch>

        </div>
      </Router>
    );
  }
}

export default App;
