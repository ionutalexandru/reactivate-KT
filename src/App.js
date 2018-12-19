import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {ToDoFooter} from './components';
import logo from './logo.svg';
import './App.css';

// Import Components here
import ToDo from './containers';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <code>git react me</code>. Time to learn React.
          </p>
          <h3>Simple ToDo Web App integrated in Firebase</h3>
        </header>
        <div className="ToDo">
          <Router>
            <Fragment>
              <Route path='/:filter?' render={({match}) => (
                <ToDo filter={match.params.filter || 'all'} />
              )} />
              <ToDoFooter />
            </Fragment>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
