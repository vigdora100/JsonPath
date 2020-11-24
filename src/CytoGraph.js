import React from "react";
import styled from "styled-components";
import { connect } from 'react-redux'
import CytoscapeComponent from 'react-cytoscapejs';
import GraphErrorBoundary from './GraphErrorBoundary'

const Container = styled.div`
      display: flex;
      flex-direction: column;
      width: 600px;
`;

const GraphReplacer = styled.div`
    border: 3px solid red;
    width: 600px;
    height: 600px;
`;

class GraphContainer extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = { resetError: false }
    }
    
    render() {
        const { graphJson } = this.props
            return (
                <Container>
                    <h1> Graph will apper here </h1>
                    <GraphErrorBoundary graphJson={graphJson} >
                    { graphJson ? <CytoscapeComponent  elements={CytoscapeComponent.normalizeElements(graphJson)} 
                    style={ { width: '600px', height: '600px', 'borderColor': 'red', 'borderStyle': 'solid' } } 
                    minZoom={1.0}
                    maxZoom={1.5}
                    />  : <GraphReplacer> input not a valid json </GraphReplacer>}
                    </GraphErrorBoundary>
                </Container>   
            );
    }
}

const mapStateToProps = (state) => {
    return  {
        graphJson : state.graphJson
     }
 }

export default connect(mapStateToProps,null)(GraphContainer)











