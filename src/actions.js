
export const updateJson =(json, isValid)=> {
    return {
        type: "UPDATE_INITIAL_JSON",
        json: json,
        isValid: isValid
    }
}

export const updateJsonPath =(jsonPathResult)=> {
    return {
        type: "UPDATE_JSON_PATH",
        jsonPathResult: jsonPathResult,
    }
}

export const updateQuery =(query)=> {
    return {
        type: "UPDATE_QUERY",
        query: query,
    }
}


