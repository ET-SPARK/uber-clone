import { useEffect, useState } from "react";
import tw from "tailwind-styled-components";
import Map from "./components/Map";
import { useRouter } from "next/router";
import RideSelector from "./components/RideSelector";
import Link from "next/link";

const Confirm = () => {
  const router = useRouter();
  const { pickup, dropoff } = router.query;

  console.log("pickup", pickup);
  console.log("Dropoff", dropoff);

  const [pickupCoordinates, setPickupCoordinates] = useState(0,0);
  const [dropoffCoordinates, setDropoffCoordinates] = useState(0,0);

  const getPickupCoordinates = (pickup) => {
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` +
        new URLSearchParams({
          access_token:
            "pk.eyJ1Ijoic2FtaS1tYXJ2ZWwiLCJhIjoiY2t4ZzNtc2NiMDB6djJwbHQxaW56NngzcCJ9.zbZobgnouged3Fs9bppqqA",
          limit: 1,
        })
    )
      .then((response) => response.json())
      .then((data) => {
        setPickupCoordinates(data.features[0].center);
      });
  };

  const getdropoffCoordinates = (dropoff) => {
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` +
        new URLSearchParams({
          access_token:
            "pk.eyJ1Ijoic2FtaS1tYXJ2ZWwiLCJhIjoiY2t4ZzNtc2NiMDB6djJwbHQxaW56NngzcCJ9.zbZobgnouged3Fs9bppqqA",
          limit: 1,
        })
    )
      .then((response) => response.json())
      .then((data) => {
        setDropoffCoordinates(data.features[0].center);
      });
  };

  useEffect(() => {
    getPickupCoordinates(pickup);
    getdropoffCoordinates(dropoff);
  }, [pickup, dropoff]);

  return (
    <div>
      <Wrapper>
      <ButtonContainer>
        <Link href="/search">
          <BackButton src=" https://img.icons8.com/ios-filled/50/000000/left.png" />
        </Link>
      </ButtonContainer>
        <Map
          pickupCoordinates={pickupCoordinates}
          dropoffCoordinates={dropoffCoordinates}
        />
        <RightContainer>
          <RideSelector
           pickupCoordinates={pickupCoordinates}
           dropoffCoordinates={dropoffCoordinates}
          />
          <ConfirmButtonContainer>
            <ConfirmButton >
              Confirm UberX
            </ConfirmButton>
          </ConfirmButtonContainer>
          </RightContainer>
      </Wrapper>
    </div>
  );
};

export default Confirm;

const Wrapper = tw.div`
flex h-screen flex-col
`;
const RightContainer = tw.div`
 flex-1 flex flex-col h-1/2
`;
const ConfirmButtonContainer=tw.div`
border-t-2
`
const ConfirmButton=tw.div`
bg-black text-white  mx-4 py-4 text-center text-xl
`
const ButtonContainer=tw.div`
rounded-full absolute top-4 z-10 left-4 bg-white shadow-md
` 
const BackButton = tw.img`
h-12 cursor-pointer object-contain
`;

