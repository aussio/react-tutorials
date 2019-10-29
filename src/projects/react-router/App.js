import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route
} from "react-router-dom";
import { Home, About, Search, NoMatch } from './pages';


function App() {

  const random = Math.random().toString(36).substr(2, 5);

  return (
    <div className="App">
      <Router history={History}>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/search">Search</Link>
            </li>
            <li>
              <Link to="/{random}">{random}</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route
            exact
            path="/"
            component={Home}
          />
          <Route
            exact
            path="/about"
            component={About}
          />
          <Route
            exact
            path="/search"
            component={Search}
            RouteKey
          />
          <Route
            exact
            component={NoMatch}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;