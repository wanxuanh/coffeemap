import { useState, useEffect } from "react";
import GoogleMapReact from 'google-map-react';
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import PropTypes from 'prop-types';
import axios from 'axios'
  
const AnyReactComponent = ({ text }) => <div>{text}</div>;

function createMapOptions(maps) {
  // next props are exposed at maps
  // "Animation", "ControlPosition", "MapTypeControlStyle", "MapTypeId",
  // "NavigationControlStyle", "ScaleControlStyle", "StrokePosition", "SymbolPath", "ZoomControlStyle",
  // "DirectionsStatus", "DirectionsTravelMode", "DirectionsUnitSystem", "DistanceMatrixStatus",
  // "DistanceMatrixElementStatus", "ElevationStatus", "GeocoderLocationType", "GeocoderStatus", "KmlLayerStatus",
  // "MaxZoomStatus", "StreetViewStatus", "TransitMode", "TransitRoutePreference", "TravelMode", "UnitSystem"
  return {
    zoomControlOptions: {
      position: maps.ControlPosition.RIGHT_CENTER,
      style: maps.ZoomControlStyle.SMALL
    },
    mapTypeControlOptions: {
      position: maps.ControlPosition.TOP_RIGHT
    },
    mapTypeControl: true
  };
}
 
export default function AddMap () {

  const defaultProps = {
    center: {
      lat: 1.3617436588555163,
      lng: 103.84419714056234
    },
    zoom: 12
    
  };
    
    const [cafes, setCafes] = useState([]);

 useEffect(() => {
            axios.get('/api/cafes', {
                withCredentials: true
            })
            .then((res) => {
                setCafes(res.data.cafes)
                console.log(res.data.cafes)
            })
            .catch((error) => console.log(error));
    }, [])

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '100vh', width: '100%' }}>
       {cafes.map((cafes) => (
                  <div key={cafes.cafename} style={{display: `${cafes.display}`, width:'20%'}}>
                    <section>
                        {cafes.cafename}
                    </section>{" "}      
                      <section>
                        {parseInt(cafes.latitude)}
                    </section>{" "}   
                     <section>
                        {parseInt(cafes.longtitude)}
                    </section>{" "}   
                  </div>
                ))}
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_API_KEY }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        // options={createMapOptions}
        >
        
       {cafes.map((cafes) => {
          <AnyReactComponent
          lat={parseInt(cafes.latitude)}
          lng={parseInt(cafes.longtitude)}
          text= {cafes.cafename}/>
       })}

      <MapMarker></MapMarker>
      </GoogleMapReact>
    </div>
  );
}