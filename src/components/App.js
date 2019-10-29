import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route
} from "react-router-dom";
// Example projects
import RouterApp from '../projects/react-router/App';

function Home() {
  return (
    <div className="Home">
      <h1>Home</h1>
    </div>
  );
}

function App() {

  return (
    <div className="App">
      <Router history={History}>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/react-router">React-Router</Link>
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
            path="/react-router"
            component={RouterApp}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;