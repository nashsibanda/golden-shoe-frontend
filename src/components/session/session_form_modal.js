import { Button, Modal } from "bootstrap";
import React, { Component } from "react";
import LoginFormContainer from "./login_form_container";
import RegisterFormContainer from "./register_form_container";

export default class SessionFormModal extends Component {
  constructor(props) {
    super(props)
  
    this.doNotPropagate = this.doNotPropagate.bind(this);
    this.getForm = this.getForm.bind(this);
  }
  
  getForm() {
    const { form, warning } = this.props;
    switch (form) {
      case "login":
        return <LoginFormContainer warning={warning} />;
      case "register":
        return <RegisterFormContainer />;
      default:
        return <LoginFormContainer warning={warning} />;
    }
  }

  doNotPropagate(e) {
    e.stopPropagation();
  }

  render() {
    const { show, toggleSessionFormModal } = this.props;
    return (
      show && (
        <div
          className="session-form-modal"
          onClick={toggleSessionFormModal}
        >
          <div className="session-form-container" onClick={this.doNotPropagate}>
            {this.getForm()}
          </div>
        </div>
      )
    );
  }
}
