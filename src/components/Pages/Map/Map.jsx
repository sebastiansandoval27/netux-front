import React, { useState } from "react";
import ButtonSend from "../../ButtonSend/ButtonSend";
import InputSearch from "../../InputSearch/InputSearch";

import ItemMap from "./ItemMap";
import { Items, List, MapContainer, MapImage } from "./map.styled";

import MapPng from "../../../assets/images/map.png";

const Map = () => {
  const [selected, setSelected] = useState("a");

  const locations = Array(10).fill({
    id: 1,
    name: "Sede 1",
    address: "Calle 1 # 87 - 78, Lorem Ipsum",
    time: "Horario: Lorem Ipsum",
  });

  return (
    <MapContainer>
      <List>
        <div className="container">
          <h2 className="title">Selecciona la oficina más cercana</h2>
          <InputSearch />
          <Items>
            {locations.map((location, index) => (
              <div key={location.id + "-" + index}>
                <ItemMap selected={selected} location={location} />
              </div>
            ))}
          </Items>
        </div>
        <ButtonSend onClick={() => {}} text="Seleccionar" />
      </List>
      <MapImage>
        <img src={MapPng} alt="" />
      </MapImage>
    </MapContainer>
  );
};

export default Map;
