import styled from "styled-components";
import * as palette from "../../constants/colors";
import * as texts from "../../constants/textsFonts";

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

  & > :first-child {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
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
  width: 80%;
  background-color: ${palette.default.white};
  height: 100%;
  //background-color: ${palette.default.white};

  & > ul {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 100px;
  }

  & > .logo-netux {
    width: 200px;
    height: auto;
  }
`;

export const DividerComp = styled.div`
  width: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 10px;
  & > span {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: ${(props) =>
      props.active ? palette.default.green : palette.default.graylight};
    margin: 0 5px;
    & > :first-child {
      margin-left: 0;
    }
  }
`;

export const LiItem = styled.li`
  font-size: 22px;
  font-weight: ${texts.default.black};
  color: ${(props) =>
    props.active ? palette.default.white : palette.default.green};
  background-color: ${(props) =>
    props.active ? palette.default.green : "transparent"};
  border: 2px solid ${palette.default.green};
  padding: 10px;
  border-radius: 50px;
  cursor: pointer;
  width: 37px;
  height: 37px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BackButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  height: auto;
  padding: 10px;

  & > :first-child {
    width: 25px;
  }

  & > h3 {
    font-size: 20px;
    margin-left: 10px;
  }
`;
