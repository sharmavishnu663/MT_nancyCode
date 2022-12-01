const initState = {
    galleryVideoData: [],
    galleryData: [],
    galleryAllData: [],
    CSRData: [],
    error: null
};
const GalleryReducer = (state = initState, action) => {
    const data = action?.data;
    switch (action?.type) {
        case "Gallery_Data_REQUESTED":
            return {
                ...state,
            };
        case "Gallery_DATA_RESPONSE":
            return {
                ...state,
                galleryData: data,
            };
        case "Gallery_ALL_DATA_RESPONSE":
            return {
                ...state,
                galleryAllData: data,
            };
        case "Gallery_VIDEO_RESPONSE":
            return {
                ...state,
                galleryVideoData: data,
            };
        case "CSR_RESPONSE":
            return {
                ...state,
                CSRData: data,
            };
        case "GALLERY_ERROR":
            return {
                ...state,
                error: action.error,
            };
        default:
            return state;
    }
};
export default GalleryReducer;
