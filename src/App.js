import React from 'react';
import SeasonDisplay from './seasonDisplay';
import {Spinner} from './spinner';

export class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            lat: null,
            errMessage: ''
        }

    }

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                console.log(position)
                this.setState({
                    lat: position.coords.latitude
                })
            },
            err => {
                console.log(err);
                this.setState({errMessage: err.message})
            }
        ) 
    }

    render() {
  
      if (this.state.errMessage && !this.state.lat)
        return <div>Error: {this.state.errMessage}</div>
      if (this.state.lat && !this.state.errMessage)
        return <SeasonDisplay lat={this.state.lat}></SeasonDisplay>  
        return <Spinner />
    }
}