import React from "react";
import { Btn } from "./buttonSend.styled";

const ButtonSend = ({ text, onClick = () => {}, disabled = false }) => {
  const handleClick = () => {
    console.log("click");
  };

  return (
    <Btn type="submit" onClick={onClick || handleClick} disabled={disabled}>
      {text}
    </Btn>
  );
};

export default ButtonSend;
