import React from "react";
import { withRouter } from "react-router-dom";
import LoadingSpinner from "../loading/loading_spinner";

class RegisterForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      username: "",
      password: "",
      confPassword: "",
      firstName: "",
      lastName: "",
      location: "",
    };

    this.update = this.update.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (!prevProps.loggedIn && this.props.loggedIn) {
      this.props.history.push("/");
    }
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const {
      username,
      email,
      firstName,
      lastName,
      location,
      password,
      confPassword,
    } = this.state;
    let user = {
      email,
      username,
      firstName,
      lastName,
      location,
      password,
      confPassword,
    };

    this.props.register(user, this.props.history);
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`} className={error.name}>
            {error.message}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    const { loading } = this.props;
    const {
      email,
      firstName,
      lastName,
      password,
      confPassword,
    } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className="session-form">
      <h2>Sign Up</h2>
        <input
          type="email"
          value={email}
          onChange={this.update("email")}
          placeholder="Email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={this.update("password")}
          placeholder="Password"
          required
        />
        <input
          type="password"
          value={confPassword}
          onChange={this.update("confPassword")}
          placeholder="Confirm Password"
          required
        />
        <input
          type="text"
          value={firstName}
          onChange={this.update("firstName")}
          placeholder="First Name"
          required
        />
        <input
          type="text"
          value={lastName}
          onChange={this.update("lastName")}
          placeholder="Last Name"
          required
        />
        {loading ? (
          <LoadingSpinner />
        ) : (
          <button className="big-button" type="submit">
            Sign Up
          </button>
        )}
        {this.renderErrors()}
      </form>
    );
  }
}

export default withRouter(RegisterForm);
