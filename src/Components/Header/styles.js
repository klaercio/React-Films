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
            z-index: 100;
            padding-left: 2rem;

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
            z-index: 100;
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

    .menuMobile {
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        height: 100vh;
        background-color: #1C2EA7;
        display: none;
        visibility: hidden;
        transform: translateY(-100%);
        color: gray;
        transition: all 1s linear;

        nav {
            margin: 0 auto;
            text-align: center;
            padding-top: 10rem;
            text-decoration: none;
            
            ul {
                display: flex;
                flex-direction: column;
                font-size: 2rem;
                gap: 2rem;
                li{
                    a {
                        text-decoration: none;
                        color: #F7D354;
                    }
                }
            }
        }
        form {  
                margin-top: 2rem;
                display: flex;
                gap: 8px;
                justify-content: center;

                input {
                    height: 60px;
                    border: transparent;
                    width: 20rem;
                    background-color: ${props => props.theme["gray-100"]};
                    border-radius: 50px;
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
    
    .menuMobile.mostrarMenu {
        visibility: visible;
        display: block;
        top: 0;
        transform: translateY(0%);

        @media screen and (min-width: 1024px){
            display: none;
            visibility: hidden;
        }
    }
`

export const ListBotao = styled(List)`

    display: none;
    visibility: hidden;

    &:hover {
        cursor: pointer;
    }

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

    &:hover {
        cursor: pointer;
    }

    @media screen and (max-width: 1024px) {
        display: block;
        visibility: visible;
        margin: auto 0;
        width: 64px;
        height: 64px;
    }
`