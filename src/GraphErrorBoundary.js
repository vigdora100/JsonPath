import React from "react";
import { isEqual } from 'lodash'
import styled from "styled-components";

const GraphReplacer = styled.div`
    border: 3px solid red;
    width: 600px;
    height: 600px;
`;

export default class GraphErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }


    componentDidUpdate(prevProps)  {
        if (!isEqual(this.props.graphJson,prevProps.graphJson)) {
            this.setState({ hasError: false })
        }
      }
  
    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
      }
  
    render() {
      if ( this.state.hasError) {
        // You can render any custom fallback UI
        return (<GraphReplacer><h1>Error: Json is not in Cyto format</h1>
                </GraphReplacer>
                )
      }
      return this.props.children;
    }
  }