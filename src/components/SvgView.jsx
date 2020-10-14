import { Grid } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import * as Theme from './style/theme';

const StyledSVG = styled.svg`
    width: 30vw;
    height: 30vw;
    border: 1px solid ${Theme.codeColor};
    background-color: black;
`;

const MIN_X = "0";
const MIN_Y = "0";
const MAX_X = "500";
const MAX_Y = "500";

const RED_COLOR_PROP = "#FF0000";
const GREEN_COLOR_PROP = "#00FF00";
const BLUE_COLOR_PROP = "#FF0000";
const WHITE_COLOR_PROP = "#FFFFFF";

const SvgView = (props) => {
    const ref = React.useRef();
    console.log(ref.current);
    return (
            <StyledSVG ref={ref} viewBox={`${MIN_X} ${MIN_Y} ${MAX_X} ${MAX_Y}`}>
                <polygon points="200,10 250,190 160,210" style={{fill:"lime",stroke:"purple",strokeWidth:1}} />
            </StyledSVG>
    );
};

export default SvgView;
