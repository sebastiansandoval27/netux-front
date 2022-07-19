import styled from "styled-components";
import * as palette from "../../constants/colors";

export const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${palette.default.white};
  height: 137px;
  z-index: 1;
  //box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  & > :first-child {
    position: relative;
    width: 100%;
    height: 100%;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 429px;
  height: 100%;
  box-shadow: 0px 3px 6px #00000029;
  background-color: ${palette.default.white};
  border-bottom-right-radius: 63px;
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;

  & > img {
    width: 266px;
    height: 100%;
    object-fit: contain;
  }
`;

export const Navigation = styled.div`
  display: ${(props) => (props.show ? "flex" : "none")};
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 100%;
  background-color: red;
`;
