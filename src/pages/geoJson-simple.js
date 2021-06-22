import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import L from 'leaflet';
import geojson from '../data/wojewodztwa-medium.geojson.json'

const center = [52, 19.2];

function onEachFeature(feature, layer) {
  layer.bindPopup(feature.properties.nazwa)
}


const MapWrapper = () => {
  const [map, setMap] = useState(null);

  useEffect(() => {
    if (map) {
      const legend = L.control({ position: "bottomleft" });

      legend.onAdd = () => {
        const div = L.DomUtil.create("div", "legend");
        div.innerHTML = `click on polygon`;
        return div;
      };

      legend.addTo(map);
    }
  }, [map]);

  return (
    <MapContainer whenCreated={setMap} center={center} zoom={6} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <GeoJSON data={geojson} onEachFeature={onEachFeature} />

    </MapContainer>
  )
}

export default MapWrapper;