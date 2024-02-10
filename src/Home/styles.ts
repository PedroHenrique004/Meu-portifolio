import styled from "styled-components";
import { Colors } from "../styles";

export const Introduction = styled.div`
    display: flex;
    padding-top: 110px;

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
`


export const Title = styled.h1`
    font-weight: bold;
    font-size: 128px; 
    letter-spacing: 3px;

`

export const Text = styled.p`
    font-weight: bold;
    font-size: 64px;
    margin-top: 85px;
    margin-bottom: 163px;
    line-height: 80px;
    letter-spacing: 1px;
    width: 850px;

    span {
        color: ${Colors.buttonColor};
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
`

export const TextHover = styled.p`
    font-size: 20px;
    margin-top: 48px;
`


