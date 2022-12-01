const initState = {
    corporateData: [],
    investorData: [],
    releaseData: [],
    reportData: [],
    mediaData: [],
    investorSearchData: [],
    reportSearchData: [],
    error: null
};
const InvestorReducer = (state = initState, action) => {
    const data = action?.data;
    switch (action?.type) {
        case "INVESTOR_Data_REQUESTED":
            return {
                ...state,
            };
        case "CORPORATE_DATA_RESPONSE":
            return {
                ...state,
                corporateData: data,
            };
        case "INVESTOR_DATA_RESPONSE":
            return {
                ...state,
                investorData: data,
            };
        case "RELEASE_DATA_RESPONSE":
            return {
                ...state,
                releaseData: data,
            };
        case "REPORT_DATA_RESPONSE":
            return {
                ...state,
                reportData: data,
            };
        case "MEDIA_DATA_RESPONSE":
            return {
                ...state,
                mediaData: data,
            };
        case "INVESTOR_SEARCH_DATA_RESPONSE":
            return {
                ...state,
                investorSearchData: data,
            };
        case "REPORT_SERACH_Data_RESPONSE":
            return {
                ...state,
                reportSearchData: data,
            };
        case "INVESTOR_ERROR":
            return {
                ...state,
                error: action.error,
            };

        default:
            return state;
    }
};
export default InvestorReducer;
