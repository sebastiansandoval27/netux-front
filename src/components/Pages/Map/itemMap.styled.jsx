import styled from "styled-components";
import * as palette from "../../../constants/colors";
import * as texts from "../../../constants/textsFonts";
import { Radio } from "@mui/material";

export const Item = styled.div`
  width: 100%;
  max-width: 100%;
  height: 70px;
  margin: 10px 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  & > .container {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  & > .container > .content {
    width: 220px;
    height: 100%;
    border-bottom: 1px solid black;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0 10px;
    overflow-x: hidden;
    max-width: 100%;
    padding-bottom: 5px;

    & > h3 {
      width: 100%;
      font-size: 18px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      font-weight: ${texts.default.black};
      color: ${palette.default.black};
    }
    & > p {
      font-size: 14px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      width: 100%;
      font-weight: ${texts.default.semiBold};
      color: ${palette.default.grayMedium};
      text-overflow: ellipsis;
      margin-top: 5px;
    }
  }
`;
