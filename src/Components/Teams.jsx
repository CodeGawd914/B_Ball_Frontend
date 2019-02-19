import React, { Component } from 'react';

class Teams extends Component {




  render() {
    console.log("chicken1",this.props.user);

    // const ids = this.props.user.teams.map(team => team.id)
    //
    // console.log("user", this.props.user)
    // console.log("team",this.props.teams)
    // let list = this.props.teams.data.filter(
    //   team => ids.includes(team.id))
    //   let teamList = list.map(team => <li key={team.attributes.name}>{team.attributes.name}</li>)
    //  console.log("check list" )


    return (
      <div>
      <h2>Teams you have joined</h2>
      <ul>

      </ul>

      </div>
    );
  }

}

export default Teams;
