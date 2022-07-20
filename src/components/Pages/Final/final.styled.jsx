import styled from "styled-components";
import * as palette from "../../../constants/colors";
import * as texts from "../../../constants/textsFonts";

export const FinalContainer = styled.section`
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
    & > .name {
      font-size: 30px;
      width: 100%;
      margin: 20px 0;
      display: flex;
      flex-direction: column;
      font-weight: ${texts.default.black};
      color: ${palette.default.black};
    }

    & > .document {
      font-size: 25px;
      width: 100%;
      margin: 20px 0;
      display: flex;
      flex-direction: column;
      font-weight: ${texts.default.semiBold};
      color: ${palette.default.grayMedium};
    }

    & > .service {
      font-size: 28px;
      width: 100%;
      margin: 20px 0;
      display: flex;
      flex-direction: column;
      font-weight: ${texts.default.black};
      color: ${palette.default.black};
    }

    & > .location {
      width: 100%;
      height: 50px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      margin-top: 20px;
      padding: 5px;

      & > .title {
        font-size: 24px;
      }

      & > p:first-of-type {
        margin-top: 5px;
      }
      & > p {
        font-size: 18px;
        color: ${palette.default.grayMedium};
      }
    }

    & > .captcha {
      width: 80%;
      margin: 25px 0;
      background-color: red;
      align-self: flex-start;
      opacity: 0.7;
    }
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
