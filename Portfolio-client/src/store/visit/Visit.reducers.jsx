import {
    GET_VISIT_REQUEST,
    GET_VISIT_SUCCESS,
    GET_VISIT_FAILURE
} from './Visit.actions'

let initialState = {
    visit: [],
    visitLoading: true,
    visitError:''
}

const visitReducers = (state = initialState, action) => {
    switch (action.type) {
      
        case GET_VISIT_REQUEST:
            return {
                ...state,
                visitLoading: true
            }
        case GET_VISIT_SUCCESS:
            return {
                ...state,
                visitLoading: false,
                visit: state.visit.concat(action.payload)
            }
        case GET_VISIT_FAILURE:
            return {
                ...state,
                visitError: action.payload,
                visitLoading: false
            }
        default:
            return state;
    }
}

export default visitReducers;