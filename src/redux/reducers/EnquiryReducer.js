const initState = {
    error: null
};
const EnquiryReducer = (state = initState, action) => {
    const data = action?.data;
    switch (action?.type) {
        case "ENQUIRY_POST_Data_REQUESTED":
            return {
                ...state,
            };
        case "ENQUIRY_ERROR":
            return {
                ...state,
                error: action.error,
            };
        default:
            return state;
    }
};
export default EnquiryReducer;
