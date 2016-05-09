import axios from 'axios';
import ajaxHelpers from './ajaxHelpers'

module.exports = {
  signup (email, password, password_confirmation, afterSignupFxn) {
    if (this.loggedIn()) {
      if (afterSignupFxn) {
        afterSignupFxn(true)
      }
      return;
    }

    axios.post(ajaxHelpers.baseUrl + '/auth', {
      email: email,
      password: password,
      password_confirmation: password_confirmation
    })
    .then(function(response) {
      console.log("response is right here:", response);
      localStorage.uid = response.headers.uid;
      localStorage.accessToken = response.headers['access-token'];
      localStorage.client = response.headers.client;
      if (afterSignupFxn) {
        afterSignupFxn(true)
      }
    })
    .catch(function(response) {
      console.log("error here:", response);
      if (afterSignupFxn) {
        afterSignupFxn(false)
      }
    })
  },
  login(email, password, afterLoginFxn) {
    if (this.loggedIn()) {
      if (afterLoginFxn) {
        afterLoginFxn(true);
      }
      return;
    }

    axios.post(ajaxHelpers.baseUrl + '/auth/sign_in', {
      email: email,
      password: password
    })
    .then(function(response) {
      localStorage.uid = response.headers.uid;
      localStorage.accessToken = response.headers['access-token'];
      localStorage.client = response.headers.client;

      if (afterLoginFxn) {
        afterLoginFxn(true)
      }
    })
    .catch(function(response) {
      console.log("the error is here:", response);
      if (afterLoginFxn) {
        afterLoginFxn(false)
      }
    });
  },
  logout(afterLogoutFxn) {
    let uid = localStorage.uid;
    let client = localStorage.client;
    let token = localStorage.accessToken;

    axios.delete(ajaxHelpers.baseUrl + '/auth/sign_out', {
      headers: {
        'uid': uid,
        'client': client,
        'access-token': token
      }
    })
    .then(function(response) {
      delete localStorage.accessToken
      delete localStorage.uid
      delete localStorage.client

      if(afterLogoutFxn) {
        afterLogoutFxn(true)
      }
    })
    .catch(function(response) {
      console.log("there was an error:", response);
      if(afterLogoutFxn) {
        afterLogoutFxn(false)
      }
    }); 
  },
  loggedIn() {
  return (!!localStorage.uid && !!localStorage.accessToken && !!localStorage.client);
},
}
