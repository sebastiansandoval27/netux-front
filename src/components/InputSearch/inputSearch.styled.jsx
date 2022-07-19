import styled from "styled-components";
import * as palette from "../../constants/colors";
import * as texts from "../../constants/textsFonts";

export const InputContainer = styled.div`
  width: 300px;
  height: 35px;
  margin: 20px 0;
  background-color: ${palette.default.grayUltralight};
  border-radius: 23px;
  padding: 5px 15px;
  display: flex;
  align-items: center;
  justify-content: center;

  & > input {
    width: auto;
    margin: 0;
    padding: 0;
    border: none;
    outline: none;
    background-color: transparent;
    font-family: ${texts.default.semiBold};
    color: ${palette.default.grayDark};
    font-size: 18px;
  }
  & > :nth-child(2) {
    margin: 0;
    margin-left: 20px;
    width: 20px;
    height: 20px;
  }
`;
