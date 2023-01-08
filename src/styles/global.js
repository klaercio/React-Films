import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Merriweather', sans-serif;
    }

    body {
        background: ${props => props.theme.white};
        color: ${props => props.theme['yellow-700']};
        -webkit-font-smoothing: antialiased;
    }

    :focus {
        outline: 0;
        box-shadow: 0 0 0 2px ${(props) => props.theme.white};
        border-radius: 2px;
        animation: time 1s 1;
    }

    @keyframes time {
      to {
        box-shadow: 0 0 0 2px transparent;
      } from {
        box-shadow: 0 0 0 2px ${(props) => props.theme.white};
      }
        
    }

    border-style, input, textarea, button {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }
`

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 80rem;
`
