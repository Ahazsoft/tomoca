'use client';

import React, { useEffect, useRef, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix default icon URLs
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

// Company logo as custom icon
const storeIcon = new L.Icon({
  iconUrl: '/logo.png', // ✅ logo goes in /public/logo.png
  iconSize: [40, 40],
  iconAnchor: [20, 40],
  popupAnchor: [0, -40],
});

const userIcon = new L.Icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/64/64113.png',
  iconSize: [30, 30],
  iconAnchor: [15, 30],
});

const FlyToUser = ({ location }) => {
  const map = useMap();
  useEffect(() => {
    if (location) {
      map.flyTo([location.lat, location.lng], 14, { duration: 2 });
    }
  }, [location, map]);
  return null;
};

const LeafletMap = ({ userPosition, stores }) => {
  const mapRef = useRef();

  return (
    <MapContainer
      ref={mapRef}
      key={userPosition ? 'with-user' : 'no-user'} // Force reinit if needed
      center={[9.03, 38.74]}
      zoom={13}
      scrollWheelZoom={true}
      style={{ height: '500px', width: '100%' }}
    >
      <TileLayer
        attribution='&copy; OpenStreetMap contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {stores.map((store, i) => (
        <Marker key={i} position={[store.lat, store.lng]} icon={storeIcon}>
          <Popup>{store.name}</Popup>
        </Marker>
      ))}

      {userPosition && (
        <>
          <Marker position={[userPosition.lat, userPosition.lng]} icon={userIcon}>
            <Popup>You are here</Popup>
          </Marker>
          <FlyToUser location={userPosition} />
        </>
      )}
    </MapContainer>
  );
};

export default LeafletMap;
