import styled from "styled-components";
import * as palette from "../../constants/colors";
import * as texts from "../../constants/textsFonts";

export const Btn = styled.button`
  width: 320px;
  margin-top: 25px;
  height: 40px;
  border-radius: 40px;
  background-color: ${palette.default.grayText};
  color: ${palette.default.white};
  font-family: ${texts.default.heavy};
  font-size: 23px;
`;
