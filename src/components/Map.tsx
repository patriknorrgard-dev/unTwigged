import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import type { UserLocationResult } from "../types/Location.types";

interface MapProps {
  results: UserLocationResult[];
}

const Map: React.FC<MapProps> = ({ results }) => {
  return (
    <MapContainer
      center={[57.0, 15.0]}
      zoom={5}
      scrollWheelZoom={false}
      style={{ height: "350px", width: "100%", marginTop: "1rem" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {results.map((item, index) => (
        item.user?.location && (
          <Marker key={index} position={[item.user.location.lat, item.user.location.lon]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        ))
      )}
    </MapContainer>
  );
};

export default Map;
