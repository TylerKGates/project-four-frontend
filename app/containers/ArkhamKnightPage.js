import React from 'react';
import {Link} from 'react-router';

const ArkhamKnightPage = React.createClass({
  render: function() {
    let batLogo = 'http://static1.gamespot.com/uploads/screen_kubrick/104/1049837/2891179-batman-arkham_knight-review_nologo_20150618.jpg';

    let batStyle = {
      backgroundImage: 'url(' + batLogo + ')',
      backgroundSize: 'cover',
      width: '900px',
      height: '500px'
    }
    return (
      <div>
        <h1 style={batStyle}></h1>
        <div className='batNav'>
          <Link to='LeagueOfLegendsPage'>
            <h3>League Threads </h3>
          </Link>
          <Link to='CsGoPage'>
            <h3>CS:GO Threads </h3>
          </Link>
        </div>
      </div>
    );
  }
});

export default ArkhamKnightPage
