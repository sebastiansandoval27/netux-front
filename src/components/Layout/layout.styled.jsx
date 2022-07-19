import styled from "styled-components";
import * as palette from "../../constants/colors";

export const LayoutStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100vh;
  width: 100vw;
  background-color: ${palette.default.white};
  padding: 20px;
  margin: 0;
`;
