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
          text="☕ Nylon"
        />
        <AnyReactComponent
          lat={1.3128331674021738}
          lng={103.86110632643916}
          text="☕ Apartment Coffee"
        />
          <AnyReactComponent
          lat={1.3656806822389873}
          lng={103.86987143511345}
          text="☕ Chu and Co"
        />
         <AnyReactComponent
          lat={1.3119747944499036}
          lng={103.79685794417453}
          text="☕ Sunday Folks"
        />
           <AnyReactComponent
          lat={1.2862391217210336}
          lng={103.8034560399344}
          text="☕ Rookie's Coffee Shop "
        />
       

      </GoogleMapReact>
    </div>
  );
}