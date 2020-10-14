import { Grid } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import Button from '../common/Button';
import * as Theme from '../style/theme';

const ContentContainer = styled.div`
    width: 100%;
    height: 41.5vh;
    background: ${Theme.primaryColor};
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

const content = [
    `Página 1`,
    `Página 2`,
    `Página 3`,
    `Página 4`,
    `Página 5`
]

const Tutorial  = (props) => {
    const [page, setPage] = React.useState(0);
    return (
        <Grid container>
            <Grid xs={12}>
                <ContentContainer>
                    <Paragraph>
                        {content[page]}
                    </Paragraph>
                </ContentContainer>
            </Grid>
            <Grid xs={12}>
                <FooterContainer>
                    <Grid container justify={"space-around"} alignItems={"center"}>
                        <Grid item>
                            <Button onClick={() => setPage(Math.max(0, page-1))} style={{margin: "0.5rem"}}>
                                {"<<"}
                            </Button>
                        </Grid>
                        <Grid item>
                            <PageCounter style={{margin: "0.5rem"}}>
                                {page + 1}/{content.length}
                            </PageCounter>
                        </Grid>
                        <Grid item>
                            <Button onClick={() => setPage(Math.min(content.length-1, page+1))} style={{margin: "0.5rem"}}>
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
