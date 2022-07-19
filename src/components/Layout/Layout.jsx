import React from "react";
import Header from "../Header/Header";
import { LayoutStyled } from "./layout.styled";

const Layout = ({ home = false }, props) => {
  return (
    <LayoutStyled>
      <Header showNavigation={!home} />
      {props.children}
    </LayoutStyled>
  );
};

export default Layout;
