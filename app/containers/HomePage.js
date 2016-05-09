import React from 'react';
import {Link} from 'react-router';
import ajaxHelpers from '../utils/ajaxHelpers';
import SignInComp from '../components/SignInComp';
import SignUpComp from '../components/SignUpComp';
import auth from '../utils/auth';
import LogoutComp from '../components/LogoutComp'

const HomePage = React.createClass({
  contextTypes: {
  router: React.PropTypes.object.isRequired
  },
  getInitialState: function() {
    return {
      email: '',
      password: '',
      passwordConfirmation: '',
      error: false,
      successMsg: ''
    }
  },
  handleNewEmail: function(e) {
    this.setState ({
      email: e.target.value
    })
    console.log("email is:", e.target.value);
  },
  handleNewPassword: function(e) {
    this.setState ({
      password: e.target.value
    })
  },
  handlePasswordConfirmation: function(e) {
    this.setState ({
      passwordConfirmation: e.target.value
    })
  },
  handleSignup() {
    let callbackAfterSignup = function(success) {
      if (!success) {
        console.log("there was an error dude");
        return this.setState({ error: true });
      } else {
        this.props.history.push('/');
      }
    }.bind(this);
    auth.signup(this.state.email, this.state.password, this.state.passwordConfirmation, callbackAfterSignup);
  },
  handleEmail: function(e) {
    this.setState ({
      email: e.target.value
    })
    console.log("email is:", e.target.value);
  },
  handlePass: function(e) {
    this.setState ({
      password: e.target.value
    })
  },
  handleLogin: function() {
    var callbackAfterLogin = function(success) {
      if (!success) {
        console.log("error in callbackAfterLogin");
        return this.setState({ error: true })
      } else {
        this.setState({ successMsg: "it worked dood, ur signed in!!" });
      }
    }.bind(this);
    auth.login(this.state.email, this.state.password, callbackAfterLogin);
  },
  handleLogout: function() {
    var callbackAfterLogout = function(success) {
      if(success) {
        this.setState({ successMsg: "successfully logged out :p" });
      }
    }.bind(this);
    auth.logout(callbackAfterLogout)
  },

  render: function() {

    let styles = {
      main: {
        color: '#333',
        textDecoration: 'none',
        fontFamily: 'sans-serif',
      },
      title: {
        textAlign: 'center'
      },
      button: {
        backgroundColor: 'blue'
      },
      button: {
        color: '#fff',
        padding: '20px',
        backgroundColor: 'deepPink',
        border: 0,
        borderRadius: '10px',
        margin: '5px'

      },
      buttonContainer: {
        display: 'flex',
        justifyContent: 'center'
      }
    }

    return (
      <div style={styles.main}>

        <div style={styles.title}>
          <h1>GAMING FORUM</h1>
        </div>

        <div className="threadLinks" style={styles.buttonContainer}>
          <Link to='LeagueOfLegendsPage'>
            <button style={styles.button}>League Threads</button>
          </Link>
          <br />
          <Link to='CsGoPage'>
            <button style={styles.button}>CS:GO Threads</button>
          </Link>
          <br />
          <Link to='ArkhamKnightPage'>
            <button style={styles.button}>Arkham Knight Threads</button>
          </Link>
        </div>

        <SignInComp
          onChangeEmail={this.handleEmail}
          onChangePass={this.handlePass}
          onSubmit={this.handleLogin}
          />
        <SignUpComp
          onChangeEmail={this.handleNewEmail}
          onChangePass={this.handleNewPassword}
          onChangePassCon={this.handlePasswordConfirmation}
          onSubmit={this.handleSignup}
          onLogout={this.handleLogout}
          />
        <LogoutComp
          onLogout={this.handleLogout}
          />
      </div>
    );
  }
});

export default HomePage;
