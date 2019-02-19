import React from 'react'
import { Button, Form, Segment, Dropdown } from 'semantic-ui-react'


class CreateTeamForm extends React.Component {

  state = {
    teamName: "Pick a team",
    newTeam: false,
    player1: this.props.user,
    player2: this.props.teamMembers[1],
    player3: this.props.teamMembers[2],
    player4: this.props.teamMembers[3],
    player5: this.props.teamMembers[4],
    player6: this.props.teamMembers[5],
    player7: this.props.teamMembers[6],
    player8: this.props.teamMembers[7]

  }

  handleChange=(e)=>{
    console.log("INSIDE CHANGE", e.target.name);
    if(e.target.name === "add-new-team"){
      this.setState({
        newTeam: true,
        [e.target.name]: e.target.value
      })
    } else {

      this.setState({
        [e.target.name]: e.target.value
      })
    }

  }

  render() {
    console.log("chicken", this.state)

    console.log("pizza",this.props.teams);
    let list = this.props.teams.data.map(team => <option
        team={team}
        name={team.attributes.name}
        color="red"
        value={team.attributes.name}
       onChange={(e) => this.handleChange(e)}>{team.attributes.name}</option>)
    console.log("lister", list)


    return (
      <Segment inverted>
        <Form inverted>
          <Form.Group widths='equal'>
            <select
              value={this.state.teamName}
              onChange={(e) => this.handleChange(e)}>
              {list}
              <option
              value="add-new-team"
              >add new team </option>
            </select>

            { this.props.newTeam === true
              ? <Form.Input
                fluid label='New team name'
                placeholder='Create New Team'
                value={this.state.newTeam}
                name="newTeam"
                />

              : null

            }


            <Form.Input
              fluid label='Player 1'
              placeholder='Player 1'
              value={this.state.player1.username}
              name="player1"
              />

              {  this.props.teamMembers[1]
                    ? <Form.Input
                      fluid label='Player 2'
                      placeholder='Player 2'
                      value={this.props.teamMembers[1].attributes.username}
                      name="player2"
                       />
                    : null
                }

              {  this.props.teamMembers[2]
                    ? <Form.Input
                      fluid label='Player 3'
                      placeholder='Player 3'
                      value={this.props.teamMembers[2].attributes.username}
                      name="player3"
                      />
                   : null
                }
              {  this.props.teamMembers[3]
                    ? <Form.Input
                      fluid label='Player 4'
                      placeholder='Player 4'
                      value={this.props.teamMembers[3].attributes.username}
                      name="player4"
                      />
                    : null
                }

              {  this.props.teamMembers[4]
                    ? <Form.Input
                      fluid label='Player 5'
                      placeholder='Player 5'
                      value={this.props.teamMembers[4].attributes.username}
                      name="player5"
                      />
                   : null
                }

              {  this.props.teamMembers[5]
                    ? <Form.Input
                      fluid label='Player 6'
                      placeholder='Player 6'
                      value={this.props.teamMembers[5].attributes.username}
                      name="player6"
                      />
                    : null
                }

              {  this.props.teamMembers[6]
                    ? <Form.Input
                      fluid label='Player 7'
                      placeholder='Player 7'
                      value={this.props.teamMembers[6].attributes.username}
                      name="player7"
                      />
                   : null
                }
                {  this.props.teamMembers[7]
                      ? <Form.Input
                        fluid label='Player 8'
                        placeholder='Player 8'
                        value={this.props.teamMembers[7].attributes.username}
                        name="player8"
                        />
                      : null
                  }





          </Form.Group>
          <Form.Checkbox label='I agree to the Terms and Conditions' />
          <Button style={{"color":"red"}} type='submit'>Submit</Button>
        </Form>
      </Segment>
    );
  }

}

export default CreateTeamForm;


{/* <Form.Input
  fluid label='Player 3' placeholder='Player 3' />
<Form.Input
  fluid label='Player 4' placeholder='Player 4' />
<Form.Input
  fluid label='Player 5' placeholder='Player 5' />
<Form.Input
  fluid label='Player 6' placeholder='Player 6' />
<Form.Input
  fluid label='Player 7' placeholder='Player 7' />
<Form.Input
  fluid label='Player 8' placeholder='Player 8' /> */}



// import React from 'react'
// import { Dropdown } from 'semantic-ui-react'
//
// import { friendOptions } from '../common'
// friendOptions = [
//   {
//     text: 'Jenny Hess',
//     value: 'Jenny Hess',
//     image: { avatar: true, src: '/images/avatar/small/jenny.jpg' },
//   },
//  ...
// ]
//
// const DropdownExampleSelection = () => (
//
// )
//
// export default DropdownExampleSelection
