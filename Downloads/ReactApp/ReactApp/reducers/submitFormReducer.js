import { SUBMIT_FORM } from "../actions/types";

const initialState = {
    submitted_data : null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SUBMIT_FORM:
            return {
                ...state,
                submitted_data : action.payload
            }
        default:
            return state;  
    }
}