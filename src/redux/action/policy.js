import axios from "axios";
import { getCommonApiHeader } from "../../Utils/utils";
import { POLICY_LIST, TERMS_LIST, DISCLAIMER_LIST } from "../constants";

export const policyListAPI = (data) => {
    return (dispatch, getState) => {
        dispatch(getPolicyRequest());
        axios
            .get(POLICY_LIST, {
                headers: {
                    ...getCommonApiHeader(),
                },
            })
            .then((response) => {
                dispatch(getPolicyDataRespond(response?.data));
            }).catch(err => {
                dispatch(handleError(err));
            });
    };
}

export const termsListAPI = (data) => {
    return (dispatch, getState) => {
        dispatch(getPolicyRequest());
        axios
            .get(TERMS_LIST, {
                headers: {
                    ...getCommonApiHeader(),
                },
            })
            .then((response) => {
                dispatch(getTermsDataRespond(response?.data));
            }).catch(err => {
                dispatch(handleError(err));
            });
    };
}

export const disclaimerListAPI = (data) => {
    return (dispatch, getState) => {
        dispatch(getPolicyRequest());
        axios
            .get(DISCLAIMER_LIST, {
                headers: {
                    ...getCommonApiHeader(),
                },
            })
            .then((response) => {
                dispatch(getDisclaimerDataRespond(response?.data));
            }).catch(err => {
                dispatch(handleError(err));
            });
    };
}

export const getPolicyRequest = data => {
    return {
        type: "POLICY_Data_REQUESTED",
    };
};

export const getPolicyDataRespond = data => {
    return {
        type: "POLICY_DATA_RESPONSE",
        data: data,
    };
};

export const getTermsDataRespond = data => {
    return {
        type: "TERMS_DATA_RESPONSE",
        data: data,
    };
};

export const getDisclaimerDataRespond = data => {
    return {
        type: "DISCLAIMER_DATA_RESPONSE",
        data: data,
    };
};

export const handleError = error => {
    return {
        type: "POLICY_ERROR",
        error,
    };
};
