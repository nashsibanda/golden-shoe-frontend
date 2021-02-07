import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import { Route, Switch } from 'react-router-dom';
import SiteNavContainer from './header/sitenav_container';
import CarouselContainer from './homepage/carousel_container';
// import logo from './logo.svg';
// import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <SiteNavContainer />
      </header>
      <main>
        <Switch>
          {/* <AuthRoute exact path="/login" component={LoginFormContainer} />
          <AuthRoute exact path="/register" component={RegisterFormContainer} />
          <Route
            exact
            path="/releases/:releaseId"
            component={ReleaseShowContainer}
          />
          <Route
            exact
            path="/personnel/:personnelId"
            component={PersonnelShowContainer}
          />
          <Route
            exact
            path="/releases"
            component={MainReleaseCatalogueContainer}
          /> */}
          <Route
            exact
            path="/"
            render={props => (
              <CarouselContainer
                loggedIn={props.loggedIn}
                user={props.user}
              />
            )}
          />
        </Switch>
      </main>
    </div>
  );
}

export default App;
