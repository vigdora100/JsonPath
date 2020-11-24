import React from "react";
import styled from "styled-components";
import AceContainer from './AceContainer'
import 'antd/dist/antd.css';
import { Input } from 'antd';
import jp from 'jsonpath'
import { updateJsonPath } from './actions'
import { connect } from 'react-redux'
import { isEqual } from 'lodash'

const AceEditors = styled.div`
    display: flex;
    flex-direction: row;
    margin: 50px;
    justify-content: space-between;
`;

const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 50px;
    justify-content: space-between;
`;

class Home extends React.Component {
    
    constructor(props, context) {
        super(props, context);
        this.state = { jsonPathQuery: '' }
    }

    componentDidUpdate(prevProps, prevState) {
        const { jsonPathQuery } = this.state
        const { updateJsonPath, json } = this.props
        if (!isEqual(json, prevProps.json) || !isEqual(prevState.jsonPathQuery, jsonPathQuery)) {
            if(json.isValid && jsonPathQuery){
            const queryAns = jp.query(this.props.json, jsonPathQuery)
            updateJsonPath(queryAns)
            }
            else{
              if(!json.isValid){
               updateJsonPath('not a json format')
              }
              if(!jsonPathQuery){
                updateJsonPath('query is empty')
              }
            }
        }
      }

    onJsonPathChange = (e) => {
            this.setState({jsonPathQuery: e.target.value})
    }

    render() {
        const { jsonPathResult, json }  = this.props
        return (
            <HomeContainer>
                <h1>Add query here:</h1>
                <Input onChange={this.onJsonPathChange}></Input>
                <AceEditors>
                    <AceContainer value={json.value} title={'Add JSON here:'}></AceContainer>
                        <AceContainer value={jsonPathResult} title={'Result:'}></AceContainer>
                </AceEditors>
            </HomeContainer>
        );
    }
}


    const mapDispatchToProps = {
        updateJsonPath: updateJsonPath
    } 

    const mapStateToProps = (state) => {
        return  {
            json : state.json,
            jsonPathResult: state.jsonPathResult
         }
     }
   
    export default connect(mapStateToProps,mapDispatchToProps)(Home)












