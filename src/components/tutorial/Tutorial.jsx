import { Grid } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import Button from '../common/Button';
import * as Theme from '../style/theme';
import ReactMarkdown from 'react-markdown/with-html';
import content from './tutorialContent';

const ContentContainer = styled.div`
    width: 100%;
    height: 41.5vh;
    background: ${Theme.primaryColor};
    overflow-y: auto;
    color: ${Theme.codeColor};
    font-size: 1.5rem;
`;

const FooterContainer = styled.div`
    width: 100%;
    height: 4vh;
    box-sizing: border-box;
    background: ${Theme.primaryColor};
    border-top: solid ${Theme.codeColor} 0.1rem;
`;

const PageCounter = styled.h3`
    color: ${Theme.codeColor};
    font-size: 1.2rem;
    margin: 0rem;
`;

const Paragraph = styled.p`
    color: ${Theme.codeColor};
    font-size: 1.5rem;
    margin: 1rem;
`;


const Tutorial  = (props) => {
    const [page, setPage] = React.useState(0);
    const ref = React.useRef();
    return (
        <Grid container>
            <Grid xs={12}>
                <ContentContainer ref={ref}>
                    <ReactMarkdown escapeHtml={false} source={content[page]}/>
                </ContentContainer>
            </Grid>
            <Grid xs={12}>
                <FooterContainer>
                    <Grid container justify={"space-around"} alignItems={"center"}>
                        <Grid item>
                            <Button onClick={() => {
                                setPage(Math.max(0, page-1));
                                ref.current.scrollTop = 0;
                            }} style={{margin: "0.5rem"}}>
                                {"<<"}
                            </Button>
                        </Grid>
                        <Grid item>
                            <PageCounter style={{margin: "0.5rem"}}>
                                {page + 1}/{content.length}
                            </PageCounter>
                        </Grid>
                        <Grid item>
                            <Button
                                onClick={() => {
                                    setPage(Math.min(content.length-1, page+1));
                                    ref.current.scrollTop = 0;
                                }}
                                style={{margin: "0.5rem"}}
                            >
                                {">>"}
                            </Button>
                        </Grid>
                    </Grid>
                </FooterContainer>
            </Grid>
        </Grid>
    );
};

export default Tutorial;
