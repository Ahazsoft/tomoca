'use client';

import React, { useRef, useEffect } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

const MapLibreMap = ({ userPosition, stores }) => {
  const mapRef = useRef(null);
  const mapInstance = useRef(null);
  const markersRef = useRef([]);

  useEffect(() => {
    if (!mapRef.current || mapInstance.current) return;

    mapInstance.current = new maplibregl.Map({
      container: mapRef.current,
      style: 'https://demotiles.maplibre.org/style.json',
      center: [39.5, 9.15], // Default center
      zoom: 6, // Default zoom
    });

    mapInstance.current.addControl(new maplibregl.NavigationControl(), 'top-right');

    // Add store markers
    const bounds = new maplibregl.LngLatBounds();

    markersRef.current = stores.map((store) => {
      const marker = new maplibregl.Marker({ color: '#d32f2f' })
        .setLngLat([store.lng, store.lat])
        .setPopup(new maplibregl.Popup().setText(store.name))
        .addTo(mapInstance.current);

      bounds.extend([store.lng, store.lat]);
      return marker;
    });

    // If bounds has at least one point, fit the map to it
    if (!bounds.isEmpty()) {
      mapInstance.current.fitBounds(bounds, {
        padding: 60,
        maxZoom: 14,
        animate: true,
      });
    }

    return () => {
      mapInstance.current?.remove();
      mapInstance.current = null;
      markersRef.current.forEach((m) => m.remove());
    };
  }, [stores]);

  // Add user marker and extend bounds
  useEffect(() => {
    if (!userPosition || !mapInstance.current) return;

    const marker = new maplibregl.Marker({ color: '#1976d2' })
      .setLngLat([userPosition.lng, userPosition.lat])
      .setPopup(new maplibregl.Popup().setText('You are here'))
      .addTo(mapInstance.current);

    const currentBounds = mapInstance.current.getBounds();
    const bounds = new maplibregl.LngLatBounds(currentBounds);
    bounds.extend([userPosition.lng, userPosition.lat]);

    mapInstance.current.fitBounds(bounds, {
      padding: 60,
      maxZoom: 14,
      animate: true,
    });

    return () => marker.remove();
  }, [userPosition]);

  return <div ref={mapRef} style={{ height: '500px', width: '100%' }} />;
};

export default MapLibreMap;
