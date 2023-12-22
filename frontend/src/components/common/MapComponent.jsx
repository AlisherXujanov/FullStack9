import React from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import { useEffect, useState } from 'react';

export default function MapComponent() {
  const [coords, setCoords] = useState([]);


  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setCoords([position.coords.latitude, position.coords.longitude])
    });
  })

  const defaultState = {
    center: coords,
    zoom: 5,
  };

  return (
    <YMaps>
      <Map defaultState={defaultState}>
        <Placemark geometry={[55.684758, 37.738521]} />
      </Map>
    </YMaps>
  );
}