const initState = {
    toastData: null,
    toastType: null,
    isUploadLoader: false
}
const CommonReducer = (state = initState, action) => {
    switch (action?.type) {
        case "OPEN_POPUP":
            return {
                ...state,
                popupType: action?.popupType,
                popupData: action?.data
            };
        case "SHOW_TOAST":
            return {
                ...state,
                toastType: action?.toastType,
                toastData: action?.data
            };
        case "RESET_TOAST":
            return {
                ...state,
                toastType: null,
                toastData: null
            };
        case "TOGGLE_UPLOAD_LOADER":
            return {
                ...state,
                isUploadLoader: action.data,
            };
        case "SET_DATA":
            return {
                ...state,
                ...action?.data
            };
        default:
            return state;
    }
}
export default CommonReducer;