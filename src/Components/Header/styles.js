import styled from "styled-components";
import { List, X} from "@phosphor-icons/react";

export const HeaderBox = styled.div`
    width: 100%;
    background: #1C2EA7;
    height: 8rem;
    display: flex;
    align-items: center;
    color: ${props => props.theme["yellow-700"]};
    position: fixed;
    z-index: 1;
    
    header {
        max-width: 1200px;
        margin: 0 auto;
        width: 80rem;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .logo {
            display: flex;
            align-items: center;
            gap: 8px;

            svg {
                color: ${props => props.theme["yellow-700"]};
            }

            P {
                font-weight: bold;
            }
        }

        .navegacao {
            display: flex;
            flex-direction: column;
            gap: 8px;
            width: 30%;
            nav {
                ul {
                    display: flex;
                    gap: 8px;
                    list-style: none;

                    li {
                        a{
                            text-decoration: none; 
                            color: ${props => props.theme["yellow-700"]};
                            font-weight: bold;
                            &:hover {
                                filter: brightness(120%);
                            }
                        }

                        .active {
                            border-bottom: 2px solid ${props => props.theme["yellow-700"]};
                        }
                    }
                }

            }

            form {
                display: flex;
                gap: 8px;

                input {
                    border: transparent;
                    width: 100%;
                    background-color: ${props => props.theme["gray-100"]};
                    border-radius: 2px;
                    text-align: center;
                }

                button {
                    background: transparent;
                    border: transparent;
                    color: ${props => props.theme["yellow-700"]};

                    svg {
                        font-size: 30px;
                    }

                    &:hover {
                        cursor: pointer;
                    }
                }
            }
         }
         .menuBotao {
            position: absolute;
         }

          @media screen and (max-width: 1024px) {
            .navegacao {
                display: none;
                visibility: hidden;
            }

            .menuBotao {
                right: 1rem;
            }
         }
    }
`

export const ListBotao = styled(List)`

    display: none;
    visibility: hidden;

    @media screen and (max-width: 1024px) {
        display: block;
        visibility: visible;
        margin: auto 0;
        width: 64px;
        height: 64px;
    }
`

export const CloseList = styled(X)`
    display: none;
    visibility: hidden;

    @media screen and (max-width: 1024px) {
        display: block;
        visibility: visible;
        margin: auto 0;
        width: 64px;
        height: 64px;
    }
`