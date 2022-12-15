import { useEffect } from 'react'
import tw from "tailwind-styled-components"
import mapboxgl from '!mapbox-gl'

mapboxgl.accessToken = 'pk.eyJ1Ijoic2FtaS1tYXJ2ZWwiLCJhIjoiY2t4ZzNtc2NiMDB6djJwbHQxaW56NngzcCJ9.zbZobgnouged3Fs9bppqqA';
const Map = (props) => {

    useEffect(() => {
       const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
        center: [-99.29011,39.39172 ],
        zoom: 3,
        })
        if (props.pickupCoordinates) {
            addToMap(map, props.pickupCoordinates);
          }
          if (props.dropoffCoordinates) {
            addToMap(map, props.dropoffCoordinates);
          }  

          if (props.pickupCoordinates && props.dropoffCoordinates) {
            map.fitBounds(
                [
                    props.pickupCoordinates, 
                    props.dropoffCoordinates
                ], {
              padding: 60,
            });
          }
        }, [props.pickupCoordinates , props.dropoffCoordinates])    
        const addToMap= (map, coordiniates)=>{
            const marker1 =new mapboxgl.Marker()
            .setLngLat(coordiniates)
            .addTo(map);
        }

        

    return (
        <Wrapper id ='map'>Map</Wrapper>
    )}



export default Map
const Wrapper = tw.div`
flex-1 h-1/2
`
