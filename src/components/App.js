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
import DataFetching from '../projects/data-fetching/App';
import ReactJsOrg from '../projects/reactjs.org-tutorial/App';
import NasaPics from '../projects/recipe-app-tutorial/App';

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
              <Link to="/react-router">React Router</Link>
            </li>
            <li>
              <Link to="/data-fetching">Data Fetching</Link>
            </li>
            <li>
              <Link to="/reactjs-org">Reactjs.org Tutorial</Link>
            </li>
            <li>
              <Link to="/nasa-pic-of-the-day">Nasa Pic of the Day</Link>
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
          <Route
            exact
            path="/data-fetching"
            component={DataFetching}
          />
          <Route
            exact
            path="/reactjs-org"
            component={ReactJsOrg}
          />
          <Route
            exact
            path="/nasa-pic-of-the-day"
            component={NasaPics}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;