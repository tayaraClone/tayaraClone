import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
class App extends React.Component {

  render() {
    return (
      <Router>

        <div className="App">
          <Switch>
            <Route path="/about">
              <div>/about</div>
            </Route>
            <Route path="/users">
              <div>users</div>
            </Route>
            <Route path="/">
              <div>/</div>
            </Route>
          </Switch>

        </div>
      </Router>
    );
  }
}

export default App;
