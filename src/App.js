import React from 'react';
import Grid from '@material-ui/core/Grid';

import TextEditor from './components/TextEditor';
import Terminal from './components/Terminal';
import LanguageService from './services/LanguageService';
import GlobalStyle from './components/style/GlobalStyle';
import styled from 'styled-components';
import border from './components/style/border';
import StyledSVG from './components/SvgView';
import Tutorial from './components/tutorial/Tutorial';

const WindowContainer = styled.div`
    ${border}
    margin: 1.5%;
    width: 97%;
    height: 100%;
    overflow-y: auto;
    display: flex;
    align-items: center;
    justify-content: center;
`;


const App = () => {

    const [consoleContent, setConsoleContent] = React.useState("");
    const [code, setCode] = React.useState([]);
    const [success, isSuccess] = React.useState(true);
    return(
        <React.Fragment>
            <GlobalStyle/>
            <Grid container direction={"row"} justify={"center"} spacing={1}>
                <Grid item xs={12} sm={6}>
                    <Grid container justify={"center"}>
                        <Grid item xs={12} style={{height: "48vh"}}>
                            <WindowContainer>
                                <TextEditor
                                    isSuccess={isSuccess}
                                    setCode={setCode}
                                    setConsoleContent={setConsoleContent}
                                    setRenderer={LanguageService.setRenderer}
                                    run={LanguageService.run}
                                />
                            </WindowContainer>
                        </Grid>
                        <Grid item xs={12} style={{height: "48vh"}}>
                            <WindowContainer>
                                <Tutorial/>
                            </WindowContainer>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Grid container justify={"center"}>
                        <Grid item xs={12} style={{height: "68vh"}}>
                            <WindowContainer>
                                <StyledSVG code={code}/>
                            </WindowContainer>
                        </Grid>
                        <Grid item xs={12} style={{height: "28vh"}}>
                            <Terminal content={consoleContent} success={success}/>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

export default App;
