import styled from "styled-components";
import * as palette from "../../../constants/colors";
import * as texts from "../../../constants/textsFonts";

export const HomeContainer = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
`;

export const Text = styled.div`
  width: 40%;
  max-width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 15px;
  overflow: hidden;

  & > .container {
    width: 450px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    & > .title {
      font-size: 28px;
      width: 100%;
      margin: 20px 0;
      display: flex;
      flex-direction: column;
      font-weight: ${texts.default.semiBold};
      color: ${palette.default.green};
      & > span {
        font-weight: ${texts.default.black};
      }
    }

    & > .list {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      width: 100%;
      height: auto;
      margin: 20px 0;

      & > h3.title {
        font-weight: ${texts.default.semiBold};
        color: ${palette.default.grayTitle};
        font-size: 22px;
        margin: 20px 0;
      }
      & > ul {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        width: 100%;
        margin: 0;
        padding: 0;

        & > li {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: flex-start;
          width: 100%;
          padding: 10px 0;

          & > span {
            width: 28px;
            height: 28px;
            border-radius: 50%;
            background-color: ${palette.default.green};
            color: ${palette.default.white};
            font-size: 18px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: ${texts.default.black};
          }
          & > h3 {
            font-weight: ${texts.default.semiBold};
            color: ${palette.default.grayText};
            font-size: 20px;
            margin-left: 15px;
          }
        }
      }
    }
  }
`;

export const Image = styled.div`
  width: 60%;
  max-width: 60%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
  overflow: hidden;

  & > .container {
    width: 100%;
    height: 100%;
  }
  & > .container > img {
    width: 85%;
    height: 100%;
  }
`;

export const ButtonSend = styled.button`
  width: 320px;
  margin-top: 25px;
  height: 40px;
  border-radius: 40px;
  background-color: ${palette.default.grayText};
  color: ${palette.default.white};
  font-family: ${texts.default.heavy};
  font-size: 23px;
`;
