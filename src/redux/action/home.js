import axios from "axios";
import { getCommonApiHeader } from "../../Utils/utils";
import { TOPPER_LIST, ACHIVEMENTS, CATEGORY_BOARD_STANDARDS, CITY_LIST, AREA_LIST, WE_OFFER, STUDENT_HEAR, SOCIAL_LINK, META_TAGS, DEFAULT_INTRO } from "../constants";

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


export const studentHearApi = (data) => {
    return (dispatch, getState) => {
        dispatch(getHomeRequest());
        axios
            .get(STUDENT_HEAR, {
                headers: {
                    ...getCommonApiHeader(),
                },
            })
            .then((response) => {
                dispatch(getStudentHearRespond(response?.data));
            }).catch(err => {
                dispatch(handleError(err));
            });
    };
}


export const weOfferApi = (data) => {
    return (dispatch, getState) => {
        dispatch(getHomeRequest());
        axios
            .get(WE_OFFER, {
                headers: {
                    ...getCommonApiHeader(),
                },
            })
            .then((response) => {
                dispatch(getWeOfferRespond(response?.data));
            }).catch(err => {
                dispatch(handleError(err));
            });
    };
}


export const socialLinkApi = (data) => {
    return (dispatch, getState) => {
        dispatch(getHomeRequest());
        axios
            .get(SOCIAL_LINK, {
                headers: {
                    ...getCommonApiHeader(),
                },
            })
            .then((response) => {
                dispatch(getSocialLinkRespond(response?.data));
            }).catch(err => {
                dispatch(handleError(err));
            });
    };
}

export const metaTagsApi = (data) => {
    return (dispatch, getState) => {
        dispatch(getHomeRequest());
        axios
            .get(META_TAGS, {
                headers: {
                    ...getCommonApiHeader(),
                },
            })
            .then((response) => {
                dispatch(getMetaTagsRespond(response?.data));
            }).catch(err => {
                dispatch(handleError(err));
            });
    };
}


export const defaultIntroApi = (data) => {
    return (dispatch, getState) => {
        dispatch(getHomeRequest());
        axios
            .get(DEFAULT_INTRO, {
                headers: {
                    ...getCommonApiHeader(),
                },
            })
            .then((response) => {
                dispatch(getDefaultIntroRespond(response?.data));
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

export const getDefaultIntroRespond = data => {
    return {
        type: "DEFAULT_INTRO_DATA_RESPONSE",
        data: data,
    };
};


export const getTopperDataRespond = data => {
    return {
        type: "TOPPER_DATA_RESPONSE",
        data: data,
    };
};

export const getMetaTagsRespond = data => {
    return {
        type: "META_TAGS_DATA_RESPONSE",
        data: data,
    };
};

export const getBaordStandarsDataRespond = data => {
    return {
        type: "BOARDS_STANDARDS_DATA_RESPONSE",
        data: data,
    };
};

export const getSocialLinkRespond = data => {
    return {
        type: "SOCIAL_LINK_DATA_RESPONSE",
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

export const getStudentHearRespond = data => {
    return {
        type: "STUDENT_HEAR_DATA_RESPONSE",
        data: data,
    };
}

export const getWeOfferRespond = data => {
    return {
        type: "WE_OFFER_DATA_RESPONSE",
        data: data,
    };
}

export const handleError = error => {
    return {
        type: "HOME_ERROR",
        error,
    };
};
