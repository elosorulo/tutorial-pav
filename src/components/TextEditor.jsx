import * as React from "react";
import { Controlled as CodeMirror } from "react-codemirror2";

// background: #101010;
// color: #fff;
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";
import "codemirror/mode/jsx/jsx";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/dracula.css";
import "./editor.css";
import "./theme.css";
import Grid from "@material-ui/core/Grid";
import styled from "styled-components";
import * as Theme from './style/theme';
import Button from "./common/Button";

const options = {
  theme: "dracula",
  autoCloseBrackets: true,
  cursorScrollMargin: 48,
  mode: "jsx",
  lineNumbers: true,
  indentUnit: 2,
  tabSize: 2,
  styleActiveLine: true,
  viewportMargin: 99,
  height: "100%"
};

const HeaderTitle = styled.h1`
  font-size: 1.5vmax;
  margin: 0rem;
`;

const HeaderContainer = styled.div`
  background-color: ${Theme.codeColor};
  color: ${Theme.primaryColor};
  height: 4vh;
  text-decoration: underline;
`;

const EditorHeader = (props)=> {
  return(
    <HeaderContainer>
        <Grid container alignItems={"center"} justify={"space-between"}>
          <Grid item style={{ marginLeft:"1rem"}}>
            <HeaderTitle>Editor</HeaderTitle>
          </Grid>
          <Grid item style={{ marginRight:"1rem", marginTop: "0.2rem"}}>
            <Button onClick={ e => {
              e.preventDefault();
              props.execute();
            }}>Ejecutar</Button>
          </Grid>
        </Grid>
    </HeaderContainer>
  );
};

const TextEditor = (props) => {
    const [content, setContent] = React.useState("");

    const onBeforeChange = (editor, data, value) => {
        setContent(value);
    };

    const execute = () => {
        try {
          const formatted = JSON.stringify(props.run(content), null, "\t");
          props.setConsoleContent(formatted);
          console.log(formatted);
        } catch(error) {
          console.log(error);
          props.setConsoleContent(error.message);          
        }
    };

    return (
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <EditorHeader execute={execute}/>
        </Grid>
        <Grid item xs={12}>
          <CodeMirror
              name="js"
              value={content}
              options={options}
              onBeforeChange={onBeforeChange}
          />
        </Grid>
      </Grid>
    );
}

export default TextEditor;
