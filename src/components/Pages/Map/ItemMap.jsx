import { Radio } from "@mui/material";
import React from "react";
import { Item } from "./itemMap.styled";

const ItemMap = ({ location, selected }) => {
  return (
    <Item>
      <div className="container">
        <div className="content">
          <h3>{location.name}</h3>
          <p>{location.address}</p>
          <p>{location.time}</p>
        </div>
      </div>
    </Item>
  );
};

export default ItemMap;
