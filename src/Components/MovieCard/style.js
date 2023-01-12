import styled from "styled-components";

export const Card = styled.li`
    display: flex;
    flex-direction : column;
    align-items : center;

        
    img {
        width : 15rem;
        border-radius : 1rem;
        margin-bottom : 2rem;
        transition: 0.5s;
        border: 1px solid black;
        
        &:hover {
            transform: scale(110%);
        }
    }

    span, p {
        font-size : 1.5rem;
        text-align : center;
        color: ${props => props.theme["gray-900"]};
        font-weight: 900;
    }

    p {
        color: ${props => props.theme["yellow-700"]};
    }
`