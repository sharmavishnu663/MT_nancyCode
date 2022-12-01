import axios from "axios";
import { getCommonApiHeader } from "../../Utils/utils";
import { DEMO_VIDEO_CATEGORY, DEMO_VIDEO_DETAIL, DEFAULT_DEMO_VIDEO } from "../constants";


export const demoVideoListApi = (data) => {
    return (dispatch, getState) => {
        dispatch(getDemoVideoDataRequest());
        axios
            .get(DEMO_VIDEO_CATEGORY, {
                headers: {
                    ...getCommonApiHeader(),
                },
            })
            .then((response) => {
                if (response) {
                    dispatch(getDEMOVIDEODataRespond(response?.data));
                }
            }).catch(err => {
                dispatch(handleError(err));
            });
    };
}

export const defaultDemoVideoListApi = (data) => {
    return (dispatch, getState) => {
        dispatch(getDemoVideoDataRequest());
        axios
            .get(DEFAULT_DEMO_VIDEO, {
                headers: {
                    ...getCommonApiHeader(),
                },
            })
            .then((response) => {
                if (response) {
                    dispatch(getDEFAULTDEMOVIDEODataRespond(response?.data));
                }
            }).catch(err => {
                dispatch(handleError(err));
            });
    };
}

export const demoVideoDetailApi = (data) => {
    return (dispatch, getState) => {
        dispatch(getDemoVideoDataRequest());
        axios
            .get(DEMO_VIDEO_DETAIL + '' + data, {
                headers: {
                    ...getCommonApiHeader(),
                },
            })
            .then((response) => {
                if (response) {
                    dispatch(getVideoDetailataRespond(response?.data));
                }
            }).catch(err => {
                dispatch(handleError(err));
            });
    };
}

export const getDemoVideoDataRequest = data => {
    return {
        type: "DEMO_VIDEO_Data_REQUESTED",
    };
};

export const getVideoDetailataRespond = data => {
    return {
        type: "VIDEO_DETAIL_DATA_RESPONSE",
        data: data,
    };
};

export const getDEMOVIDEODataRespond = data => {
    return {
        type: "DEMO_VIDEO_DATA_RESPONSE",
        data: data,
    };
};

export const getDEFAULTDEMOVIDEODataRespond = data => {
    return {
        type: "DEFAULT_DEMO_VIDEO_DATA_RESPONSE",
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
        type: "DEMO_VIDEO_ERROR",
        error,
    };
};