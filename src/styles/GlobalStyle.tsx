import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme.colors.gray[100]};
    color: ${({ theme }) => theme.colors.gray[800]};
    font-family: ${({ theme }) => theme.fonts.body};
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.fonts.heading}
  }

  #__next {
    display: flex;
    min-height: 100vh;
    max-height: 100vh;
    flex-direction: column
  }
`;

export default GlobalStyle;
