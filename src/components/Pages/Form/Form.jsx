import React from "react";
import {
  FormContainer,
  FormControlComp,
  FormFieds,
  FormTag,
  LastName,
  Location,
  Names,
} from "./form.styled";
import Robot from "../../../assets/images/robot.svg";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useState } from "react";
import ButtonSend from "../../ButtonSend/ButtonSend";

const Form = () => {
  const documentTypes = [
    { value: "CPF", label: "CPF" },
    { value: "RG", label: "RG" },
    { value: "Passport", label: "Passport" },
  ];
  const [age, setAge] = useState(null);

  return (
    <FormContainer>
      <FormFieds>
        <FormTag>
          <h2 className="title">Ingresa tus datos</h2>
          <FormControlComp variant="standard">
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={age}
              onChange={() => {}}
              label="Cédula de Ciudadania"
              renderValue={age !== "" ? undefined : () => "Answer"}
            >
              {documentTypes.map((documentType) => (
                <MenuItem key={documentType.value} value={documentType.value}>
                  {documentType.label}
                </MenuItem>
              ))}
            </Select>
          </FormControlComp>

          <FormControlComp>
            <TextField
              id="document"
              label="Número de documento"
              variant="standard"
            />
          </FormControlComp>
          <Names>
            <FormControlComp>
              <TextField
                id="document"
                label="Número de documento"
                variant="standard"
              />
            </FormControlComp>
            <FormControlComp>
              <TextField
                id="document"
                label="Número de documento"
                variant="standard"
              />
            </FormControlComp>
          </Names>
          <LastName>
            <FormControlComp>
              <TextField
                id="document"
                label="Número de documento"
                variant="standard"
              />
            </FormControlComp>
            <FormControlComp>
              <TextField
                id="document"
                label="Número de documento"
                variant="standard"
              />
            </FormControlComp>
          </LastName>
          <Location></Location>
          <ButtonSend onClick={() => {}} text="Siguiente" />
        </FormTag>
      </FormFieds>
      <img src={Robot} alt="Illustration" />
    </FormContainer>
  );
};

export default Form;
