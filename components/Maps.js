import Map from "react-map-gl";
import { useState } from "react"
import 'mapbox-gl/dist/mapbox-gl.css';
import { Marker } from 'react-map-gl';



function Maps() {

    // const [viewport, setViewport] = useState({
    //     width:"100%",
    //     height:"100%",
    //     latitude: 37.7577,
    //     longitude: -122.4376,
    //     zoom: 11,
    // });


    return (
        // <Map initialViewState ={{

        //     latitude: 37.7577,
        //     longitude: -122.4376,
        //     zoom: 11,

        // }}
        // style={{width: 100, height: 100}}
        // mapStyle="mapbox://styles/mapbox/streets-v9"
        //     // {...viewport}
        //     mapStyle="mapbox://styles/saeedbel/cl3eug9bk008b14rxb4a2dda5"
        //     mapboxApiAccessToken={process.env.mapbox_key}
        // />


        <Map
            initialViewState={{
                latitude: 37.7577,
                longitude: -122.4376,
                zoom: 11,
            }}
            style={{ width: 600, height: 400 }}
            mapStyle="mapbox://styles/saeedbel/cl3yme5vc003p14lqcghzkiwp"
            mapboxApiAccessToken={process.env.mapbox_key} >
            style={{width: 200, height:200}}

         </Map>

        //   <Map
        //   initialViewState={{
        //     width:"100%",
        //     height:"100%",  
        //     latitude: 37.7577,
        //     longitude: -122.4376,
        //     zoom: 11,
        //   }}
        //   style={{width: 100, height"100%"}}
        //   mapStyle="mapbox://styles/mapbox/streets-v9"
        //         // mapboxApiAccessToken={process.env.mapbox_key}
        //         mapboxAccessToken={MAPBOX_TOKEN}
        //     >
        //   {/* <Marker longitude={-122.4} latitude={37.8} color="red" /> */}


        // </Map>
    )
}

export default Maps
