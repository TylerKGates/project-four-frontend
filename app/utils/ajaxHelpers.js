import axios from 'axios';

const helpers = {
  baseUrl: 'https://blooming-cove-32397.herokuapp.com/',

  getPosts: function() {
    return axios.get('https://blooming-cove-32397.herokuapp.com/posts.json')
  },
  deletePost: function(id) {
    return axios.delete('https://blooming-cove-32397.herokuapp.com/:id.json' )
  },
  addPost: function(post, afterAjaxFxn) {
    const uid = localStorage.uid;
    const accessToken = localStorage.accessToken;
    const client = localStorage.client;

    axios.post('https://blooming-cove-32397.herokuapp.com/posts.json',
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
