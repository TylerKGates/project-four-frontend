import React from 'react';
import NewLeaguePost from '../components/NewLeaguePostComp';
import ajaxHelpers from '../utils/ajaxHelpers';

const NewPostForm = React.createClass ({
  getInitialState: function() {
    return {
      title: '',
      body: '',
      author: '',
      category: '',
      like_count: 0
    }
  },
  handleTitle: function(e) {
    this.setState ({
      title: e.target.value
    })
    console.log("title value:", e.target.value);
  },
  handleBody: function(e) {
    this.setState ({
      body: e.target.value
    })
    console.log("body value:", e.target.value);
  },
  handleAuthor: function(e) {
    this.setState ({
      author: e.target.value
    })
    console.log("author value:", e.target.value);
  },
  handleCategory: function(e) {
    this.setState ({
      category: e.target.value
    })
    console.log("category value:", e.target.value);
  },
  handleSubmitPost: function(e) {
    this.setState ({
      title: this.state.title,
      body: this.state.body,
      author: this.state.author,
      category: this.state.category
    });
    let post = {
      title: this.state.title,
      body: this.state.body,
      author: this.state.author,
      category: this.state.category,
      like_count: 0
    }
    console.log("let post looks like:", post);
    ajaxHelpers.addPost(post, function(response) {
      console.log("hi, response looks like:", response);
    });
  },
  render: function() {
    return (
      <div>
        <h1> Create a New Post </h1>
        <NewLeaguePost
          onChangeTitle={this.handleTitle}
          onChangeBody={this.handleBody}
          onChangeAuthor={this.handleAuthor}
          onChangeCategory={this.handleCategory}
          addPost={this.handleSubmitPost}
         />
      </div>
    )
  }
})

export default NewPostForm;
