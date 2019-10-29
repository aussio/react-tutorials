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
        <StyledNavLink to={homePath}>Home</StyledNavLink>
        <StyledNavLink to={tutorialProjectsPath}>Tutorial Projects</StyledNavLink>
      </nav>
    );
  }
}

const StyledMainNav = styled(MainNav)`
  display: flex;
  justify-content: flex-start;

  background: rgb(219, 112, 147);
`;

const StyledNavLink = styled(Link)`
  color: white;
  font-weight: bold;
  line-height: 3em;
  text-decoration: none;
  margin: 0em 2em;
`;

function Home() {
  return (
    <div className="Home">
      <h1>Home</h1>
    </div>
  );
}

export default App;