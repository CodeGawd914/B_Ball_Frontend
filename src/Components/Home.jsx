import React, { Component } from 'react';
import BballInfo from './BballInfo'
import { Header } from 'semantic-ui-react'
class Home extends Component {

  render() {
    return (
      <React.Fragment>

    <Header style={{"font-size": "28px"}} size='huge'>Welcome to BBall Courts</Header>

    {/*<BballInfo/>*/}
      </React.Fragment>
    );
  }

}

export default Home;
