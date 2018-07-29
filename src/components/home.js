import React, { Component } from 'react';

import Header from './header';
import Card from './card';

 class Home extends Component {
  render() {
    return (
      <div className="home">
        { Header() }
        <Card />
      </div>
    );
  }
}

// things to fix
// place holder
// gray and green num labels
// content labels
// generate button space / card height

export default Home;