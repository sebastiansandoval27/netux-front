import React from "react";
import { Btn } from "./buttonSend.styled";

const ButtonSend = ({ text, onClick }) => {
  return <Btn onClick={onClick}>{text}</Btn>;
};

export default ButtonSend;
