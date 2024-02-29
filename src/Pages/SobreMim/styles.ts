import styled from "styled-components";


export const Imagens = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 16px;

    @media screen and (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
        margin-top: 24px;

        img {
            display: block;
        }
    }

    @media (max-width: 768px) {
        display: block;
        text-align: center;
    }


`

export const Imagem = styled.img`
    max-width: 300px;
    max-height: 300px;
    object-fit: cover;
    margin: 16px auto;

    @media screen and (min-width: 819px) and (max-width: 821px) and (orientation: portrait) {
        max-width: 150px;
        max-height: 150px;
    }

    @media screen and (min-width: 834px) and (max-width: 1194px) and (orientation: portrait) {
        max-width: 150px;
        max-height: 150px;
    }

    @media (max-width: 768px) {
        
        max-width: 150px;
        width: 100%;
        max-height: 150px;
        height: 100%;
        object-fit: cover;
    }   
`

export const Li = styled.button`
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
 
    background-color: transparent;
    padding-right: 16px;
    border: none;
    cursor: pointer;

    @media (max-width: 768px) {
        img {
            max-width: 48px;
        }
    }
`
