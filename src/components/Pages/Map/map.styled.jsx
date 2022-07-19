import { TextField } from "@mui/material";
import styled from "styled-components";
import * as palette from "../../../constants/colors";
import * as texts from "../../../constants/textsFonts";

export const MapContainer = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
`;

export const List = styled.div`
  width: 400px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: absolute;
  top: 0;
  left: 0;
  box-shadow: 0px 3px 6px #00000029;
  background-color: ${palette.default.white};

  & > .container {
    width: 85%;
    height: auto;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 15px 10px;

    & > .title {
      font-size: 23px;
      font-weight: ${texts.default.black};
      color: ${palette.default.green};
    }
  }
`;

export const MapImage = styled.div`
  width: 100%;
  height: 100%;
  background-color: gold;
`;

export const Items = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 10px 5px;
  overflow-y: scroll;
`;
