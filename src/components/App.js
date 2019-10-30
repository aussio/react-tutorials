import React from 'react';
import {
  Switch,
  Link,
  Route,
} from "react-router-dom";
import styles from './App.module.css';

import Tutorials from './Tutorials';

class App extends React.Component {

  homePath = "/"

  tutorialProjectsPath = "/tutorial-projects"

  render() {
    return (
      <div className={styles.entirePage}>
        <Header
          homePath={this.homePath}
          tutorialProjectsPath={this.tutorialProjectsPath}
        />
        <Switch>
          <Route
            exact
            path={this.homePath}
            component={Home}
          />
          <Route
            path={this.tutorialProjectsPath}
            render={() => <Tutorials pathPrefix={this.tutorialProjectsPath} />}
          />
        </Switch>
      </div>
    );
  }
}

class Header extends React.Component {

  render() {

    const { homePath } = this.props;
    const { tutorialProjectsPath } = this.props;


    return (
      <nav className={styles.header}>
        <Link
          className={styles.link}
          to={homePath}
        >
          Home
        </Link>
        <Link
          className={styles.link}
          to={tutorialProjectsPath}
        >
          Tutorial Projects
        </Link>
      </nav>
    );
  }
}

function Home() {
  return (
    <div className="Home">
      <h1>Home</h1>
    </div>
  );
}

export default App;