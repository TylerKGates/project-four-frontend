import React from 'react';
import auth from '../utils/auth';


const LogoutComp = React.createClass({
  render: function() {
    const isLoggedIn = auth.loggedIn();

    if (isLoggedIn) {
      return (
        <div>
          <button onClick={this.props.onLogout}>Logout</button>
        </div>
      )
    }
    return (
      <div></div>
    )
  }
})

export default LogoutComp;
