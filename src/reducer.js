import initialValue from './InitialValue.json'

let initialState = { json: {value: initialValue, isValid: true},  jsonPathResult: '' }

const jsonReducer = (state = initialState, action) => {
    switch (action.type) {
        case('UPDATE_INITIAL_JSON') : {
            const json = action.json;
            const isValid = action.isValid;
            return Object.assign({},state, {json:{value: json, isValid: isValid} })
        }
        case('UPDATE_JSON_PATH') : {
            const jsonPathResult = action.jsonPathResult;
            return Object.assign({},state, {jsonPathResult:jsonPathResult })
        }
         default:
            return initialState;
    }
}

export default jsonReducer


