import { FormControl } from "@mui/material";
import * as palette from "../../../constants/colors";
import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  & > div {
    width: 50%;
  }
  & > img {
    width: 40%;
  }
`;

export const FormFieds = styled.div`
  width: 550px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const FormTag = styled.form`
  width: 450px;
  height: auto;
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  & > h2.title {
    font-size: 28px;
    font-weight: ${palette.default.semiBold};
    color: ${palette.default.green};
    margin: 15px 0;
    margin-bottom: 50px;
  }
`;

export const FormControlComp = styled(FormControl)`
  width: 100%;

  & > input {
    color: ${palette.default.grayTitle} !important;
  }
`;

export const Names = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: 45% 45%;
  align-items: center;
  justify-content: space-between;
  grid-gap: 10px;
`;
export const LastName = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: 45% 45%;
  align-items: center;
  justify-content: space-between;
  grid-gap: 10px;
`;

export const Location = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  background-color: red;
`;
