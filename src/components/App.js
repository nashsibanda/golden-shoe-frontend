import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import SiteNavContainer from './header/sitenav_container';
import CarouselContainer from './homepage/carousel_container';
import Chat from './support/chatbot'
import SessionFormModalContainer from "./session/session_form_modal_container";
import { logout, toggleSessionFormModal } from '../actions/session_actions';
import { connect } from 'react-redux';
import "./util/fontawesome_library"
import ProductsListContainer from './products/products_list_container';
// import logo from './logo.svg';
// import './App.css';

const App = props => {
  const [sessionForm, setSessionForm] = useState("login");

  const logoutUser = e => {
    e.preventDefault();
    props.logout();
  };

  const openSessionForm = sessionForm => {
    return e => {
      setSessionForm(sessionForm);
      props.toggleSessionFormModal();
    };
  };

  return (
    <div className="App">
      <header>
        <SiteNavContainer
          loggedIn={props.loggedIn}
          user={props.user}
          openSessionForm={openSessionForm}
          logoutUser={logoutUser}
        />
      </header>
      <main>
        <SessionFormModalContainer form={sessionForm} />
        <Switch>
          {/* <AuthRoute exact path="/login" component={LoginFormContainer} />
          <AuthRoute exact path="/register" component={RegisterFormContainer} />
          <Route
            exact
            path="/releases/:releaseId"
            component={ReleaseShowContainer}
          /> */}
          <Route
            exact
            path="/store"
            component={ProductsListContainer}
          />
          <Route exact path="/support/chat" component={Chat} />
          <Route
            exact
            path="/"
            render={props => (
              <CarouselContainer loggedIn={props.loggedIn} user={props.user} />
            )}
          />
        </Switch>
      </main>
    </div>
  );
};

const mapStateToProps = state => ({
  loggedIn: state.session.isAuthenticated,
  user: state.session.user,
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  toggleSessionFormModal: () => dispatch(toggleSessionFormModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
