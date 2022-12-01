const initState = {
    jobData: [],
    jobDetails: [],
    error: null
};
const JobReducer = (state = initState, action) => {
    const data = action?.data;
    switch (action?.type) {
        case "JOB_Data_REQUESTED":
            return {
                ...state,
            };
        case "JOB_DATA_RESPONSE":
            return {
                ...state,
                jobData: data,
            };
        case "JOB_DETAILS_RESPONSE":
            return {
                ...state,
                jobDetails: data,
            };
        case "JOB_ERROR":
            return {
                ...state,
                error: action.error,
            };
        default:
            return state;
    }
};
export default JobReducer;
