import { SHAPE_TYPE, SHAPE_FORMS, COLORS } from '../services/LanguageConstants';
import React from 'react';
import styled from 'styled-components';
import * as Theme from './style/theme';
import shape from '@material-ui/core/styles/shape';

const StyledSVG = styled.svg`
    width: 30vw;
    height: 30vw;
    border: 1px solid ${Theme.codeColor};
    background-color: black;
`;

const MIN_X = 0;
const MIN_Y = 0;
const MAX_X = 500;
const MAX_Y = 500;

const GRID_SIZE = 50;

const RED_COLOR_PROP = "#FF0000";
const GREEN_COLOR_PROP = "#00FF00";
const BLUE_COLOR_PROP = "#0000FF";
const WHITE_COLOR_PROP = "#FFFFFF";
const BLACK_COLOR_PROP = "#000000";

const getColor = (color) => {
    switch(color.color) {
        case COLORS.GREEN:
            return GREEN_COLOR_PROP;
        case COLORS.BLUE:
            return BLUE_COLOR_PROP;
        case COLORS.RED:
            return RED_COLOR_PROP;
        case COLORS.WHITE:
            return WHITE_COLOR_PROP;
        case COLORS.BLACK:
            return BLACK_COLOR_PROP;
    }
};

const sortShapes = (result) => {
    switch(result.type) {
        case SHAPE_TYPE.Simple:
            return [result]
        case SHAPE_TYPE.Combined:
            return result.shapes.map(shape =>shape);
        default:
            return []
    }
};

const getTilesAmount = (shapesAmount) => {
    let tilesAmount = 1;
    while(tilesAmount * tilesAmount < shapesAmount) {
        tilesAmount++;
    }
    return tilesAmount;
};

const subGridPosition = (index, tilesAmount, grid) => {
    return {
        y: (grid.minY) + Math.floor(index / tilesAmount) * (grid.maxY - grid.minY) / tilesAmount,
        x: (grid.minX) + index % tilesAmount * (grid.maxX  - grid.minX) / tilesAmount
    };
};

const calculateShapeWidth = (tilesAmount, grid) => {
    return (grid.maxX - grid.minX) / tilesAmount;
};

const renderShapes = (shapes, grid) => {
    
    const tilesAmount = getTilesAmount(shapes.length);
    return (
        <React.Fragment>
            {shapes.map((shape, index) => renderShape(shape, index, tilesAmount, grid))}
        </React.Fragment>
    );
};


const renderShape = (shape, index, tilesAmount, grid) => {
    const position = subGridPosition(index, tilesAmount,  grid);
    const shapeWidth = calculateShapeWidth(tilesAmount, grid);
    switch(shape.form) {
        case SHAPE_FORMS.Circle:
            return <circle key={index} cx={position.x+shapeWidth/2} cy={position.y+shapeWidth/2} r={shapeWidth/2} fill={getColor(shape.color)} />
        case SHAPE_FORMS.Triangle:
            return <polygon
            key={index}
            points={`${position.x+shapeWidth/2},${position.y} ${position.x + shapeWidth},${ position.y + shapeWidth} ${position.x}, ${position.y + shapeWidth}`}
            style={{fill:getColor(shape.color)}} />
        case SHAPE_FORMS.Square:
            return <rect key={index} x={`${position.x}`} y={`${position.y}`} width={shapeWidth} height={shapeWidth} fill={getColor(shape.color)} />
    }
};

const shapesMock = {
    type: SHAPE_TYPE.Combined,
    shapes: [

        {
            type: SHAPE_TYPE.Simple,
            form: SHAPE_FORMS.Triangle,
            color: {
                type: "COLOR",
                color: COLORS.RED
            }
        },
        {
            type: SHAPE_TYPE.Simple,
            form: SHAPE_FORMS.Triangle,
            color: {
                type: "COLOR",
                color: COLORS.RED
            }
        },
        {
            type: SHAPE_TYPE.Simple,
            form: SHAPE_FORMS.Triangle,
            color: {
                type: "COLOR",
                color: COLORS.RED
            }
        }
    ]
}

class Grid {
    constructor(fullLength, tileSize, index) {
        const tilesAmount = Math.sqrt(fullLength);
        this.minX = index % tilesAmount * tileSize;
        this.maxX = (index % tilesAmount + 1) * tileSize;
        this.minY = Math.floor(index / tilesAmount) * tileSize;
        this.maxY = Math.floor(index / tilesAmount + 1) * tileSize;
    }
}

const SvgView = (props) => {
    const shapes = props.code ? sortShapes(props.code) : [];
    const tiles = Math.pow(MAX_X / GRID_SIZE, 2);
    const render = Array.from(Array(tiles).keys()).flatMap(key =>
        renderShapes(shapes, new Grid(tiles, GRID_SIZE, key))
    )
    console.log(render);
    return (
        <StyledSVG viewBox={`${MIN_X} ${MIN_Y} ${MAX_X} ${MAX_Y}`}>
            {render}
        </StyledSVG>
    );
};

export default SvgView;
