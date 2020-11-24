import React from "react";
import styled from "styled-components";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-json";
import "ace-builds/src-noconflict/theme-monokai";
import { connect } from 'react-redux'
import { updateJson, updateJsonPath }  from './actions';


const Container = styled.div`

`;

class AceContainer extends React.Component {

    constructor(props, context) {
        super(props, context);
    }

    onChange = (newValue)  => {
        const { updateJson,updateJsonPath } =  this.props
        let json = null
        try {
             json = JSON.parse(newValue);
             updateJson(json, true)
        } catch (e) {
            updateJsonPath('json is not Valid')                        
        }
    }

    render() {
        const { value, title } =   this.props
        return (
            <Container>
                <h1> { title }</h1>
                <AceEditor
                    value={JSON.stringify(value,null,2)}
                    placeholder="Add Json here"
                    height="600px"
                    mode="plain_text"
                    theme="monokai"
                    onChange={this.onChange}
                    name="UNIQUE_ID_OF_DIV"
                    editorProps={{
                        $blockScrolling: true
                    }}
                    fontSize={14}
                    showPrintMargin={true}
                    showGutter={true}
                />
           </Container>   
        );
    }
}

const mapDispatchToProps = {
    updateJson: updateJson,
    updateJsonPath: updateJsonPath
} 

export default connect(null,mapDispatchToProps)(AceContainer)











