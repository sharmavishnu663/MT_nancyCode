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
import { socialLinkApi, metaTagsApi } from "../../redux/action/home";
import DocumentMeta from "react-document-meta";

/*************** User Scripts *************/
// import "../static/user/vendor/jquery/jquery.min.js";
// import "../static/common/vendor/bootstrap/js/bootstrap.bundle.min.js";
// import "../static/user/vendor/owlCarousel/js/owl.carousel.min.js";
/*********************** */
const BaseDashboard = ({ toastType, toastData, resetToast, emailSubscriptionApi, categoryListApi, categoryData, socialLinkApi, socialLinkData, metaTagsApi, metaTagsData }) => {
    useEffect(() => {
        categoryListApi();
        socialLinkApi();
        metaTagsApi();
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
    const metaData =
        metaTagsData &&
        metaTagsData.data &&
        metaTagsData.data.filter((item) => {
            return window.location.pathname == item.page_name;
        });

    //   console.log(metaData);

    // const meta =
    //     metaData && metaData.map((data, index) => {
    //         <>
    //             <title>{data && data.mata_title}</title>
    //             <meta name={data && data.mata_keyboard} content={data && data.mata_description} />
    //             <link rel="canonical" href={data && data.canonical_tag} />

    //         </>
    //     })

    const meta = metaData &&
        metaData[0] && {
        title: metaData[0].title,
        description: metaData[0].mata_description,
        meta: {
            name: {
                keywords: metaData[0].mata_keyboard,
            },
        },
    };

    return (
        <div>
            <DocumentMeta {...meta}></DocumentMeta>
            <ToastContainer />
            <Header categoryListApi={categoryListApi} categoryData={categoryData} />
            <Outlet />
            <Footer emailSubscriptionApi={emailSubscriptionApi} categoryData={categoryData} socialLinkData={socialLinkData} />
        </div>
    );
};

const mapStateToProps = (state) => {
    const { CommonReducer, CategoryReducer, HomeReducer } = state;
    const { categoryData } = CategoryReducer;

    return {
        toastData: CommonReducer.toastData,
        toastType: CommonReducer.toastType,
        categoryData: CategoryReducer.categoryData,
        socialLinkData: HomeReducer.socialLinkData,
        metaTagsData: HomeReducer.metaTagsData,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        resetToast: () => dispatch(resetToast()),
        emailSubscriptionApi: (data) => dispatch(emailSubscriptionApi(data)),
        categoryListApi: () => dispatch(categoryListApi()),
        socialLinkApi: () => dispatch(socialLinkApi()),
        metaTagsApi: () => dispatch(metaTagsApi()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BaseDashboard);
