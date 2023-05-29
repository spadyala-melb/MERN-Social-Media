import React, { useEffect, useState } from "react";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Location = () => {
  const [currentLocation, setCurrentLocation] = useState({ lat: 0, lng: 0 });

  useEffect(() => {
    // Use browser's geolocation API to get the current location
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setCurrentLocation({ lat: latitude, lng: longitude });
      },
      (error) => {
        console.log("Error getting current location:", error);
      }
    );
  }, []);

  console.log("currentLocation: ", currentLocation);

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
