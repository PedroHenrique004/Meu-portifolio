import styled, { createGlobalStyle } from "styled-components";

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
    }

    .container {
        max-width: 1450px;
        width: 100%;
        margin: 0 auto;
    }

    .fundo {
        background-color: ${Colors.backgroundColor};
        background-image: url(${background});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        max-width: 1920px;
        width: 100%;
        height: 100vh;
    }   
`

export default GlobalStyle
