import React from "react";
import { HeaderStyled, LogoContainer, Navigation } from "./header.styled";
import Logo from "../../assets/images/logo.png";

const Header = ({ showNavigation = true }) => {
  return (
    <HeaderStyled>
      <div>
        <LogoContainer>
          <img src={Logo} alt="logo" />
        </LogoContainer>
        <Navigation show={showNavigation}>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul>
        </Navigation>
      </div>
    </HeaderStyled>
  );
};

export default Header;
