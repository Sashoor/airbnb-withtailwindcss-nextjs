import Map from "react-map-gl";
import { useState } from "react"


function Maps() {

    const [viewport, setViewport] = useState({
        width:"100%",
        height:"100%",
        latitude: 37.7577,
        longitude: -122.4376,
        zoom: 11,
    });


    return (
        <Map
            {...viewport}
            mapStyle="mapbox://styles/saeedbel/cl3eug9bk008b14rxb4a2dda5"
            mapboxApiAccessToken={process.env.mapbox_key}
        />
    )
}

export default Maps
