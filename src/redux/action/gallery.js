import axios from "axios";
import { getCommonApiHeader } from "../../Utils/utils";
import { Gallery_List, GALLARY_ALL_DATA, GALLARY_VIDEO_LIST, CSR_LIST } from "../constants";

export const galleryDataAPI = (data) => {
    return (dispatch, getState) => {
        dispatch(getGellaryRequest());
        axios
            .get(Gallery_List, {
                headers: {
                    ...getCommonApiHeader(),
                },
            })
            .then((response) => {
                dispatch(getGalleryDataRespond(response?.data));
            }).catch(err => {
                dispatch(handleError(err));
            });
    };
}

export const galleryAllDataAPI = (data) => {
    return (dispatch, getState) => {
        dispatch(getGellaryRequest());
        axios
            .get(GALLARY_ALL_DATA + '' + data, {
                headers: {
                    ...getCommonApiHeader(),
                },
            })
            .then((response) => {
                dispatch(getGalleryAllDataRespond(response?.data));
            }).catch(err => {
                dispatch(handleError(err));
            });
    };
}

export const galleryVideoAPI = (data) => {
    return (dispatch, getState) => {
        dispatch(getGellaryRequest());
        axios
            .get(GALLARY_VIDEO_LIST, {
                headers: {
                    ...getCommonApiHeader(),
                },
            })
            .then((response) => {
                dispatch(getGalleryVideoRespond(response?.data));
            }).catch(err => {
                dispatch(handleError(err));
            });
    };
}

export const CSRAPI = (data) => {
    return (dispatch, getState) => {
        dispatch(getGellaryRequest());
        axios
            .get(CSR_LIST, {
                headers: {
                    ...getCommonApiHeader(),
                },
            })
            .then((response) => {
                dispatch(getCSRRespond(response?.data));
            }).catch(err => {
                dispatch(handleError(err));
            });
    };
}

export const getGellaryRequest = data => {
    return {
        type: "Gallery_Data_REQUESTED",
    };
};

export const getGalleryDataRespond = data => {
    return {
        type: "Gallery_DATA_RESPONSE",
        data: data,
    };
};

export const getGalleryAllDataRespond = data => {
    return {
        type: "Gallery_ALL_DATA_RESPONSE",
        data: data,
    };
};

export const getGalleryVideoRespond = data => {
    return {
        type: "Gallery_VIDEO_RESPONSE",
        data: data,
    };
};

export const getCSRRespond = data => {
    return {
        type: "CSR_RESPONSE",
        data: data,
    };
};

export const handleError = error => {
    return {
        type: "GALLERY_ERROR",
        error,
    };
};
