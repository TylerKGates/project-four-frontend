import React from 'react';
import {Link} from 'react-router';

const CsGoPage = React.createClass({
  render: function() {
    let csgoLogo = 'http://media.steampowered.com/apps/valvestore/images/slider/store_image_02.png';

    let csgoStyle = {
      backgroundImage: 'url(' + csgoLogo + ')',
      backgroundSize: 'cover',
      width: '950px',
      height: '600px'
    }
    return (
      <div>
        <h1 style={csgoStyle}></h1>
        <div className='csgoNav'>
          <Link to='LeagueOfLegendsPage'>
            <h3>League of Legends Threads</h3>
          </Link>
          <Link to='ArkhamKnightPage'>
            <h3>Batman Threads</h3>
          </Link>
        </div>
      </div>
    );
  }
});

export default CsGoPage;
