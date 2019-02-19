import React, { Component } from 'react';
import UsersContainer from './UsersContainer'
import CreateTeamForm from '../Components/CreateTeamForm'
import UserDetails from '../Components/UserDetail'

class NewTeam  extends Component {

  state = {
    teams: null,
    users: null,
    teamForm: false,
    userDetails: null,
    teamMembers: []
  }

  componentDidMount(){
    fetch('http://localhost:3000/teams')
    .then(res => res.json())
    .then(teams => this.setState({ teams },()=>
    this.fetchUsers()
  ))
  }

  fetchUsers=()=> {
    fetch('http://localhost:3000/users')
    .then(res => res.json())
    .then(users => this.setState({ users }))
  }


  addTeamMember=(user)=>{
    let teamMembers = [...this.state.teamMembers,user]
    console.log("team info", user, teamMembers)
    this.setState({
      teamMembers:teamMembers,
      teamForm:true
    }
      )

  }

  showUserDetails=(userInfo)=>{
    console.log("inside of showUserDetails",userInfo)
    this.state.userDetails === userInfo
      ? this.setState({userDetails: null})
      : this.setState({userDetails: userInfo})
  }

  render() {
    console.log("insider of therereer e", this.state.teamMembers)
    return (
      <div>
      {this.state.users === null

        ? null

        : <div style={{"display":"flex","width":"50%"}} className="scroller" position="right">
          <UsersContainer
            addTeamMember={this.addTeamMember}
            users={this.state.users}
            teams={this.state.teams}
            showUserDetails={this.showUserDetails}
            />
          </div>
      }

      {this.state.userDetails
        ? <UserDetails user={this.state.userDetails}/>
        : null

      }

      {this.state.teamForm
        ? <CreateTeamForm
          style={{"display":"flex","width":"50%"}}
          user={this.props.user}
          teams={this.state.teams}
          teamMembers={this.state.teamMembers}/>
        : null
      }





      </div>
    );
  }

}

export default NewTeam ;
