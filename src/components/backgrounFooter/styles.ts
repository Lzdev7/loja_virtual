import { styled } from "styled-components";
import backGrounGeek from "../../assets/backgrounGeek.jpg"

export const BackgroundContent = styled.div`
  margin-top: 10rem;
  height: 500px;
  background-image: url(${backGrounGeek});
  background-position: center;
  background-size: contain;
  display: flex;
  justify-content: center;

  .contentBackground h1 {
    color: #fff;
    font-size: 1.7rem;
    margin-top: 3rem;
  }

`;