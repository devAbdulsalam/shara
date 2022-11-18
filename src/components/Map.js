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
// const apiKey = 'pk.eyJ1IjoiYWxmcmVkMjAxNiIsImEiOiJja2RoMHkyd2wwdnZjMnJ0MTJwbnVmeng5In0.E4QbAFjiWLY8k3AFhDtErA';
const Map = (props) => {
  const { selectPosition } = props;
  const locationSelection = [selectPosition?.lat, selectPosition?.lon];

  return (
    <MapContainer
      center={position}
      zoom={13}
      // zoomControl={false}
      style={{ width: "100%", height: "100%" }}
    >
      <TileLayer
        // attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url={`https://api.maptiler.com/maps/basic-v2/style.json?key=K4UECBDJXBlUU9s9fPIL`}
            />
      {selectPosition && (
        <Marker position={locationSelection} icon={icon}>
          <Popup>
            {
            selectPosition.display_name
            }
          </Popup>
        </Marker>
      )}
      <ResetCenterView selectPosition={selectPosition} />
    </MapContainer>
  )
}

export default Map