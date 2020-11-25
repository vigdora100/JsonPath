import React, { useEffect } from 'react';
import styled from "styled-components";
import AceContainer from './AceContainer'
import 'antd/dist/antd.css';
import { Input } from 'antd';
import jp from 'jsonpath'
import { updateQuery, updateJsonPath } from './actions'
import { connect } from 'react-redux'
import { Header } from './Header'

const AceEditors = styled.div`
    display: flex;
    flex-direction: row;
    margin: 15px 30px 15px 30px;
    justify-content: space-between;
`;

const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const InputContainer = styled.div`
    margin: 30px;
`;

function onJsonPathChange(props, e){
    const { updateQuery } = props
    updateQuery(e.target.value)
}

function Home(props){

    useEffect(() => 
            { 
                const { updateJsonPath, json, query } = props
                try{
                    const queryAns = jp.query(json, query)
                    updateJsonPath(queryAns)
                }catch(e){
                    updateJsonPath('query not valid or empty')
                }
            }, [props.query]);

    
    const { jsonPathResult }  = props

    return (
            <HomeContainer>
                <Header/>
                <InputContainer>
                    <h1>Add query here:</h1>
                    <Input onChange={onJsonPathChange.bind(null,props)}></Input>
                </InputContainer>
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












