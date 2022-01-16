import {createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root{
    --red-background:#FF5959;
    --gray:#676FA3;
    --gray-light:#CDDEFF;

    --text-title:#363f5f;
    --text-body:#969cb3;
    --background:#EEF2FF;
    --shape:#FFF;
  }
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body{
    background: var()(--red-background);
    -webkit-font-smoothing:antialiased;
  }

  button{
    cursor:pointer;
  }

  [disabled]{
    opacity: 0.6;
    cursor: not-allowed;
  }
`;