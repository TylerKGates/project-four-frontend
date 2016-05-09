import React from 'react';
import ajaxHelpers from '../utils/ajaxHelpers';
import {Link} from 'react-router';

const NewLeaguePost = React.createClass ({
  render: function() {
    let textArea = {
      width: '400px',
      height: '120px',
      border:'3px solid #cccccc',
    }
    let titleArea = {
      width: '400px',
      height: '20px',
      border: '3px solid #cccccc'
    }
    return (
      <div>
        <input style={titleArea}
          className=""
          placeholder="Title"
          onChange={this.props.onChangeTitle}
          type="text"
          />
        <br /> <br />
        <input style={titleArea}
          className=""
          placeholder="Author"
          onChange={this.props.onChangeAuthor}
          type="text"
          />
        <br /> <br />
        <input style={titleArea}
          className=""
          placeholder="Category"
          onChange={this.props.onChangeCategory}
          type="text"
          />
        <br /> <br />
        <textarea style={textArea}
          className=""
          placeholder="Body"
          onChange={this.props.onChangeBody}
          type="text"
          />
        <br /> <br />
        <Link to='LeagueOfLegendsPage'>
          <button onClick={this.props.addPost}>Submit</button>
        </Link>
      </div>
    )
  }
})

export default NewLeaguePost;
