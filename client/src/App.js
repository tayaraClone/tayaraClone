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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openedAcc: false
    }
    this.openAccount = this.openAccount.bind(this);
  }

  openAccount() {
    this.setState({ opendAcc: true });
  }

  componentWillMount() {
    if (localStorage.getItem('____id')) { this.setState({ openedAcc: true }) }
  }

  render() {
    return (
      <Router>

        <div className="App">
          <Switch>
            <Route exact path="/signin">
              {!this.state.openedAcc ? <Signin openAccount={this.openAccount} /> : <Redirect to="/myProducts" />}
            </Route>
            <Route exact path="/signup">
              {!this.state.openedAcc ? <Signup openAccount={this.openAccount} /> : <Redirect to="/myProducts" />}

            </Route>
            <Route exact path="/myProducts">
              {/* {this.state.openedAcc ? } */}
              <div> </div>
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>

        </div>
      </Router>
    );
  }
}

export default App;
