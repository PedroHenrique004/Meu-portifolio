import { createGlobalStyle } from "styled-components";

import background from "./images/fundo.png"

export const Colors = {
    backgroundColor: '#2F3640',
    textColor: '#FFFFFF',
    buttonColor: '#FED330',
}

const  GlobalStyle = createGlobalStyle`
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        font-family: Raleway, sans-serif;
        color: ${Colors.textColor};

        margin: 0 auto;

    }

    .container {
        display: flex;
        max-width: 1450px;
        width: 100%;
        justify-content: center;
        align-items: center;

        @media (max-width: 768px) {
            max-width: 100%;
            width: 100%;
        }

    }

    .fundo {
        background-color: ${Colors.backgroundColor};
        background-image: url(${background});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        max-width: 1920px;
        width: 100%;
        min-height: 100vh;

        @media (max-width: 768px) {
            min-height: 100vh;
        }
    }   
`

export default GlobalStyle

