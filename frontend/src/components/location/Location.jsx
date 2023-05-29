import React from "react";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Location = ({ currentLocation }) => {
  return (
    <>
      <MapContainer
        center={currentLocation}
        zoom={13}
        scrollWheelZoom={false}
        style={{
          height: "250px",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "50px",
        }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="Map data &copy; OpenStreetMap contributors"
        />
        <Marker position={currentLocation} />
      </MapContainer>
    </>
  );
};

export default Location;
