import React, {Component} from 'react'
import {Grid,Card, Icon, Image, List } from 'semantic-ui-react'

class Places extends Component {


  render(){
    const url= this.props.venues.map(venue => venue.categories["0"].icon.prefix+venue.categories["0"].icon.suffix)
    console.log(url);
    const list = this.props.venues.map((venue,i)=>  <Card>
      <Image src={url}/>
      <Card.Content>
        <Card.Header>{venue.name}</Card.Header>
        <Card.Meta>
          <span className='date'>Joined in 2015</span>
        </Card.Meta>
        <Card.Description>Matthew is a musician living in Nashville.</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name='user' />
          22 Friends
        </a>
      </Card.Content>
    </Card>)

    return (

      <Grid columns='equal' divided>
          <Grid.Row>
            <Grid.Column>
              {list}
            </Grid.Column>
          </Grid.Row>
        </Grid>


    )
  }

}




export default Places
