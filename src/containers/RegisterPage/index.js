import React from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';

import { authActions } from '../App/auth/actions';

class RegisterPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      name: '',
      password: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  async handleSubmit(e) {
    e.preventDefault();

    const { name, email, password } = this.state;
    this.props.register(email, name, password);
  }

  render() {
    const { name, email, password } = this.state;

    return (
      <div>
        <Helmet
          titleTemplate="Register"
          defaultTitle="Register"
        >
          <meta name="description" content="Register" />
        </Helmet>
        <h2>Register</h2>
        <form name="form" onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="email">
              Email
              <input type="text" name="email" value={email} onChange={this.handleChange} />
            </label>
            { !email && <div>Email is required</div> }
          </div>
          <div>
            <label htmlFor="name">
              Name
              <input type="text" name="name" value={name} onChange={this.handleChange} />
            </label>
            { !name && <div>Name is required</div> }
          </div>
          <div>
            <label htmlFor="password">
              Password
              <input type="password" name="password" value={password} onChange={this.handleChange} />
            </label>
            { !password && <div>Password is required</div> }
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
  register: (email, name, password) => dispatch(authActions.register(email, name, password))
});

export default connect(undefined, mapDispatchToProps)(RegisterPage);
