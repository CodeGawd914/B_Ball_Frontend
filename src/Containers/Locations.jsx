import React, { Component } from 'react';
import Places from '../Components/Places'
import CurrentLocation from '../Components/CurrentLocation'
import superagent from 'superagent'
import {Map,InfoWindow,Marker,GoogleApiWrapper} from 'google-maps-react'
import { Grid } from 'semantic-ui-react'
import {peanuts} from "../config.js"


  export class Location extends Component {

    state = {
      showingInfoWindow: false,  //Hides or the shows the infoWindow
      activeMarker: {},          //Shows the active marker upon click
      selectedPlace: {},         //Shows the infoWindow to the selected place upon a marker
      venues: [],
      markerObjects: [],
      centerLat: this.props.center.lat,
      centerLng: this.props.center.lng

    };

    componentDidMount(){

      const url = `https://api.foursquare.com/v2/venues/search?&ll=${this.state.centerLat},${this.state.centerLng}&client_id=${peanuts.FourSquareId}&client_secret=${peanuts.FOUR_SQUARE_SECRET}&v=20181212`

      superagent
      .get(url)
      .query(null)
      .set('Accept','text/json')
      .end((error, response) => {

        const venues = response.body.response.venues
        this.setState({venues})
      })
    }
    getSomeLocation=()=>{
        console.log(this.state);
            const url = `https://api.foursquare.com/v2/venues/search?basketball&ll=${this.state.centerLat},${this.state.centerLng}&client_id=${peanuts.FourSquareId}&client_secret=${peanuts.FOUR_SQUARE_SECRET}&v=20181212`

            superagent
            .get(url)
            .query(null)
            .set('Accept','text/json')
            .end((error, response) => {

              const venues = response.body.response.venues
              this.setState({venues})
            })
    }

    centerMoved=(mapProps,map,cord)=>{
      console.log("mapMOVED",mapProps)
      console.log("map",map.getCenter().lat())
      console.log("cord", cord);

      this.setState({
          centerLat: map.getCenter().lat(),
          centerLng: map.getCenter().lng()
      },()=> this.getSomeLocation())
    }

    onMarkerClick = (props, marker, e) => {
      this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true
      })
    }

    onClose = props => {
      if(this.state.showingInfoWindow) {
        this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }

    }

    // getVenues=()=>{
    //   // let venueMarkers = this.state.venues.map(venue => <Marker
    //   // key={venue.id}
    //   // onClick={this.onMarkerClick}
    //   // title={venue.name}
    //   // name={venue.name}
    //   // position={{lat: venue.lat, lng: venue.lng}} />)
    //
    //    let venueMarkers = this.state.venues.map(eachVenue =>{
    //     return <Marker
    //     key={eachVenue.id}
    //      onClick={this.onMarkerClick}
    //     title={eachVenue.name}
    //     name={eachVenue.name}
    //     position={{lat: eachVenue.location.lat, lng: eachVenue.location.lng}} />
    //   })
    //   console.log(venueMarkers[0]);
    //   return venueMarkers
    // }
    markers = () => {
      console.log("STATE", this.state.venues)
      //
      return this.state.venues.map(venue => {
        return <Marker
            key={venue.id}
            onClick={this.onMarkerClick}
            title={venue.name}
            name={venue.name}
            position={{lat: venue.location.lat, lng: venue.location.lng}}
            />
      })

      // return <Marker
      //   key={this.state.venues[0].id}
      //   onClick={this.onMarkerClick}
      //   title={this.state.venues[0].name}
      //   name={this.state.venues[0].name}
      //   position={{lat: 40.75768883549578, lng: -73.98883631344103}}
      //   />

      // return this.state.venues.map(venue => <Marker
      //   key={venue.id}
      //   onClick={this.onMarkerClick}
      //   title={venue.name}
      //   name={venue.name}
      //   position={{lat: venue.location.lat, lng: venue.location.lng}}
      //   />)


    }

  render() {
    console.log(this.props.google)
    const style ={
      width: '100%',
      height: '100%'
    }




    // let venueMarkers = this.state.venues.map(venue => <Marker
    // key={venue.id}
    // onClick={this.onMarkerClick}
    // title={venue.name}
    // name={venue.name}
    // position={{lat: venue.lat, lng: venue.lng}} />)

    return (

      <div style={style} className="location-page">
      <Grid columns={2} padded>
        <Grid.Column style={{"display":"grid"}}>
          <div>
            <Places venues={this.state.venues}/>
          </div>
        </Grid.Column>
        <Grid.Column

        google={this.props.google}>
        <div >
          <Map
            style={{"height":"15%", "width":"75%"}}
            google={this.props.google}
            initialCenter={this.props.center}
            zoom={20}
            onDragend={this.centerMoved}
          >
          <Marker
          onClick={this.onMarkerClick}
          name={'current location'} />


          {this.state.venues ? this.markers() : null}

          <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
          >
          <div>
          <h4>{this.state.selectedPlace.name}</h4>
          </div>
          </InfoWindow>
          </Map>
        </div>

        </Grid.Column>
      </Grid>






      </div>


    );
  }
}

export default GoogleApiWrapper({
  apiKey: (peanuts.GOOGLE_API_KEY)
})(Location)

//
// <CurrentLocation
//     centerAroundCurrentLocation
//     google={this.props.google}
//     onClick={(e)=> console.log(e) }
//     >
//     {console.log("inside currentLocation",this.google)}
//
// </CurrentLocation>






// <GoogleMapLoader
//   containerElement = {mapContainer}
//   googleMapElement = {
//     <GoogleMap
//         defaultZoom={15}
//         defaultCenter={this.props.location}
//         options={{streetViewControl:true, mapTypeControl:false}}>
//         </GoogleMap>
//       }/>
