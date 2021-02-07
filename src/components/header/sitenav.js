import {
  Button,
  Form,
  FormControl,
  Image,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";

import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class SiteNav extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }
  
  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#">
          <Image src="icon-192x192.png" /> Golden Shoe
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#store">Store</Nav.Link>
            <NavDropdown title="Support" id="basic-nav-dropdown">
              <NavDropdown.Item href="#support/chat">
                Chat to our Chatbot!
              </NavDropdown.Item>
              <NavDropdown.Item href="#support/email">
                Send us an email
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#support/phone">
                Give us a ring
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav className="mr-0">
            {this.props.loggedIn ? (
              <>
                <Button className="nav-button" to={`/profile`}>
                  <FontAwesomeIcon icon="user" />
                  <span>Profile</span>
                </Button>
                <Button className="nav-button" onClick={this.props.logoutUser}>
                  <FontAwesomeIcon icon="sign-out-alt" />
                  <span>Log Out</span>
                </Button>
              </>
            ) : (
              <>
                <Button onClick={this.props.openSessionForm("register")}>
                  <FontAwesomeIcon icon="user-plus" />
                  <span>Register</span>
                </Button>
                <Button
                  onClick={this.props.openSessionForm("login")}
                >
                  <FontAwesomeIcon icon="sign-in-alt" />
                  <span>Log In</span>
                </Button>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default withRouter(SiteNav);