import React, { useEffect } from 'react';
import styled from "styled-components";
import AceContainer from './AceContainer'
import 'antd/dist/antd.css';
import { Input } from 'antd';
import jp from 'jsonpath'
import { updateQuery, updateJsonPath } from './actions'
import { connect } from 'react-redux'

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

function Home(props){

    useEffect(() => 
            { 
                console.log('effecting')
                const { updateJsonPath, json, query } = props
            try{
                const queryAns = jp.query(json, query)
                updateJsonPath(queryAns)
            }catch(e){
                updateJsonPath('query not valid or empty')
            }}
  , [props.query]);


    const onJsonPathChange = (e) => {
        const { updateQuery } = props
        updateQuery(e.target.value)
    }
    
    const { jsonPathResult }  = props

    return (
            <HomeContainer>
                <h1>Add query here:</h1>
                <Input onChange={onJsonPathChange}></Input>
                <AceEditors>
                    <AceContainer title={'Add JSON here:'}></AceContainer>
                        <AceContainer value={jsonPathResult} title={'Result:'}></AceContainer>
                </AceEditors>
            </HomeContainer>
        );

}

    const mapStateToProps = (state) => {
        return  {
            json : state.json,
            jsonPathResult: state.jsonPathResult,
            query: state.query,
         }
     }

     const mapDispatchToProps = {
        updateQuery: updateQuery,
        updateJsonPath: updateJsonPath
    } 
    
    export default connect(mapStateToProps,mapDispatchToProps)(Home)












