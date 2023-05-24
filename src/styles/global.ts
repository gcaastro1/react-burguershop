import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  #root {
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  button {
    cursor: pointer;
    border: none;
    background: transparent;
  }

  ul, ol, li {
    list-style: none;
  }

  h1, h2, h3, h4, h5, h6, p, a, span, li, button, input, label {
    font-family: 'Inter', sans-serif;
    color: ${(props) => props.theme.palette.grayScale.one};
  }

  // resetar a cor do autofill do chrome

  input:-webkit-autofill,
  input:-webkit-autofill:hover, 
  input:-webkit-autofill:focus {
    border: 2px solid ${(props) => props.theme.palette.grayScale.one};
    -webkit-text-fill-color: ${(props) => props.theme.palette.grayScale.one};
    -webkit-box-shadow: 0 0 0px 1000px ${(props) =>
      props.theme.palette.grayScale.five} inset;
    transition: background-color 5000s ease-in-out 0s;
  }
`

export const Container = styled.div`
  width: 1000px;
  max-width: 90%;
  margin: 0 auto;
`
