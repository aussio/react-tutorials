import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Link
} from "react-router-dom";
import ScrollToTopRoute from './ScrollToTopRoute';
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
          <ScrollToTopRoute
            exact
            path="/"
            component={Home}
          />
          <ScrollToTopRoute
            exact
            path="/about"
            component={About}
          />
          <ScrollToTopRoute
            exact
            path="/search"
            component={Search}
            RouteKey
          />
          <ScrollToTopRoute
            exact
            component={NoMatch}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;