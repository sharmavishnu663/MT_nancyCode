const initState = {
    demoListData: [],
    videoDetailData: [],
    defaultVideoDetailData: [],
    error: null
};
const DemoVideoReducer = (state = initState, action) => {
    const data = action?.data;
    switch (action?.type) {
        case "DEMO_VIDEO_Data_REQUESTED":
            return {
                ...state,
            };
        case "DEMO_VIDEO_DATA_RESPONSE":
            return {
                ...state,
                demoListData: data,
            };
        case "VIDEO_DETAIL_DATA_RESPONSE":
            return {
                ...state,
                videoDetailData: data,
            };
        case "DEFAULT_DEMO_VIDEO_DATA_RESPONSE":
            return {
                ...state,
                defaultVideoDetailData: data,
            };
        case "DEMO_VIDEO_ERROR":
            return {
                ...state,
                error: action.error,
            };
        default:
            return state;
    }
};
export default DemoVideoReducer;
