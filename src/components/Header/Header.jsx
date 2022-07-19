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

const Header = ({ showNavigation = true }) => {
  return (
    <HeaderStyled>
      <div>
        <LogoContainer>
          <img src={Logo} alt="logo" />
        </LogoContainer>
        <Navigation show={showNavigation}>
          <BackButton>
            <BsArrowLeft size={30} />
            <h3>atras</h3>
          </BackButton>
          <ul>
            <LiItem active={true}>1</LiItem>
            <Divider active={true} />
            <LiItem>2</LiItem>
            <Divider active={false} />
            <LiItem>3</LiItem>
            <Divider active={false} />
            <LiItem>4</LiItem>
          </ul>
          <img src={Netux} alt="Netux" className="logo-netux" />
        </Navigation>
      </div>
    </HeaderStyled>
  );
};

export default Header;
