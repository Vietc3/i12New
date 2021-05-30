import React from 'react';
import GoogleMapReact from 'google-map-react';
import MyMarker from "./MyPlace"
 
const distanceToMouse = (pt:any, mp:any) => {
  if (pt && mp) {
    // return distance between the marker and mouse pointer
    return Math.sqrt(
      (pt.x - mp.x) * (pt.x - mp.x) + (pt.y - mp.y) * (pt.y - mp.y)
    );
  }
};

const points = [
  { id: 1, title: "i12 Katong", lat: 51.506, lng: -0.184 },
];
 
const SimpleMap = () => {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '60vh', width: '100%' }}>
       <GoogleMapReact
        bootstrapURLKeys={{
          // remove the key if you want to fork
          key: "AIzaSyC4OHQKtxrOP7nldZiiL1W-SwHXVaGRBYQ",
          language: "en",
          region: "US"
        }}
        defaultCenter={{ lat: 51.506, lng: -0.169 }}
        defaultZoom={15}
        distanceToMouse={distanceToMouse}
      >
        {points.map(({ lat, lng, title,id}) => {
          return (
            <MyMarker key={id} lat={lat} lng={lng} text={title} />
          );
        })}
      </GoogleMapReact>
      </div>
    );
}
 
export default SimpleMap;