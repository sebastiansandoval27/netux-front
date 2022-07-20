import React, { useContext } from "react";
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

import { useFormik } from "formik";
import * as yup from "yup";
import { AplicationContext } from "../../../context/FormContext";

const Form = ({ changePage }) => {
  const documentTypes = [
    { value: "CC", label: "Cédula de Ciudadanía" },
    { value: "CE", label: "Cédula de Extranjería" },
    { value: "PP", label: "Pasaporte" },
  ];

  const { data, setData } = useContext(AplicationContext);

  const validationSchema = yup.object({
    documentType: yup.string().required("El tipo de documento es requerido"),
    document: yup.number().required("El Documento es obligationario"),
    firstName: yup
      .string()
      .min(3, "El nombre debe tener al menos 3 caracteres")
      .required("El nombre es obligatorio"),
    secondFirstName: yup.string(),
    lastName: yup
      .string()
      .min(3, "Deben ser mínimo 3 caracteres")
      .required("El Apellido es obligatorio"),
    secondLastName: yup.string(),
  });

  const formik = useFormik({
    initialValues: {
      documentType: documentTypes[0].value,
      document: "",
      firstName: "",
      secondFirstName: "",
      lastName: "",
      secondLastName: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      setData({ ...data, ...values });
      changePage();
    },
  });

  return (
    <FormContainer>
      <FormFieds>
        <FormTag onSubmit={formik.handleSubmit}>
          <h2 className="title">Ingresa tus datos</h2>
          <FormControlComp variant="standard">
            <Select
              labelId="select"
              id="document"
              onChange={() => {}}
              label="Cédula de Ciudadania"
              value={formik.values.documentType}
              error={
                formik.touched.documentType &&
                Boolean(formik.errors.documentType)
              }
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
              value={formik.values.document}
              onChange={formik.handleChange}
              error={formik.touched.document && Boolean(formik.errors.document)}
              helperText={formik.touched.document && formik.errors.document}
            />
          </FormControlComp>
          <Names>
            <FormControlComp>
              <TextField
                id="firstName"
                label="Nombre"
                variant="standard"
                value={formik.values.firstName}
                onChange={formik.handleChange}
                error={
                  formik.touched.firstName && Boolean(formik.errors.firstName)
                }
                helperText={formik.touched.firstName && formik.errors.firstName}
              />
            </FormControlComp>
            <FormControlComp>
              <TextField
                id="secondFirstName"
                label="Segundo nombre"
                variant="standard"
                value={formik.values.secondFirstName}
                onChange={formik.handleChange}
                error={
                  formik.touched.secondFirstName &&
                  Boolean(formik.errors.secondFirstName)
                }
                helperText={
                  formik.touched.secondFirstName &&
                  formik.errors.secondFirstName
                }
              />
            </FormControlComp>
          </Names>
          <LastName>
            <FormControlComp>
              <TextField
                id="lastName"
                label="Apellido"
                variant="standard"
                value={formik.values.lastName}
                onChange={formik.handleChange}
                error={
                  formik.touched.lastName && Boolean(formik.errors.lastName)
                }
                helperText={formik.touched.lastName && formik.errors.lastName}
              />
            </FormControlComp>
            <FormControlComp>
              <TextField
                id="secondLastName"
                label="Segundo apellido"
                variant="standard"
                value={formik.values.secondLastName}
                onChange={formik.handleChange}
                error={
                  formik.touched.secondLastName &&
                  Boolean(formik.errors.secondLastName)
                }
                helperText={
                  formik.touched.secondLastName && formik.errors.secondLastName
                }
              />
            </FormControlComp>
          </LastName>
          <Location>
            <h2>{data.address.name}</h2>
            <p>{data.address.address}</p>
            <p>{data.address.time}</p>
          </Location>
          <ButtonSend onClick={() => {}} text="Siguiente" />
        </FormTag>
      </FormFieds>
      <img src={Robot} alt="Illustration" />
    </FormContainer>
  );
};

export default Form;
