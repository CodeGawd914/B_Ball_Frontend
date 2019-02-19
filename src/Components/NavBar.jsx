import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {Menu} from 'semantic-ui-react'
class NavBar extends Component {

  render() {
    return (

      <React.Fragment>
      { this.props.user === null
        ? (<Menu inverted fluid widths={3} >

        <Link to="/login">
          <Menu.Item color="red" name="Login" />
        </Link>

        <Link to="/signUP">
          <Menu.Item name="Sign Up"/>
        </Link>

        </Menu>)
        : (<Menu inverted fluid widths={10} >

        <Link to="/Locations">
          <Menu.Item color="" name="Locations" />
        </Link>

        <Link to="/NewTeam">
          <Menu.Item name="Create Team" />
        </Link>

        <Link to="/">
          <Menu.Item name="HighLights"/>
        </Link>

        <Link to="/bball">
          <Menu.Item name="Log Out" onClick={this.props.logOut}/>
        </Link>

        </Menu>)


      }

      </React.Fragment>

    );
  }

}

export default NavBar;
