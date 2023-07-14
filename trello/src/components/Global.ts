import { styled } from "styled-components";

export const Button = styled.div`
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: none;
    font-size: 30px;
    &:hover {
        cursor: pointer;
        scale: 1.2;
    }
`;
