import React from 'react';
import {
  Switch,
  Link,
  Route
} from "react-router-dom";
import styled from 'styled-components';

// Example projects
import RouterApp from '../projects/react-router/App';
import DataFetching from '../projects/data-fetching/App';
import ReactJsOrg from '../projects/reactjs.org-tutorial/App';
import NasaPics from '../projects/recipe-app-tutorial/App';


class Tutorials extends React.Component {

  render() {
    const { pathPrefix } = this.props;
    const { className } = this.props;
    const reactRouterPath = `${pathPrefix}/react-router`;
    const dataFetchingPath = `${pathPrefix}/data-fetching`;
    const reactJSOrgPath = `${pathPrefix}/reactjs-org`;
    const nasaPicOfTheDayPath = `${pathPrefix}/nasa-pic-of-the-day`;


    return (
      <div className={className}>
        <StyledTutorialsNav
          reactRouterPat={reactRouterPath}
          dataFetchingPath={dataFetchingPath}
          reactJSOrgPath={reactJSOrgPath}
          nasaPicOfTheDayPath={nasaPicOfTheDayPath}
        />

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
        <ul>
          <li>
            <Link to={reactRouterPath}>React Router</Link>
          </li>
          <li>
            <Link to={dataFetchingPath}>Data Fetching</Link>
          </li>
          <li>
            <Link to={reactJSOrgPath}>Reactjs.org Tutorial</Link>
          </li>
          <li>
            <Link to={nasaPicOfTheDayPath}>Nasa Pic of the Day</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

function TutorialsHome() {
  return (
    <div>
      <h1>Tutorials Home Goes Here</h1>
    </div>
  );
}

const StyledTutorialsNav = styled(TutorialsNav)`
      background: rgb(239, 239, 239);
      height: 100vh;

      & ul {
        padding: 0;
        margin: 0;
      }
`;

const StyledTutorials = styled(Tutorials)`
  display: grid;
  grid-template-columns: 1fr 4fr;
`;

export default StyledTutorials;