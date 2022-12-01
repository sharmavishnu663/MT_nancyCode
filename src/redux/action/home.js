import axios from "axios";
import { getCommonApiHeader } from "../../Utils/utils";
import { TOPPER_LIST, ACHIVEMENTS, CATEGORY_BOARD_STANDARDS, CITY_LIST, AREA_LIST } from "../constants";

export const topperListAPI = (data) => {
    return (dispatch, getState) => {
        dispatch(getHomeRequest());
        axios
            .get(TOPPER_LIST, {
                headers: {
                    ...getCommonApiHeader(),
                },
            })
            .then((response) => {
                dispatch(getTopperDataRespond(response?.data));
            }).catch(err => {
                dispatch(handleError(err));
            });
    };
}

export const achivementListAPI = (data) => {
    return (dispatch, getState) => {
        dispatch(getHomeRequest());
        axios
            .get(ACHIVEMENTS, {
                headers: {
                    ...getCommonApiHeader(),
                },
            })
            .then((response) => {
                dispatch(getAchivementDataRespond(response?.data));
            }).catch(err => {
                dispatch(handleError(err));
            });
    };
}

export const categoryBaodStandardsListAPI = (data) => {
    return (dispatch, getState) => {
        dispatch(getHomeRequest());
        axios
            .get(CATEGORY_BOARD_STANDARDS + '' + data, {
                headers: {
                    ...getCommonApiHeader(),
                },
            })
            .then((response) => {
                dispatch(getBaordStandarsDataRespond(response?.data));
            }).catch(err => {
                dispatch(handleError(err));
            });
    };
}


export const cityListAPI = (data) => {
    return (dispatch, getState) => {
        dispatch(getHomeRequest());
        axios
            .get(CITY_LIST, {
                headers: {
                    ...getCommonApiHeader(),
                },
            })
            .then((response) => {
                dispatch(getCityDataRespond(response?.data));
            }).catch(err => {
                dispatch(handleError(err));
            });
    };
}

export const AreaListAPI = (data) => {
    console.log('vishnu' + data);
    return (dispatch, getState) => {
        dispatch(getHomeRequest());
        axios
            .get(AREA_LIST + '' + data, {
                headers: {
                    ...getCommonApiHeader(),
                },
            })
            .then((response) => {
                dispatch(getAreaDataRespond(response?.data));
            }).catch(err => {
                dispatch(handleError(err));
            });
    };
}



export const getHomeRequest = data => {
    return {
        type: "HOME_Data_REQUESTED",
    };
};

export const getTopperDataRespond = data => {
    return {
        type: "TOPPER_DATA_RESPONSE",
        data: data,
    };
};

export const getBaordStandarsDataRespond = data => {
    return {
        type: "BOARDS_STANDARDS_DATA_RESPONSE",
        data: data,
    };
};

export const getAchivementDataRespond = data => {
    return {
        type: "ACHIVEMENT_DATA_RESPONSE",
        data: data,
    };
};

export const getCityDataRespond = data => {
    return {
        type: "CITY_DATA_RESPONSE",
        data: data,
    };
};

export const getAreaDataRespond = data => {
    return {
        type: "AREA_DATA_RESPONSE",
        data: data,
    };
};

export const handleError = error => {
    return {
        type: "HOME_ERROR",
        error,
    };
};
