import styled from "styled-components";
import { Colors } from "../../styles";

export const Introduction = styled.div`
    display: flex;
    padding-top: 75px;

    @media (max-width: 768px) {
        padding-top: 40px;
        margin: 0 auto;
    }

`

export const CelContainer = styled.div`

    @media (max-width: 768px) {
        max-width: 70%;
        width: 100%;
        margin: 0 auto;
    }  
`


export const Images = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: 2px;

    & > img:nth-child(1) {
        grid-column: 1;
        grid-row: 1;
        
    }

    & > img:nth-child(2) {
        grid-column: 2;
        grid-row: 2;    
    }

    & > img:nth-child(3) {
        grid-column: 2;
        grid-row: 1;
    }

    @media (max-width: 768px) {  
            display: none;
    }
`


export const Title = styled.h1`
    font-weight: bold;
    font-size: 128px; 
    letter-spacing: 3px;

    @media (max-width: 768px) {
        font-size: 64px;
    }

    @media (max-height: 750px) {
        font-size: 32px;
    }

`

export const Text = styled.p`
    font-weight: bold;
    font-size: 56px;
    margin-top: 85px;
    margin-bottom: 120px;
    line-height: 80px;
    letter-spacing: 1px;
    width: 850px;

    span {
        color: ${Colors.buttonColor};
    }

    @media (max-width: 768px) {
        width: auto;
        font-size: 16px;
        line-height: 20px;
        letter-spacing: 1px;
        margin-bottom: 50px;
        margin-top: 50px;
    }

    @media (max-height: 750px) {
        width: auto;
        font-size: 16px;
        line-height: 20px;
        letter-spacing: 1px;
        margin-bottom: 20px;
        margin-top: 20px;  
    } 

    @media (max-height: 670px) {
        font-size: 14px;
    }
`


export const Button = styled.button`
    padding: 18px 40px;
    background-color: rgba(0, 0, 0, 0.5);
    font-weight: bold;
    font-size: 36px;
    margin-right: 50px;
    border-radius: 12px;
    border: 1px solid ${Colors.buttonColor};
    transition: all 0.3s ease-in-out;

    &:hover {
        cursor: pointer;
        background-color: ${Colors.buttonColor};
    } 

    @media (max-width: 768px) {
        font-size: 18px;
        max-width: 300px;
        width: 100%;
        margin: 0 auto;
        margin-bottom: 16px;
        margin-right: 0px;
        margin-top: 16px;
        
    }

    @media (max-height: 750px) {
        font-size: 18px;
        max-width: 300px;
        width: 100%;
        margin: 0 auto;
        margin-right: 0px;
        margin-top: 16px;
        
    }   
`

export const TextHover = styled.p`
    font-size: 20px;
    margin-top: 48px;

    @media (max-width: 768px) {
        margin-top: 24px;
        font-size: 14px;
    }

`

export const Mensage = styled.p`
    display: none;

    @media (max-width: 768px) {
        display: block;
        margin-bottom: 20px;
    }

    @media (max-height: 670px) {
        font-size: 12px;
    }
`

