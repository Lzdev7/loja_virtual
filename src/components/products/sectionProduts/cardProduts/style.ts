import { styled } from "styled-components";

export const CardProdutsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2.5rem;
  margin-top: 5rem;

  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.6rem;
    width: 250px;
    height: 300px;
    -webkit-box-shadow: 3px 5px 15px 14px rgba(0,0,0,0.15); 
    box-shadow: 3px 5px 15px 14px rgba(0,0,0,0.15);
    border-radius: 12px;
    transition:all 1s;
    cursor: pointer;


    &:hover {
      transform: scale(1.1);
      margin-top: -20px;
    }

    .cardSectionIcon {
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    h1 {
      font-size: 1.4rem;
    }

    button {
      width: 90px;
      height: 25px;
      border: none;
      border-radius: 30px;
      background: #8B008B;
      font-weight: bold;
      font-size: 0.8rem;
      cursor: pointer;
    }

    
  }

  .imgCardProduts {
    width: 180px;
    height: 130px;
    border-radius: 10px;
  }
`;