import React from 'react';
import auth from '../utils/auth';
import SignInComp from './SignInComp';


const SignUpComp = React.createClass ({
  render: function() {
    const isLoggedIn = auth.loggedIn();

    if (isLoggedIn) {
      return (
        <div>
          <p>logged in :p</p>
        </div>
      )
    }
    return (
      <div>
        <h3>New? Sign up!</h3>
        <input
          placeholder="Email"
          type="text"
          onChange={this.props.onChangeEmail}
         />
        <br />
        <input
          placeholder="Password"
          type="password"
          onChange={this.props.onChangePass}
          />
        <br />
        <input
          placeholder="Confirm Password"
          type="password"
          onChange={this.props.onChangePassCon}
          />
        <br />
        <button onClick={this.props.onSubmit}>Sign Up!</button>
      </div>
    )
  }
})

export default SignUpComp;
