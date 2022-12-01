const initState = {
    toppersData: [],
    achivementsData: [],
    boardStandardsData: [],
    cityData: [],
    areaData: [],
    error: null
};
const HomeReducer = (state = initState, action) => {
    const data = action?.data;
    switch (action?.type) {
        case "HOME_Data_REQUESTED":
            return {
                ...state,
            };
        case "TOPPER_DATA_RESPONSE":
            return {
                ...state,
                toppersData: data,
            };
        case "ACHIVEMENT_DATA_RESPONSE":
            return {
                ...state,
                achivementsData: data,
            };
        case "BOARDS_STANDARDS_DATA_RESPONSE":
            return {
                ...state,
                boardStandardsData: data,
            };
        case "CITY_DATA_RESPONSE":
            return {
                ...state,
                cityData: data,
            };
        case "AREA_DATA_RESPONSE":
            return {
                ...state,
                areaData: data,
            };
        case "HOME_ERROR":
            return {
                ...state,
                error: action.error,
            };
        default:
            return state;
    }
};
export default HomeReducer;
