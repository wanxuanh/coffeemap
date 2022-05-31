import React from "react";
import GoogleMapReact from 'google-map-react';
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import PropTypes from 'prop-types';
import shouldPureComponentUpdate from 'react-pure-render/function';
import MyGreatPlace from './my_great_place.jsx';



const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function SimpleMap(){
  const defaultProps = {
    center: {
      lat: 1.27709,
      lng: 103.851959
    },
    zoom: 20
    
  };
    
  shouldComponentUpdate = shouldPureComponentUpdate;


  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_API_KEY }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        options={createMapOptions}>
        <MyGreatPlace lat={1.27709} lng={103.851959} text={'A'} />
    
        <AnyReactComponent
          lat={1.27709}
          lng={103.851959}
          text="☕ Nylon Coffee"
          

        />
      </GoogleMapReact>
    </div>
  );
}