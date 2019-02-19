import React, { Component } from 'react';


class UsersContainer extends Component {


  render() {
    console.log("inside shit",this.props.users.data[0].attributes)

      let usersList = this.props.users.data.map(user => <li key={user.id}>{user.attributes.username} <button onClick={() => this.props.showUserDetails(user.attributes)}> SEE Stats </button> <button onClick={() =>
      this.props.addTeamMember(user)}> Add to Team</button>    </li> )



    return (
    <React.Fragment>
  LIST OF FRIENDS GO HERE
      <ul>
        {usersList}
      </ul>
    </React.Fragment>

    );
  }

}

export default UsersContainer ;

// {/*  */}
