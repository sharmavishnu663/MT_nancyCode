import axios from "axios";
import { Category_LIST, Category_Details, DEFAULT_COURSE, COURSE_SEARCH_API } from "../constants";
import { getCommonApiHeader } from "../../Utils/utils";


export const categoryListApi = (data) => {
    return (dispatch, getState) => {
        dispatch(getCategoryDataRequest());
        axios
            .get(Category_LIST, {
                headers: {
                    ...getCommonApiHeader(),
                },
            })
            .then((response) => {
                if (response) {
                    dispatch(getCategoryDataRespond(response?.data));
                }
            }).catch(err => {
                dispatch(handleError(err));
            });
    };
}

export const defaultCategoryListApi = (data) => {
    return (dispatch, getState) => {
        dispatch(getCategoryDataRequest());
        axios
            .get(DEFAULT_COURSE, {
                headers: {
                    ...getCommonApiHeader(),
                },
            })
            .then((response) => {
                if (response) {
                    dispatch(getDefaultCategoryDetailDataRespond(response?.data));
                }
            }).catch(err => {
                dispatch(handleError(err));
            });
    };
}

export const categoryDetailsApi = (data) => {
    return (dispatch, getState) => {
        dispatch(getCategoryDataRequest());
        axios
            .get(Category_Details + '' + data, {
                headers: {
                    ...getCommonApiHeader(),
                },
            })
            .then((response) => {
                if (response) {
                    dispatch(getCategoryDetailsDataRespond(response?.data));
                }
            }).catch(err => {
                dispatch(handleError(err));
            });
    };
}

export const courseSearchDetailAPI = (data) => {
    return (dispatch, getState) => {
        dispatch(getCategoryDataRequest());
        axios
            .post(COURSE_SEARCH_API, data, {
                headers: {
                    ...getCommonApiHeader(),
                },
            })
            .then((response) => {
                if (response) {
                    dispatch(getCourseSearchDetailDataRespond(response?.data));
                }
            }).catch(err => {
                dispatch(handleError(err));
            });
    };
}

export const getCategoryDataRequest = data => {
    return {
        type: "CATEGORY_Data_REQUESTED",
    };
};

export const getCategoryDataRespond = data => {
    return {
        type: "CATEGORY_DATA_RESPONSE",
        data: data,
    };
};

export const getCategoryDetailsDataRespond = data => {
    return {
        type: "CATEGORY_DETAILS_DATA_RESPONSE",
        data: data,
    };
};
export const getDefaultCategoryDetailDataRespond = data => {
    return {
        type: "DEFAULT_CATEGORY_DETAILS_DATA_RESPONSE",
        data: data,
    };
};

export const getCourseSearchDetailDataRespond = data => {
    return {
        type: "COURSE_SEARCH_DETAILS_DATA_RESPONSE",
        data: data,
    };
};


export const handleSuccess = (data) => {
    return {
        type: "SHOW_TOAST",
        data,
        toastType: "success",
    };
};
export const handleError = error => {
    return {
        type: "CATEGORY_ERROR",
        error,
    };
};