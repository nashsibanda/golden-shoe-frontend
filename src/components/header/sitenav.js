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

class SiteNav extends Component {
  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#"><Image src="icon-192x192.png" /> Golden Shoe</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#store">Store</Nav.Link>
            <NavDropdown title="Support" id="basic-nav-dropdown">
              <NavDropdown.Item href="#support/chat">Chat to our Chatbot!</NavDropdown.Item>
              <NavDropdown.Item href="#support/email">
                Send us an email
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#support/phone">Give us a ring</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default withRouter(SiteNav);