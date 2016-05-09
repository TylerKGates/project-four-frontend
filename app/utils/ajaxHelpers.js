import axios from 'axios';

const helpers = {
  baseUrl: 'http://localhost:3000',

  getPosts: function() {
    return axios.get('http://localhost:3000/posts.json')
  },
  deletePost: function(id) {
    return axios.delete('http://localhost:3000/:id.json' )
  },
  addPost: function(post, afterAjaxFxn) {
    const uid = localStorage.uid;
    const accessToken = localStorage.accessToken;
    const client = localStorage.client;

    axios.post('http://localhost:3000/posts.json',
      post,
    {
      headers: {
        'uid': uid,
        'access-token': accessToken,
        'client': client
      }
    })
    .then(function(response) {
      console.log("success, response here:", response);
      if (afterAjaxFxn) {
        afterAjaxFxn(response.data)
      }
    });
  }
};

export default helpers;
