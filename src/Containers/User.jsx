import React, { Component } from 'react';
import Teams from '../Components/Teams'
import {Redirect} from 'react-router-dom'
import {Segment, Image} from 'semantic-ui-react'

class User extends Component {


state = {
  teams: null,
}

componentDidMount(){
  fetch('http://localhost:3000/teams')
  .then(res => res.json())
  .then(teams => this.setState({ teams }))

}

  render() {
    console.log("test3", this.props.user);
    return (


      <React.Fragment>

      {this.props.user === null
        ? null
        : <Segment>
        <Image src={this.props.user.avatar} size='medium' centered />
        <p>
          Welcome Back  {this.props.user.username}
        </p>
        <p>
        Wins:{this.props.user.wins}<br></br>
        Losses:{this.props.user.losses}
        </p>
        <p>
        {this.state.teams === null
          ? null
          : <div>
          <Teams
          user={this.props.user}
          teams={this.state.teams}
          />
          </div>
        }
        </p>
      </Segment>

      }
      </React.Fragment>
    );
  }

}

export default User;
