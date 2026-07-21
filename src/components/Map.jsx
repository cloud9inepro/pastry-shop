
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

export const   Map = () => {
  const position = [4.8156, 70.0499]; // Example coordinates near Port Harcourt/Nigeria

  return (
    <MapContainer center={position} style={{ height: "200px", width: "100%" }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>Your Map Placement!</Popup>
      </Marker>
    </MapContainer>
  );
}
