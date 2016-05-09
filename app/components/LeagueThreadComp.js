import React from 'react';
import {Link} from 'react-router';
import axios from 'axios';

const LeagueThread = React.createClass({
  getInitialState: function() {
    return {
      ArrOfId: []
    }
  },
  mapForID: function() {
    console.log("hi i am running");
    this.props.posts.map((posts, index) => {
      return posts.id
      console.log("posts.id:", posts.id);
    });
    this.setState ({
      id: posts.id
    })
    console.log("some ids for u:", id);
  },
  deletePost: function(id) {
    this.mapForID()
    console.log("deleting post! :p");
    return axios.delete('http://localhost:3000/posts' + id)
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
      addNewButton: {
        color: '#fff',
        padding: '20px',
        backgroundColor: 'deepPink',
        border: 0,
        borderRadius: '10px',
        margin: '5px',
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
      },
      imageStyle: {
        backgroundImage: 'url(http://b68389.medialib.glogster.com/media/82d078b90fcb74620555b2422fd2eee3e7e39c82c03ce69d5ef6d8517c3ea1d1/league-of-legends-logo.png)',
        backgroundSize: 'contain',
        width: '500px',
        backgroundRepeat: 'no-repeat',
        height: '180px',
        margin: 'auto',
      },
      postStyle: {
        textAlign: 'center',
        backgroundColor: 'rgba(0,0,0,0.3)',
        border: '1px solid black',
        borderRadius: '30px',
        listStyleType: 'none',
      }
    }
    console.log("this.props is :", this.props.posts);
    return (
      <div>
      <Link to='NewPostForm'>
        <button style={styles.addNewButton}>Add New Post</button>
      </Link>
        <ul style={styles.postStyle}>
          {
            this.props.posts.map((posts, index) => {
              return <li key={posts.id}>
                <h3>Title: {posts.title}</h3>
                <h3>Author: {posts.author}</h3>
                <h3>Body: {posts.body}</h3>
                <hr />
              </li>
            })
          }
        </ul>
      </div>
    );
  }
});

export default LeagueThread;
