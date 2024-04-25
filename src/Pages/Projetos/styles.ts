import styled from "styled-components";

type ButtonProps = {
  ativo?: boolean;
}

export const Button = styled.button<ButtonProps>`
    font-size: ${props => props.ativo ? '16px' : '12px'};
    background-color: transparent;
    margin-top: 32px;
    margin-right: 32px;
    border: none;
    cursor: pointer;
`
export const ProjectContainer = styled.div`
    display: flex;
    margin-top: 48px;
   
    a {
        text-decoration: none;
        margin: 0;
        max-width: 300px;
        width: 100%;
        max-height: 250px;
        height: 100%;
    }

    img {
        max-width: 300px;
        width: 100%;
        max-height: 250px;
        height: 100%;
        object-fit: contain;
    }

    a:hover {
        font-size: 18px;
    }

    @media (max-width:768px) {
        display: block;

        div {
            margin-left: 0;
        }
    }
`


export const ProjectText = styled.div`
    margin-left: 56px;
    max-height: 250px;
    height: 100%;

    a {
        cursor: pointer;
    }

    h2 {
        margin-top: 0;
    }

    div {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 12px;

        @media (max-width:768px) {

        grid-template-columns: 1fr;
    }
    }
`

export const LinksContainer = styled.div`
    display: flex;
    justify-content: space-between;

    a {
        margin-top: 32px;
        text-decoration: none;
        margin-bottom: 32px;
    }

    a:hover {
        font-size: 18px;
    }

    @media (max-width:768px) {
        display: flex;
        flex-direction: column;

        a {
            margin-top: 16px;
            text-decoration: none;
            margin-bottom: 0;
        }
    }
`