import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'

const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
]

class SignUp extends Component {
  state = {
    username: "",
    password:"",
    avatar:""
  }

  handleChange = (e) => this.setState({
    [e.target.name]: e.target.value
    })

  render() {
    console.log(this.state)
    const { value } = this.state
    return (
      <Form
      onSubmit={(e) => this.props.handleSignUpSubmit(e,this.state)}>
        <Form.Group widths='equal'>
          <Form.Input
          fluid label='First name' placeholder='First name'
          name="username"
          value={this.state.username}
          onChange={(e) => this.handleChange(e)}/>
          <Form.Input
          fluid label='Password' placeholder='Password'
          name="password"
          type="password"
          value={this.state.password}
          onChange={(e) => this.handleChange(e)}
          />
          <Form.Input
          fluid label='Profile Pic' placeholder='Img url please'
          name="avatar"
          value={this.state.avatar}
          onChange={(e) => this.handleChange(e)}
          />
          <Form.Select fluid
           label='Gender' options={options} placeholder='Gender' />
        </Form.Group>
        <Form.Checkbox label='I agree to the Terms and Conditions' />
        <Form.Button>Submit</Form.Button>
      </Form>
    )
  }
}

export default SignUp
