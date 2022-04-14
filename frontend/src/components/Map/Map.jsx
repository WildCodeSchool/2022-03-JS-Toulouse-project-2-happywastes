import React, { useEffect, useState } from "react";
import { TileLayer, useMapEvents } from "react-leaflet";
import "./Map.scss";

function Map() {
  
  const map = useMapEvents({
    click: (ev) => map.flyTo([46.604652, 1.444209]),
  });

  console.log(map);
  
  // useEffect(() => {
  //   console.log("ready");
  //   setMapReady();
  // }, []);

  return (
    <>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/* <Marker position={pos}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker> */}
    </>
  );
}

export default Map;
