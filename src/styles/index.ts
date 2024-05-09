import { createGlobalStyle } from 'styled-components';
import theme from '@/styles/theme';

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  body {
    font-family: 'Inter', sans-serif;
    background-color: ${(props) => props.theme.color.gray900};
  }
  
  body, input, textarea, button {
    font-family: 'Roboto';
    font-weight: 400;
  }
  
`;
