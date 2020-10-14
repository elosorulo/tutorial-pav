import styled from 'styled-components';
import * as Theme from '../style/theme';

const Button = styled.button`
    background-color: ${Theme.codeColor};
    color: ${Theme.secondaryColor};
    border: solid ${Theme.secondaryColor} 0.1rem;
    align-self: center;
    font-size: 1.2rem;
    padding: 0.5rem 1rem;
    outline: none;
        transition: background-color 0.3s, color 0.2s ease;
    &:hover {
        transform: scale(1.05, 1.05);
    }
    &:active {
        transform: scale(0.95, 0.95);
        background-color: ${Theme.secondaryColor};
        color: ${Theme.codeColor};
        border: solid ${Theme.codeColor} 0.1rem;
        transition: background-color 0s, color 0s ease;
    }
`;

export default Button;
