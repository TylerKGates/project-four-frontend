import React from 'react';
import {Link} from 'react-router';
import ajaxHelpers from '../utils/ajaxHelpers';
import LeagueThreadComp from '../components/LeagueThreadComp'

const LeagueOfLegendsPage = React.createClass({

  getInitialState: function() {
    return {
        posts: []
      }
    },

  componentDidMount: function() {
    ajaxHelpers.getPosts()
    .then(function(response) {
      this.setState({
        posts: response.data
      });
    }.bind(this))
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
      },
      imageStyle: {
        backgroundImage: 'url(http://b68389.medialib.glogster.com/media/82d078b90fcb74620555b2422fd2eee3e7e39c82c03ce69d5ef6d8517c3ea1d1/league-of-legends-logo.png)',
        backgroundSize: 'contain',
        width: '500px',
        backgroundRepeat: 'no-repeat',
        height: '180px',
        margin: 'auto',
      }
    }

    let leagueLogo = '';


    return (
      <div style={styles.main}>
        <div style={styles.imageStyle} />

        <div className='leagueNav' style={styles.buttonContainer}>
          <Link to='ArkhamKnightPage'>
            <button style={styles.button}>Batman Threads</button>
          </Link>
          <Link to='CsGoPage'>
            <button style={styles.button}>CS:GO Threads</button>
          </Link>
        </div>
      <LeagueThreadComp posts={this.state.posts} />
      </div>
    );
  }
});

export default LeagueOfLegendsPage;
