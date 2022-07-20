import React, { useEffect, useState } from "react";
import ButtonSend from "../../ButtonSend/ButtonSend";
import InputSearch from "../../InputSearch/InputSearch";

import ItemMap from "./ItemMap";
import { Items, List, MapContainer, MapImage } from "./map.styled";

import MapPng from "../../../assets/images/map.png";
import { useContext } from "react";
import { AplicationContext } from "../../../context/FormContext";
import { useFormik } from "formik";
import locations from "../../../mocks/locations";

import { Formik, Field, Form } from "formik";

import * as yup from "yup";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

const Map = ({ changePage }) => {
  const [selected, setSelected] = useState("");
  const { data, setData } = useContext(AplicationContext);

  const validationSchema = yup.object({
    address: yup.string().required("Debe seleccionar una opción"),
  });

  const formik = useFormik({
    initialValues: {
      address: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      let completeAddress = locations.find(
        (item) => item.name === values.address
      );
      setData({
        ...data,
        address: {
          name: completeAddress?.name,
          address: completeAddress?.address,
          time: completeAddress?.time,
        },
      });
      changePage();
    },
  });

  return (
    <MapContainer>
      <List>
        <div className="container">
          <h2 className="title">Selecciona la oficina más cercana</h2>
          <InputSearch />
          <form onSubmit={formik.handleSubmit}>
            <FormControl>
              <RadioGroup
                aria-labelledby="location"
                name="address"
                onChange={(e) => {
                  setSelected(e.target.value);
                  formik.setFieldValue("address", e.target.value);
                }}
              >
                <Items>
                  {locations.map((location, index) => (
                    <FormControlLabel
                      key={location.id + "-" + index}
                      value={location.name}
                      name={location.name}
                      control={<Radio name="address" />}
                      label={
                        <ItemMap selected={setSelected} location={location} />
                      }
                    />
                  ))}
                </Items>
              </RadioGroup>
            </FormControl>
            <ButtonSend
              disabled={selected === "" || selected === null}
              text="Seleccionar"
            />
          </form>
        </div>
      </List>
      <MapImage>
        <img src={MapPng} alt="" />
      </MapImage>
    </MapContainer>
  );
};

export default Map;
