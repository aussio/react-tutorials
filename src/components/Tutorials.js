import React from 'react';
import {
  Switch,
  Link,
  Route
} from "react-router-dom";
import styles from './Tutorials.module.css';

// Example projects
import RouterApp from '../projects/react-router/App';
import DataFetching from '../projects/data-fetching/App';
import ReactJsOrg from '../projects/reactjs.org-tutorial/App';
import NasaPics from '../projects/recipe-app-tutorial/App';


class Tutorials extends React.Component {

  render() {
    const { pathPrefix } = this.props;
    const reactRouterPath = `${pathPrefix}/react-router`;
    const dataFetchingPath = `${pathPrefix}/data-fetching`;
    const reactJSOrgPath = `${pathPrefix}/reactjs-org`;
    const nasaPicOfTheDayPath = `${pathPrefix}/nasa-pic-of-the-day`;


    return (
      <div className={styles.tutorialContainer}>
        <TutorialsNav
          className={styles.nav}
          reactRouterPath={reactRouterPath}
          dataFetchingPath={dataFetchingPath}
          reactJSOrgPath={reactJSOrgPath}
          nasaPicOfTheDayPath={nasaPicOfTheDayPath}
        />

        <div className={styles.content}>
          <Switch>
            <Route
              exact
              path={pathPrefix}
              component={TutorialsHome}
            />
            <Route
              path={reactRouterPath}
              component={RouterApp}
            />
            <Route
              path={dataFetchingPath}
              component={DataFetching}
            />
            <Route
              path={reactJSOrgPath}
              component={ReactJsOrg}
            />
            <Route
              path={nasaPicOfTheDayPath}
              component={NasaPics}
            />
          </Switch>
        </div>
      </div>
    );
  }
}

class TutorialsNav extends React.Component {

  render() {
    const { className } = this.props;
    const { reactRouterPath } = this.props;
    const { dataFetchingPath } = this.props;
    const { reactJSOrgPath } = this.props;
    const { nasaPicOfTheDayPath } = this.props;

    return (
      <nav className={className}>
        <Link
          className={styles.link}
          to={reactRouterPath}
        >
          React Router
        </Link>
        <Link
          className={styles.link}
          to={dataFetchingPath}
        >
          Data Fetching
        </Link>
        <Link
          className={styles.link}
          to={reactJSOrgPath}
        >
          Reactjs.org Tutorial
        </Link>
        <Link
          className={styles.link}
          to={nasaPicOfTheDayPath}
        >
          Nasa Pic of the Day
        </Link>
      </nav>
    );
  }
}

function TutorialsHome() {
  return (
    <div>
      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>

      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>

      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>

      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>

      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>

      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>

      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>

      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>

      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>

      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>

      <h1>Tutorials Home Goes Here</h1>
      <h1>Tutorials Home Goes Here</h1>

    </div>
  );
}

export default Tutorials;