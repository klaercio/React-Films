import styled from "styled-components";

export const HeaderBox = styled.div`
    width: 100%;
    background: #1C2EA7;
    height: 8rem;
    display: flex;
    align-items: center;
    color: ${props => props.theme["yellow-700"]};
    
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
                }
            }
         }
    }
`