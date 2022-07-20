import React from "react";
import { Button, ModalContainer } from "./modal.styled";
import Logo from "../../assets/images/logo.png";
import ButtonSend from "../ButtonSend/ButtonSend";

const Modal = ({ data, close }) => {
  const {
    documentType,
    document,
    firstName,
    secondName,
    lastName,
    secondLastName,
  } = data;
  return (
    <ModalContainer>
      <div className="container">
        <div className="texts">
          <img src={Logo} alt="Logo" />
          <h2 className="title">¡Has solicitado tu turno con éxito!</h2>
          <h3 className="type">Servicio:</h3>
          <h3 className="text">Consulta Externa</h3>
          <h3 className="type">Día:</h3>
          <h3 className="text">10-05-2021</h3>
          <h3 className="type">Hora:</h3>
          <h3 className="text">02:00 p.m</h3>
          <Button onClick={close}>Solicitar nuevo turno</Button>
        </div>
      </div>
    </ModalContainer>
  );
};

export default Modal;
