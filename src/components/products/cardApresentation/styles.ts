import { styled } from "styled-components";

export const CardApresentationContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 10rem;

  .cardApresentation {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 550px;
    height: 250px;
    border-radius: 22px;
    gap: 4rem;
    text-align: right;
    box-shadow: 3px 13px 82px 2px rgba(0,0,0,0.5);
    -webkit-box-shadow: 3px 13px 82px 2px rgba(0,0,0,0.5);
    -moz-box-shadow: 3px 13px 82px 2px rgba(0,0,0,0.5);
    transition: all 1s ease-in-out;
    cursor: pointer;

    &:hover {
      scale: 1.1;
    }

  }

  .cardApresentation h1 {
    color: #000;
  }

  .cartApresntatationContent {
    display: flex;
    flex-direction: column;
    width: 10rem;
    gap: 1rem;
  }

  .cartApresntatationContent button {
    height: 40px;
    border-radius: 15px;
    border: none;
    background: #FFF;
    color: #8B008B;
    font-weight: bold;
    font-size: 1.3rem;
    cursor: pointer;
  }

  .secaocasaImg {
    width: 150px;
    height: 150px;
    border-radius: 20px;
  }

`;