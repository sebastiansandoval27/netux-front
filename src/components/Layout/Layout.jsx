import React from "react";
import Header from "../Header/Header";
import { LayoutStyled } from "./layout.styled";

const Layout = (props) => {
  return (
    <LayoutStyled>
      <Header />
      {props.children}
    </LayoutStyled>
  );
};

export default Layout;
