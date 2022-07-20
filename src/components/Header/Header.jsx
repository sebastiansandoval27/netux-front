import React from "react";
import {
  HeaderStyled,
  LogoContainer,
  Navigation,
  DividerComp,
  LiItem,
  BackButton,
} from "./header.styled";
import { BsArrowLeft } from "react-icons/bs";
import Logo from "../../assets/images/logo.png";
import Netux from "../../assets/images/netux.png";

const Divider = ({ active }) => {
  return (
    <DividerComp active={active}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </DividerComp>
  );
};

const Header = ({ showNavigation = true, page = 0, backButton }) => {
  return (
    <HeaderStyled>
      <div>
        <LogoContainer>
          <img src={Logo} alt="logo" />
        </LogoContainer>
        <Navigation show={showNavigation}>
          <BackButton onClick={() => backButton()}>
            <BsArrowLeft size={30} />
            <h3>atras</h3>
          </BackButton>
          <ul>
            <LiItem active={true}>1</LiItem>

            <Divider active={page > 1 && page < 3} />

            <LiItem active={page > 1}>2</LiItem>

            <Divider active={page > 2 && page < 4} />

            <LiItem active={page > 2}>3</LiItem>

            <Divider active={page >= 3} />

            <LiItem active={page >= 3}>4</LiItem>
          </ul>
          <img src={Netux} alt="Netux" className="logo-netux" />
        </Navigation>
      </div>
    </HeaderStyled>
  );
};

export default Header;
