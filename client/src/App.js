import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
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
  }

  componentWillMount() {
    if (localStorage.getItem('___id')) { this.setState({ openedAcc: true }) }
  }

  render() {
    return (
      <Router>

        <div className="App">
          <Switch>
            <Route exact path="/signin">
              <Signin />
            </Route>
            <Route exact path="/signup">
              <Signup />
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
