import styled from "styled-components"
import { Colors } from "../../styles"


export const List = styled.ul`
    @keyframes fadeIn {
        0% {opacity: 0;}
        100% {opacity: 1;}
    }

    display: flex;
    justify-content: center;
    padding: 8px 0;
    background-color: rgba(47, 54, 64, 0.9);
    animation: fadeIn 2s;
    border-left: 1px solid #fff;
    border-right: 1px solid #fff;
    border-bottom: 1px solid #fff;

    li {
        margin: 0 24px;     
    }

    @media (max-width: 768px) {

        a {
            height: 24px;
        }

        img {
            max-width: 24px;
        }

        li {
            padding: 0px;
            margin: 0 8px;
            display: flex;
            align-items: center;
        }

        button {
            margin-left: 8px;
        }
    }
`

export const Button = styled.button`
     @keyframes fadeIn {
        0% {opacity: 0;}
        100% {opacity: 1;}
    }
    animation: fadeIn 2s;  

    background-color: rgba(47, 54, 64, 0.7);
    border-left: 1px solid #fff;
    border-right: 1px solid #fff;
    border-bottom: 1px solid #fff;
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
    cursor: pointer;
    padding: 0 6px;
    padding-top: 8px;

    @media (max-width: 768px) {
        img {
            max-width: 24px;
        }
    }
`

export const Container = styled.div`
    display: flex;
    justify-content: center;
`

export const Li = styled.button`
 
    background-color: transparent;
    padding-right: 16px;
    border: none;
    cursor: pointer;
`