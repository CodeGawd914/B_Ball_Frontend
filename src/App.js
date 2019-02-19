import React, { Component } from 'react';
import './App.css';
import {Route,Switch, withRouter} from 'react-router-dom'
import Home from './Components/Home'
import Login from './Components/Login'
import SignUp from './Components/SignUp'
import User from './Containers/User'
import NavBar from './Components/NavBar'
import NewTeam from './Containers/NewTeam'
import Locations from './Containers/Locations'

class App extends Component {

  state={
    user: null,
    currentLocation: {
      lat: "",
      lng: ""
    }
  }

  componentDidMount(){
    this.getCurrentLocation()
    if(localStorage.getItem("token")){
      console.log('check ')
      let token = localStorage.getItem("token")
      fetch('http://localhost:3000/profile',{
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Action: "application/json",
          Authorization: `${token}`
        }
      })
      .then(resp => resp.json())
      .then(resp => this.setState({
        user: resp.user
      }))
    }

  }

getCurrentLocation=()=> {

  if (navigator && navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(pos => {
      const coords = pos.coords;
      this.setState({
        currentLocation: {
          lat: coords.latitude,
          lng: coords.longitude
        }
      });
    });
  }

}



  //   console.log("test")
  //   {
  //
  //     ', {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json",
  //
  //
  //       }
  //     })
  // }


  createUser =(newUser)=> {


    fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        user: {
          username: newUser.username,
          password: newUser.password,
          avatar: newUser.avatar
        }
      })
    })
    .then(r => r.json())
    .then(resp => {
      localStorage.setItem("token",resp.jwt);
      this.setState({
        user: resp.user
    })
  })

  }

  logOut =()=> {
    localStorage.removeItem("token")
    this.setState({
      user: null
    })
  }

  getUser =(newUser)=> {


    fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        user: {
          username: newUser.loginUsername,
          password: newUser.loginPassword
        }
      })
    })
    .then(r => r.json())
    .then(resp => {
      localStorage.setItem("token",resp.jwt);
      this.setState({
        user: resp.user
    })
  })

  }

  handleSignUpSubmit =(e,newUser)=> {
    e.preventDefault()
  this.createUser(newUser)
  this.props.history.push('/userMain')


  }

  loginSubmitHandler =(e,newUser)=> {
    e.preventDefault()
    this.getUser(newUser)
    this.props.history.push('/userMain')


  }

  render() {

    return (
      <div>
      <NavBar user={this.state.user} logOut={this.logOut}/>
      <Switch>
      <Route exact path="/Locations" render={() => <Locations
        center={this.state.currentLocation}
        />}/>
      <Route exaxt path="/NewTeam" render={() => <NewTeam user={this.state.user}/>}/>
      <Route exact path="/bball" component={Home}/>
      <Route exact path="/login" render={() => <Login loginSubmitHandler={this.loginSubmitHandler}/>}/>
      <Route exact path="/signUP" render={() => <SignUp handleSignUpSubmit={this.handleSignUpSubmit}/>}/>
      <Route exact path="/userMain" render={()=>
         <User
         user={this.state.user}
        />}/>

      </Switch>
      </div>
    );
  }
}

export default withRouter(App);
