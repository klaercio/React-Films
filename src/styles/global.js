import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import background from '../assets/img/background3.jpg';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Merriweather', sans-serif;
    }

    body {
        color: ${props => props.theme['yellow-700']};
        -webkit-font-smoothing: antialiased;
        background-image: url(${background});
        background-attachment: fixed;
    }

    :focus {
        outline: 0;
        border-radius: 2px;
        animation: time 1s 1;
    }

    @keyframes time {
      to {
        box-shadow: 0 0 0 2px transparent;
      } 
      50% {
        box-shadow: 0 0 0 2px ${(props) => props.theme.white};
      }
      100% {
        box-shadow: 0 0 0 2px transparent;
      }
        
    }

    border-style, input, textarea, button {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }
`

export const Container = styled.div`
  margin: 0 auto;
  width: 80rem;

  .conteudo {
    padding-top: 10rem;
  }
`
