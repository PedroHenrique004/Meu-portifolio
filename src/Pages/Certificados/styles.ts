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

    @media (max-width:768px) {
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
`
