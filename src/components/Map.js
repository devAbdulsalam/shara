import React, { useEffect } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import limage from "../assets/placeholder.png"

const icon = L.icon({
  iconUrl: limage,
  iconSize: [38, 38],
  iconAnchor: [25, 16],
});
const position = [11.8948389, 8.5364136];

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
  const { selectPosition, setOrder} = props;
  const locationSelection = [selectPosition?.lat, selectPosition?.lon]; 
  return (
    <MapContainer
      center={position}
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
            <p className="p-1">{selectPosition.display_name}</p>
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