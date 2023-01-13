import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  html, body, #__next {
    height: 100%;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
    // .ant-tooltip-inner {
    //   background: rgba(35, 11, 92, 0.35);
    //   box-shadow: 0 8px 32px 0 rgb(31 38 135 / 37%);
    //   backdrop-filter: blur(13.5px);
    //   -webkit-backdrop-filter: blur(13.5px);
    //   color: white;
    //   padding: 1.5rem;
    // }
  }
`

export default GlobalStyles
