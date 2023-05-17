import { ArrowUp } from "@phosphor-icons/react";
import styled from "styled-components";

export const ButtonUp = styled(ArrowUp)`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #1C2EA7;
    color: #F7D354;
    position: fixed;
    bottom: 2rem;
    right: 4rem;
    transition: 0.3s;

    &:hover {
        filter: brightness(130%);
        scale: 110%;
    }
`