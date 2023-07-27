import styled from "styled-components";
import img from "../../assets/fundo_loja.jpg" 

export const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    height: 4rem;
    justify-content: space-around;
    gap: 3rem;
    border-bottom: 1px solid #000;

    .listaHeader {
        display: flex;
        align-items: center;
        gap: 3rem;
    }

    .listaHeader span {
        color: #8B008B;
    }

    ul {
        display: flex;
        gap: 3rem;
        font-weight: bold;
        cursor: pointer;
    }

    .contentCart {
        display: flex;
        align-items: center;
        gap: 1rem;
    }

    .contentCart h1 {
        font-size: 1.3rem;
    }

    .cartQuantity {
        background:#000;
        color: white;
        width: 25px;
        height: 25px;
        display: flex;
        align-items: center;
        border-radius: 100%;
        justify-content: center;
    }

    .cartQuantity span {
        font-size: 1rem;
    }
    
    
`;

export const CartContainerMain = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 42.5rem;
    background-image:url(${img});
    background-size: cover;
    background-position: center;
`; 

export const ContentCartMain = styled.div`
    display: flex;
    justify-content: space-around;
`;