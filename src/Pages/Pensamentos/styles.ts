import { styled } from "styled-components";

export const Title = styled.div`
    max-width: 1024px;
    width: 100%;
    display: flex;
    align-items: center;


    button {
        background-color: transparent;
        border: none;   
        cursor: pointer;
        margin: 0;

    img {
        max-width: 40px;
        margin: 0;
        transition: transform 0.3s ease-in-out;
    }

    &.active img {
        transform: rotate(-180deg); // 
    }
    }


    h2 {
        margin: 0 24px;
    }

    @media (max-width: 768px) {

        img {
            max-width:18px;
            width: 100%;
        }

        h2 {
            font-size: 16px;
        }
    }
`

export const Content = styled.div`
    display: block;
    justify-content: left;  
    border-top: 1px solid #fff;
    border-bottom: 1px solid #fff;
    padding: 24px 0px;
    margin-top: 32px;

    a {
        text-decoration: none;
        cursor: pointer;
        color: blanchedalmond;
    }

    a:hover {
        font-size: 18px;
    }
`

export const About = styled.div`
    
`

