//FETCH USER 
export const GET_VISIT_REQUEST = "GET_VISIT_REQUEST";
export const GET_VISIT_SUCCESS = "GET_VISIT_SUCCESS";
export const GET_VISIT_FAILURE = "GET_VISIT_FAILURE";

//GET USER BY ID
export const getVisit = (name) => {

    return (dispatch) => {
        dispatch(getVisitRequest());
        try{
          dispatch(getVisitSuccess(name));  
        }catch(err){
          dispatch(getVisitFailure(err));  
        }
        
    };
};

export const getVisitRequest = () => {
    return {
        type: GET_VISIT_REQUEST,
    };
};
export const getVisitSuccess = (visit) => {
    return {
        type: GET_VISIT_SUCCESS,
        payload: visit
    };
};
export const getVisitFailure = (error) => {
    return {
        type: GET_VISIT_FAILURE,
        payload: error
    };
};