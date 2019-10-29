import React from 'react';
import './App.css';
import ScrollToTopRoute from './ScrollToTopRoute';
import {
  BrowserRouter as Router,
  Switch,
  Link
} from "react-router-dom";


function App() {

  let random = Math.random().toString(36).substr(2, 5);

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
          <ScrollToTopRoute exact path="/" component={Home} />
          <ScrollToTopRoute exact path="/about" component={About} />
          <ScrollToTopRoute exact path="/search" component={Search} RouteKey={true} />
          <ScrollToTopRoute exact component={NoMatch} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

function Home() {
  return (
    <div className="Home">
      <h1>Home</h1>
    </div>
  );
}

function About() {
  return (
    <div className="About">
      <h1>About</h1>
    </div>
  );
}

function Search() {
  return (
    <div className="Search">
      <h1>Search</h1>
    </div>
  );
}

function NoMatch() {
  return (
    <div className="NotFound">
      <h1>404: Not Found</h1>
    </div>
  )
}