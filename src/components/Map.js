import React, {useState, useEffect } from "react";
import useGeoLocation from './useGeoLocation'
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import limage from "../assets/placeholder.png"

const icon = L.icon({
  iconUrl: limage,
  iconSize: [38, 38],
  iconAnchor: [25, 16],
});

function ResetCenterView(props) {
  const { selectPosition } = props;
  const map = useMap();

  useEffect(() => {
    if (selectPosition) {
      map.setView(
        L.latLng(selectPosition?.lat, selectPosition?.lon),
        map.getZoom(),
        {
          animate: true
        }
      )
    }
  }, [selectPosition, map]);

  return null;
}

const Map = (props) => {
  const location = useGeoLocation();
  const { selectPosition, setOrder} = props;
  const [locationSelection, setLocationSelection] = useState([selectPosition?.lat, selectPosition?.lon]); 

    useEffect(() => {
    if (location.loaded && !location.error) {
      setLocationSelection([location.coordinates.lat, location.coordinates.lng])
      console.log("location found")
    }else{
      console.log("location not found")
    }
  }, [location]); 
    console.log(locationSelection)
  return (
    <MapContainer
      center={selectPosition}
      zoom={16}
      // zoomControl={false}
      style={{ width: "100%", height: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
      {selectPosition && (
        <Marker position={locationSelection} icon={icon}>
          <Popup>
            {
            <div>
            <p>{selectPosition.display_name}</p>
            <button onClick={()=> setOrder(true)} className="text-lg bg-green-500 px-2 rounded-md">Enter</button>
            </div>
            }
          </Popup>
        </Marker>
      )}
      <ResetCenterView selectPosition={selectPosition} />
    </MapContainer>
  )
}

export default Map