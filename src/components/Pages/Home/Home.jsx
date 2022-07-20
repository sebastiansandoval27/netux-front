import React from "react";
import { HomeContainer, Text, Image } from "./home.styled";
import Board from "../../../assets/images/board.svg";
import ButtonSend from "../../ButtonSend/ButtonSend";

const Home = ({ changePage }) => {
  return (
    <HomeContainer>
      <Text>
        <div className="container">
          <h2 className="title">
            <span>Solicita tu turno virtual</span>y realiza todos tus trámites
            sin filas.
          </h2>
          <div className="list">
            <h3 className="title">Como solicitar tu turno</h3>
            <ul>
              <li>
                <span>1</span>
                <h3>Selecciona la oficina más cercana</h3>
              </li>
              <li>
                <span>2</span>
                <h3>Ingresa tus datos</h3>
              </li>
              <li>
                <span>3</span>
                <h3>Selecciona el servicio</h3>
              </li>
              <li>
                <span>4</span>
                <h3>Verifica tu información</h3>
              </li>
            </ul>
            <ButtonSend onClick={() => changePage()} text="Solicitar turno" />
          </div>
        </div>
      </Text>
      <Image>
        <div className="container">
          <img src={Board} alt="Board" />
        </div>
      </Image>
    </HomeContainer>
  );
};

export default Home;
