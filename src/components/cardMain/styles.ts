import { styled } from "styled-components";

export const CardMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  justify-content: center;
  width: 500px;
  height: 200px;
  margin-top: 2rem;
  border-radius: 1rem;
  background: #fff;
  -webkit-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
  -moz-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
  box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
  opacity: 0.7;
  cursor: pointer;


  h4 {
    color: #8B008B;
    font-size: 1.3rem;
  }

  p {
    color: #000;
    font-weight: bold;
    font-size: 1.4rem;
  }

  button {
    width: 100px;
    height: 40px;
    border: none;
    background-color: #8B008B;
    border-radius: 10px;
    color: #fff;
    font-size: 1.2rem;
    cursor: pointer;
  } 
`;