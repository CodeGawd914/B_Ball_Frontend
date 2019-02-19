import React, { Component } from 'react';
// import video from '../vids/Background.mp4'

class BballInfo extends Component {

  render() {
    return (
      <video className="myVideo" loop autoPlay muted >
        <source src={video} type="video/mp4"/>
        <source src={video} type="video/ogg"/>
        Your browser does not support the video tag.
      </video>

    );
  }

}

export default BballInfo;
