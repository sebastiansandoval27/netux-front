import styled from "styled-components";
import * as palette from "../../constants/colors";
import * as texts from "../../constants/textsFonts";

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  & > div.container {
    width: 400px;
    height: 500px;
    background-color: #fff;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    & > .texts {
      width: 80%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      & > img {
        width: 300px;
      }

      & > .title {
        font-size: 24px;
        font-weight: ${texts.default.black};
        color: ${palette.default.green};
        margin-top: 15px;
        width: 80%;
        text-align: center;
      }
      & > h3:first-of-type {
        margin-top: 30px;
      }
      & > .type {
        font-size: 18px;
        font-weight: ${texts.default.regular};
        color: ${palette.default.grayMedium};
        margin-top: 15px;
        width: 80%;
        text-align: center;
      }
      & > .text {
        font-size: 18px;
        font-weight: ${texts.default.black};
        color: ${palette.default.black};
        width: 80%;
        text-align: center;
      }
    }
  }
`;

export const Button = styled.button`
  width: 320px;
  margin-top: 15px;
  height: 40px;
  border-radius: 40px;
  background-color: ${palette.default.white};
  border: 2px solid ${palette.default.green};
  color: ${palette.default.green};
  font-family: ${texts.default.heavy};
  font-size: 20px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: ${palette.default.green};
    color: ${palette.default.white};
  }
`;
