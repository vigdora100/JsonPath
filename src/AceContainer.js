import React from 'react';
import styled from "styled-components";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-json";
import "ace-builds/src-noconflict/theme-monokai";
import { connect } from 'react-redux'
import { updateJson, updateJsonPath }  from './actions';
import jp from 'jsonpath'

const Container = styled.div`
`;

function onChange(props,newValue){
    const { updateJson,updateJsonPath,query } =  props
    let json = null
    try {
         json = JSON.parse(newValue);
         updateJson(json)
         const queryAns = jp.query(json, query)
         updateJsonPath(queryAns)
    } catch (e) {
        switch(e.name){
        case 'SyntaxError':
            updateJsonPath('json is not Valid') 
            break;                       
        default:
            updateJsonPath('query not valid or empty') 
        }
    }
}

    function AceContainer(props) {
  
    const { value, title } =  props
    return (
            <Container>
                <h1> { title }</h1>
                <AceEditor
                    value={JSON.stringify(value,null,2)}
                    placeholder="Add Json here"
                    height="600px"
                    width="650px"
                    mode="plain_text"
                    theme="monokai"
                    onChange={onChange.bind(null,props)}
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

const mapDispatchToProps = {
    updateJson: updateJson,
    updateJsonPath: updateJsonPath
} 

const mapStateToProps = (state) => {
    return  {
        query : state.query,
     }
 }

export default connect(mapStateToProps,mapDispatchToProps)(AceContainer)











