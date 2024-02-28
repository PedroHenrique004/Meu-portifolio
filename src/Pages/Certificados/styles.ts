import styled from 'styled-components';

export const CertContainer = styled.div`
    margin-top: 48px;

    display: flex;
    align-items: center;
    gap: 20px;

    img {
        width: 50%;
        height: auto;
        object-fit: cover;
    }

    div {
        width: 50%;
        margin-top: 48px;
    }

    @media (max-width: 768px) {
        display: block;
        font-size: 14px;

        img {
            width: 100%;
            height: auto;
            object-fit: cover;
        }

        div {
            max-width: 100%;
            width: 100%;
            margin: 0;
        }
    }

    @media (min-width: 769px) and (max-width: 1024px) {
        img {
            width: 40%;
        }

        div {
            width: 40%;
        }
    }

    @media (min-width: 1025px) and (max-width: 1280px) {
        img {
            width: 40%;
        }

        div {
            width: 40%;
        }
    }
`
