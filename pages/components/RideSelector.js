import React, {useEffect, useState, useRef} from 'react'
import tw from "tailwind-styled-components";
import { carList } from '../data/carList';
import { useRouter } from "next/router";


const RideSelector = ({pickupCoordinates,dropoffCoordinates}) => {
    const [rideDuration, setRideDuration] = useState(0);

    useEffect(() => {
        rideDuration = fetch (
            `https://api.mapbox.com/directions/v5/mapbox/driving/${pickupCoordinates[0]},${pickupCoordinates[1]};${dropoffCoordinates[0]},${dropoffCoordinates[1]}?access_token=pk.eyJ1Ijoic2FtaS1tYXJ2ZWwiLCJhIjoiY2t4ZzNtc2NiMDB6djJwbHQxaW56NngzcCJ9.zbZobgnouged3Fs9bppqqA`
        )
        .then(get => get.json())
      .then((data) => {
        setRideDuration(data.routes[0].duration / 100);
      });
    },[pickupCoordinates, dropoffCoordinates])
    return (
        <Wrraper>
            <Title>Choose a ride or swip up for more</Title>
            <Carlist>
                {carList.map((car, index) => (
                    <Car key={index}>
                    <CarImage src={car.imgUrl} />
                    <CarDetails>
                        <Service>{car.service}</Service>
                        <Time>5 min away</Time>
                    </CarDetails>
                    <Price>{'$'+(rideDuration * car.multiplier).toFixed(2)}</Price>
                </Car>  
                ))}
                 
            </Carlist> 
        </Wrraper>
    )
}

export default RideSelector

const Price =tw.div`
text-sm
`
const Time =tw.div`
text-xs text-blue-500
`
const Service=tw.div`
 text-medium 
`
 const CarDetails=tw.div`
 flex-1
 `

const CarImage=tw.img`
h-14 mr-4
`
const Car =tw.div`
flex p-4 item-center 
`
const Wrraper =tw.div`
flex-1 overflow-y-scroll  felx-col
`
const Title =tw.div`
gray-500 text-center text-xs py-2 border-b
`
const Carlist=tw.div`
overflow-y-scroll
`


