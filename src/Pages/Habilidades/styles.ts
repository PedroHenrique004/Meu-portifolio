import styled from "styled-components";

export const SubTitle = styled.h3`
    margin: 24px auto;

    @media (max-width:768px) {
        font-size: 14px;
    }
`


export const ListIcons = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;

    img {
        margin: 48px auto;
        transition: transform 0.2s;
        cursor: pointer;
    }

    img:hover { 
        transform: scale(1.3); 
    }

    @media (max-width:768px) {
        grid-template-columns: 1fr 1fr 1fr;

        img {
            max-width: 48px;
        }
    }
`


export const List = styled.table`
    width: 100%;
    margin-top: 24px;
    border: 1px solid #fff;

    tr {
        max-width: 1024px;
        width: 100%;
    }

    td {
        padding: 8px;
        text-align: center;
    }

    @media (max-width: 768px) {
        tr {
            display: block;
            margin-bottom: 10px;
        }

        td {
            display: block;
            border: none;
        }
    }
`;

export const Skill = styled.td`
    border-right: 1px solid #fff;
    padding: 8px auto;
    width: 200px;

    @media (max-width: 768px) {
        border-right: none;
    }
`;

export const HabilityCont = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;

    img {
        margin: 0;
        margin-top: 48px;
    }

    span {
        margin-top: 8px;
        transition: transform 0.2s;  
        
        @media (max-width: 768px) {
            font-size: 12px;
        }
    }

    span:hover {
        transform: scale(1.3); 
    }
`
