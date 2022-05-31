import { useState, useEffect } from "react";
import GoogleMap from 'google-map-react';
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
                  <div key={cafes.cafename} style={{display: `${cafes.display}`}}>
                    <section>
                        {cafes.cafename}
                    </section>{" "}
                    <section>
                        {cafes.longtitude}
                    </section>{" "}
                    <section>{cafes.offday}</section>{" "}
                     <section>
                        {cafes.latitude}
                    </section>{" "}
                    
                  </div>
                ))}
      <GoogleMap
        apikey={{ key: process.env.REACT_APP_GOOGLE_MAP_API_KEY }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        options={createMapOptions}>
       {cafes.map((cafes) => {
                 <AnyReactComponent key={cafes.cafename}
                  lat={cafes.latitude}
          lng={cafes.longtitude}
          text= {cafes.cafename}/>
       })}


         <AnyReactComponent
          lat={1.27714}
          lng={103.83004}
          text="☕ Nylon Coffee"
        />
        {/* <AnyReactComponent
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
          text="☕ Rookie's Coffee Shop"
        />
         <AnyReactComponent
          lat={1.2862391217210336}
          lng={103.8034560399344}
          text="☕ Rookie's Coffee Shop "
        />
         <AnyReactComponent
          lat={1.3117891894090998}
          lng={103.86041602828344}
          text="☕ Chye Seng Huat Hardware"
        /> */}
      </GoogleMap>
    </div>
  );
}