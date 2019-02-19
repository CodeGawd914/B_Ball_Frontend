import React, { Component } from 'react';

class UserDetail extends Component {

  render() {
    console.log("inside user detail",this.props.user)
    return (
      <div>
        Name:{this.props.user.username}<br></br>
        Wins:{this.props.user.wins}<br></br>
        Losses:{this.props.user.losses}<br></br>
        Last Game:{this.props.user["last-game"]}<br></br>
      </div>
    );
  }

}

export default UserDetail;
