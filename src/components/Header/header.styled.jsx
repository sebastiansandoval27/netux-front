import styled from "styled-components";
import * as palette from "../../constants/colors";

export const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${palette.default.white};
  height: 137px;
  z-index: 1;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  padding: 0 20px;
`;
