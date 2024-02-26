"use client";

import { useCallback, useMemo, useState } from "react";

import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

export default function Map() {
  const center = useMemo(() => ({ lat: 45.30481, lng: -74.30187 }), []);
  const { isLoaded, loadError } = useJsApiLoader({
    id: "google-maps-script",
    googleMapsApiKey: "AIzaSyDS2YofOeBpt26_WqIabg7bU7UeEZStL5Q",
  });

  const [map, setMap] = useState(null);

  const onLoad = useCallback(
    (map) => {
      const bounds = new window.google.maps.LatLngBounds(center);
      map.fitBounds(bounds);
      setMap(map);
    },
    [map]
  );

  const onUnmount = useCallback(() => {
    setMap(null);
  }, []);

  if (loadError) console.error(loadError);

  if (isLoaded) return <div>Loading...</div>;

  return (
    <GoogleMap
      mapContainerClassName="w-full h-full"
      center={center}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      <Marker position={center} />
    </GoogleMap>
  );
}
