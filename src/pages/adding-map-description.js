import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import L from 'leaflet';

const center = [52.22977, 21.01178];

function Legend({ map }) {
  useEffect(() => {
    if (map) {
      const legend = L.control({ position: "bottomleft" });

      legend.onAdd = () => {
        const div = L.DomUtil.create("div", "description");
        L.DomEvent.disableClickPropagation(div);

        const text = "<b>Lorem Ipsum</b> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book...";

        div.innerHTML = text;

        return div;
      };

      legend.addTo(map);
    }
  }, [map]);

  return null;
}

const MapWrapper = () => {
  const [map, setMap] = useState(null);

  return (
    <MapContainer whenCreated={setMap} center={center} zoom={18} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Legend map={map} />
    </MapContainer>
  )
}

export default MapWrapper;