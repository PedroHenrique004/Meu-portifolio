import styled from "styled-components";


export const Imagens = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 16px;

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
