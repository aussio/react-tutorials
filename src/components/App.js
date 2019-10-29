import React from 'react';
import {
  Switch,
  Link,
  Route,
} from "react-router-dom";
import styled from 'styled-components';

import StyledTutorials from './Tutorials';

class App extends React.Component {

  homePath = "/"

  tutorialProjectsPath = "/tutorial-projects"

  render() {
    return (
      <div>
        <StyledMainNav
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
            render={() => <StyledTutorials pathPrefix={this.tutorialProjectsPath} />}
          />
        </Switch>
      </div>
    );
  }
}

class MainNav extends React.Component {

  render() {

    const { className } = this.props;
    const { homePath } = this.props;
    const { tutorialProjectsPath } = this.props;


    return (
      <nav className={className}>
        <ul>
          <li>
            <Link to={homePath}>Home</Link>
          </li>
          <li>
            <Link to={tutorialProjectsPath}>Tutorial Projects</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

const StyledMainNav = styled(MainNav)`
  background: rgb(219, 112, 147);

  & ul {
        padding: 0;
        margin: 0;
      }
`;

function Home() {
  return (
    <div className="Home">
      <h1>Home</h1>
    </div>
  );
}

export default App;