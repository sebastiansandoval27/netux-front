import styled from "styled-components";
import * as palette from "../../constants/colors";

export const LayoutStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: auto;
  width: 100vw;
  overflow: hidden;
  background-color: ${palette.default.white};
  margin: 0;
  padding: 0;
`;
