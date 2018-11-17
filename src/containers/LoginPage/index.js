import React from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';

import { userActions } from './actions';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    // this.props.dispatch(userActions.logout());

    this.state = {
      email: '',
      password: '',
      submitted: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.setState({ submitted: true });
    const { email, password } = this.state;

    if (email && password) {
      this.props.login(email, password);
    }
  }

  render() {
    const { email, password, submitted } = this.state;
    return (
      <div>
        <Helmet
          titleTemplate="Login"
          defaultTitle="Login"
        >
          <meta name="description" content="Login" />
        </Helmet>
        <h2>Login</h2>
        <form name="form" onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="email">
              Email
              <input type="text" name="email" value={email} onChange={this.handleChange} />
            </label>
            { submitted && !email && <div>Email is required</div> }
          </div>
          <div>
            <label htmlFor="password">
              Password
              <input type="password" name="password" value={password} onChange={this.handleChange} />
            </label>
            { submitted && !password && <div>Password is required</div> }
          </div>
          <div className="form-group">
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  login: (email, password) => dispatch(userActions.login(email, password))
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
