let initialState = { json: {},  jsonPathResult: '', query: '' }

const jsonReducer = (state = initialState, action) => {
    switch (action.type) {
        case('UPDATE_INITIAL_JSON') : {
            const json = action.json;
            return Object.assign({}, state, {json:json })
        }
        case('UPDATE_JSON_PATH') : {
            const jsonPathResult = action.jsonPathResult;
            return Object.assign({},state, {jsonPathResult:jsonPathResult })
        }
        case('UPDATE_QUERY') : {
            const query = action.query;
            return Object.assign({},state, { query: query })
        }
         default:
            return initialState;
    }
}

export default jsonReducer


