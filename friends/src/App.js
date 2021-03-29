import React from 'react';
import LoginForm from './components/LoginForm'
import FriendsList from './components/FriendsList'
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute'

function App() {
  return (
    <Router>
    <div className="App">
      <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/friendslist">Friends List</Link>
        </li>
      </ul>
      <Switch>
      <PrivateRoute exact path="/friendslist" component={FriendsList} />
      <Route path="/login" component={LoginForm} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
