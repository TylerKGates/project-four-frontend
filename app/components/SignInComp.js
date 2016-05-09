import React from 'react';
import {Link} from 'react-router';
import auth from '../utils/auth';
import SignUpComp from './SignUpComp';

const SignInComp = React.createClass({
  render: function() {
    const isLoggedIn = auth.loggedIn();

    if (isLoggedIn) {
      return (
        <div>
        </div>
      )
    }
    return (
      <div>
          <h1> Signin Comp </h1>
          <h3>Existing Account</h3>
          <input
            placeholder="Email"
            type="text"
            onChange={this.props.onChangeEmail}
            />
          <br /> <br />
          <input
            placeholder="Password"
            type="password"
            onChange={this.props.onChangePass}
            />
          <br /> <br />
          <button onClick={this.props.onSubmit}>Sign In</button>
      </div>
    );
  }
});

export default SignInComp;
