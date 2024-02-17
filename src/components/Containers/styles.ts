import { styled } from "styled-components";

export const BigContainer = styled.div`
    max-width: 1324px;
    width: 100%;
    background-color: rgba(47, 54, 64, 0.9);
    justify-content: center;
    align-items: center;

    @media (max-width: 768px) {
        max-width: 80%;
        width: 100%;
        background-color: rgba(47, 54, 64, 0.5);

        h2 {
            font-size: 20px;
        }

        p {
            font-size: 12px;
            line-height: 25px;
        }
    }
`

export const TextContainer = styled.div`
    display: block;
    max-width: 1024px;
    width: 100%;
    justify-content: center;
    align-items: center;
    line-height: 40px;
    position: relative;
    padding-bottom: 100px;
    

    @media (max-width: 768px) {
        max-width: 80%;
        width: 100%;
    }

    h2 {
        margin-top: 16px;
        margin-bottom: 32px;
    }

    p {
        margin: 16px auto;
    }

`