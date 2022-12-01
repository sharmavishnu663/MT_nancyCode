const initState = {
    termsData: [],
    policyData: [],
    disclaimerData: [],
    error: null
};
const PolicyReducer = (state = initState, action) => {
    const data = action?.data;
    switch (action?.type) {
        case "POLICY_Data_REQUESTED":
            return {
                ...state,
            };
        case "POLICY_DATA_RESPONSE":
            return {
                ...state,
                policyData: data,
            };
        case "TERMS_DATA_RESPONSE":
            return {
                ...state,
                termsData: data,
            };
        case "DISCLAIMER_DATA_RESPONSE":
            return {
                ...state,
                disclaimerData: data,
            };
        case "POLICY_ERROR":
            return {
                ...state,
                error: action.error,
            };
        default:
            return state;
    }
};
export default PolicyReducer;
