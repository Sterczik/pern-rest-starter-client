import React from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';

import { authActions } from '../App/auth/actions';

export class ChangePasswordPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      oldPassword: '',
      newPassword: '',
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
    const { oldPassword, newPassword } = this.state;

    if (oldPassword && newPassword) {
      this.props.changePassword(oldPassword, newPassword);
    }
  }

  render() {
    const { oldPassword, newPassword, submitted } = this.state;
    return (
      <div>
        <Helmet
          titleTemplate="Change Password Page"
          defaultTitle="Change Password Page"
        >
          <meta name="description" content="Change Password Page" />
        </Helmet>
        <div>
          <p>Change Password Page</p>
        </div>
        <form name="form" onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="oldPassword">
              oldPassword
              <input type="password" name="oldPassword" value={oldPassword} onChange={this.handleChange} />
            </label>
            { submitted && !oldPassword && <div>Old password is required</div> }
          </div>
          <div>
            <label htmlFor="newPassword">
              newPassword
              <input type="password" name="newPassword" value={newPassword} onChange={this.handleChange} />
            </label>
            { submitted && !newPassword && <div>New password is required</div> }
          </div>
          <div className="form-group">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  changePassword: (oldPassword, newPassword) => dispatch(authActions.changePassword(oldPassword, newPassword))
});

export default connect(undefined, mapDispatchToProps)(ChangePasswordPage);
