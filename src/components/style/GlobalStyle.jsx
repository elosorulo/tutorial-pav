import { createGlobalStyle } from 'styled-components';
import * as Theme from './theme';

const GlobalStyle = createGlobalStyle`
    body {
        overflow-x: hidden;
        background-color: ${Theme.secondaryColor};
    }
    ::-webkit-scrollbar {
        width: 0.6rem;
    }
    ::-webkit-scrollbar-track {
        background-color: ${Theme.primaryColor};
        border: 0.01rem solid ${Theme.codeColor};
        border-radius: 0.2rem;
    }

    ::-webkit-scrollbar-thumb {
        background-color: ${Theme.codeColor};
        border-radius: 0.2rem;
    }
`;

export default GlobalStyle;
