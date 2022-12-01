import axios from "axios";

export const showPopup = (popupType = null, data = {}) => {
  return {
    type: "OPEN_POPUP",
    popupType,
    data
  };
};

export const resetToast = () => {
  return {
    type: "RESET_TOAST"
  };
};



export const handleSuccess = (data) => {
  return {
    type: "SHOW_TOAST",
    data,
    toastType: "success",
  };
};
export const handleError = (error) => {
  return {
    type: "SHOW_TOAST",
    data: error,
    toastType: "error",
  };
};
