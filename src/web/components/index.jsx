import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { connect } from "react-redux";
import Header from "./Common/Header";
import Footer from "./Common/Footer";
import { resetToast } from "../../redux/action/common";
import { emailSubscriptionApi } from "../../redux/action/enquiry";
import { categoryListApi } from "../../redux/action/category";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


/*************** User Scripts *************/
// import "../static/user/vendor/jquery/jquery.min.js";
// import "../static/common/vendor/bootstrap/js/bootstrap.bundle.min.js";
// import "../static/user/vendor/owlCarousel/js/owl.carousel.min.js";
/*********************** */
const BaseDashboard = ({ toastType, toastData, resetToast, emailSubscriptionApi, categoryListApi, categoryData }) => {
    useEffect(() => {
        categoryListApi();
    }, []);

    useEffect(() => {
        if (toastType) {
            showToast();
            resetToast();
        }
    }, [toastType]);

    const showToast = () => {
        switch (toastType) {
            case "success":
                toast.success(toastData.message);
                break;
            case "error":
                toast.error(toastData.message);
                break;
            case "warning":
                toast.warning(toastData.message);
                break;
            default:
                break;
        }
    };
    return (
        <div>
            <ToastContainer />
            <Header categoryListApi={categoryListApi} categoryData={categoryData} />
            <Outlet />
            <Footer emailSubscriptionApi={emailSubscriptionApi} categoryData={categoryData} />
        </div>
    );
};



const mapStateToProps = state => {
    const { CommonReducer, CategoryReducer } = state;
    const { categoryData } = CategoryReducer;

    return {
        toastData: CommonReducer.toastData,
        toastType: CommonReducer.toastType,
        categoryData: CategoryReducer.categoryData,

    };
};

const mapDispatchToProps = dispatch => {
    return {
        resetToast: () => dispatch(resetToast()),
        emailSubscriptionApi: (data) => dispatch(emailSubscriptionApi(data)),
        categoryListApi: () => dispatch(categoryListApi()),

    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BaseDashboard);