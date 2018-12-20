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
          <div className="logos">
            <img className="logo" alt="git" src="https://firebasestorage.googleapis.com/v0/b/reactivate-kt.appspot.com/o/img%2FGitLogo.png?alt=media&token=f2492d5e-cc1f-4715-8524-6ca66e9da6cf" />
            <img src={logo} className="App-logo" alt="logo" />
            <img className="logo" src="https://firebasestorage.googleapis.com/v0/b/reactivate-kt.appspot.com/o/img%2FFirebaseLogo.png?alt=media&token=969c17eb-aabb-4857-95b7-7f75d906fbb3" alt="firebase"/>
          </div>
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
