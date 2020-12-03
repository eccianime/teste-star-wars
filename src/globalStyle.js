import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    color: white;
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: black;
  }

  html, body, button, input{
    font-family: 'Poppins', sans-serif;
  }
`

export { GlobalStyle }