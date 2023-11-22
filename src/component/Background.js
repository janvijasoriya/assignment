import React, { Component } from 'react'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

mapboxgl.accessToken = 'pk.eyJ1Ijoic2RhYmJhIiwiYSI6ImNsbzVqMmc5NjBhcHAycWxhMHc3Y2s1M2sifQ.9fEHfRpjlwunv6cdKMTQnQ'
const Map = () => { 
    const map = new mapboxgl.Map({
  container: 'map', // container ID
  style: 'mapbox://styles/sdabba/cloa4llfd010d01qv5fd714zb', // style URL
  center: [12.550343, 55.665957], // starting position [lng, lat]
  zoom: 9 // starting zoom
})
const marker1 = new mapboxgl.Marker()
.setLngLat([12.554729, 55.70651])
.addTo(map);
 
const marker3 = new mapboxgl.Marker()
.setLngLat([12.554839, 55.70651])
.addTo(map);
 
// Create a default Marker, colored black, rotated 45 degrees.
const marker2 = new mapboxgl.Marker({ color: 'black', rotation: 45 })
.setLngLat([12.65147, 55.608166])
.addTo(map);
}
export default class Background extends Component {
    componentDidMount() { 
        Map()
        }
  render() {
    return (
        <div id="map" style={{position: 'absolute'}} className='absolute top-0 left-0 h-[1148px] w-screen'></div>
    )
  }
}
