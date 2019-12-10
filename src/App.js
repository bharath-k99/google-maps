import React,{useState} from "react";
import {GoogleMap, withScriptjs,withGoogleMap,Marker, InfoWindow} from "react-google-maps";
import * as parksData from "../src/Data/skateboard parks.json";
import mapStyles from '../src/mapStyles';

function Map() {
  const [selectedPark,setSelectedPark]=useState(null);
  return (
    <GoogleMap defaultZoom = {10} defaultCenter = {{lat :45.421532,lng : -75.697189}}
    defaultOptions= {{styles : mapStyles}}>
    {parksData.features.map(park =>(
      <Marker key ={park.properties.PARK_ID}
       position ={{
        lat:park.geometry.coordinates[1],
        lng:park.geometry.coordinates[1],
       
    }}
    onClick = { ()=>{
      setSelectedPark(park);
    }
    
    }
    icon = {{
      url : "/logo512.png",
      scaledSize : new window.google.maps.Size(25,25) 
    }}
    />
    ))}
    {selectedPark&&(
      <InfoWindow position ={{
        lat:selectedPark.geometry.coordinates[1],
        lng:selectedPark.geometry.coordinates[1],
    }}
    onCloseClick={()=>{
      setSelectedPark(null);
    }}
    
    >
        <div>
          <h2>
           {selectedPark.properties.Name}</h2>
          <p>{selectedPark.properties.DESCRIPTO}</p>
           </div>
      </InfoWindow>
    )
  }
    
    
    </GoogleMap>
  );
  
}



const WrappedMap = withScriptjs(withGoogleMap(Map))

     export default function App () {
      return (
         <div style = {{width:'50vw',height:'50vh'}}>
           <WrappedMap googleMapURL={`https://maps.googleapis.com/maps/api/js?v=1&key="AIzaSyCR4gboUupS1lVAUyNvyOu7AtWmEpKbnZ8"`} 
           loadingElement={<div style ={{height:"100%"}}/> }
           containerElement={<div style ={{height:"100%"}}/> }
           mapElement={<div style ={{height:"100%"}}/> }


           />
           </div>
      );
       }
    