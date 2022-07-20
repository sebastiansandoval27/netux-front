import React, { useContext, useState } from "react";
import { AplicationContext, dataValue } from "../../../context/FormContext";
import Modal from "../../Modal/Modal";
import { FinalContainer, Image, Text } from "./final.styled";
import Board from "../../../assets/images/board.svg";
import Captcha from "../../../assets/images/captcha.png";
import ButtonSend from "../../ButtonSend/ButtonSend";

const Final = ({ returnToHome = () => {} }) => {
  const { data, setData } = useContext(AplicationContext);

  const [showModal, setShowModal] = useState(false);

  let name = `${data.firstName} ${data.secondFirstName} ${data.lastName} ${data.secondLastName}`;

  return (
    <FinalContainer>
      {showModal && (
        <Modal
          data={data}
          close={() => {
            returnToHome();
            setShowModal(false);
            setData(dataValue);
          }}
        />
      )}
      <Text>
        <div className="container">
          <h2 className="title">Verifica tu información</h2>
          <h3 className="name">{name}</h3>
          <h3 className="document">
            {data.documentType}. {data.document}
          </h3>
          <h2 className="service">Consulta Externa</h2>
          <div className="location">
            <h3 className="title">{data.address.name}</h3>
            <p>{data.address.address}</p>
            <p>{data.address.time}</p>
          </div>
          <img src={Captcha} alt="Captcha" className="captcha" />
          <ButtonSend
            onClick={() => {
              setShowModal(true);
            }}
            text="Aceptar"
          />
        </div>
      </Text>
      <Image>
        <div className="container">
          <img src={Board} alt="Board" />
        </div>
      </Image>
    </FinalContainer>
  );
};

export default Final;
