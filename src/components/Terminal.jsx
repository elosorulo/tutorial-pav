import React from 'react';
import styled from 'styled-components';
import * as Theme from './style/theme';
import border from './style/border';

const TerminalContainer = styled.div`
    margin: 1.5%;
    width: 94%;
    padding: 1.5%;
    height: 90%;
    background: ${Theme.primaryColor};
    color: ${props => props.success ? "#00FF00" : "#FF0000"};
    font-family: 'Operator Mono', 'Source Sans Pro', Menlo, Monaco, Consolas,
		Courier New, monospace;
    font-size: 1rem;
    overflow-y: auto;
    ${border};
`;

const formatContent = (content) => {
    return <React.Fragment>
            <React.Fragment>{"> "}</React.Fragment>
            {(content).split("\n").map(line =>
                <React.Fragment>{line.replace("\t", '\xa0' + '\xa0')}<br/></React.Fragment>
            )}
        </React.Fragment>
}

const Terminal = (props) => {

    return (
        <TerminalContainer success={props.success}>
            <p>
            {
                props.content === "{}" ? ">" : formatContent(props.content)
            }
            </p>
        </TerminalContainer>
    );
};

export default Terminal;
