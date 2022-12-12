import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import Enquiry from "../modal/Enquiry";
import ContactUs from "../modal/ContactUs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { categoryListApi } from "../../../redux/action/category";
import { connect } from "react-redux";
import { WebRoutes } from "../../../routes";

const Header = ({ categoryListApi, categoryData }) => {
  const [openContact, setOpenContact] = useState(false);
  const [openEnquiry, setOpenEnquiry] = useState(false);
  const [toastType, setToastType] = useState(localStorage.getItem("postData"));

  useEffect(() => {
    // categoryListApi()
  }, []);

  useEffect(() => {
    if (toastType) {
      showToast();
    }
  }, [toastType]);

  const showToast = () => {
    toast.success(toastType);
  };

  const handleCategory = (id) => {
    localStorage.setItem("categorySelectedId", id);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top bg-white">
        <div className="container">
          <Link to="/" className="navbar-brand">
            <img src="../assets/imgs/logo-main.png" alt="logo-mt-educare" />
          </Link>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbar" aria-controls="mainNavbar" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* HEADER LINKS STARTS HERE */}
          <div className="collapse navbar-collapse" id="mainNavbar">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link to="" className="nav-link active" aria-current="page">
                  Home
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Category
                </a>
                <ul className="dropdown-menu">
                  {categoryData &&
                    categoryData.data &&
                    categoryData.data.map((item, index) => (
                      <li key={index}>
                        {item && item.name == 'School' ?
                          <Link to={WebRoutes.SCHOOL} className="dropdown-item" onClick={(e) => handleCategory(item && item.id)}>
                            {item && item.name}
                          </Link>
                          :
                          null
                        }
                        {item && item.name == 'Science' ?
                          <Link to={WebRoutes.COLLEGE} className="dropdown-item" onClick={(e) => handleCategory(item && item.id)}>
                            {item && item.name}
                          </Link>
                          :
                          null
                        }
                        {
                          item && item.name != 'School' && item.name != 'Science' ?
                            <Link to={WebRoutes.COMPETATIVE_EXAM} className="dropdown-item" onClick={(e) => handleCategory(item && item.id)}>
                              {item && item.name}
                            </Link>
                            :
                            null
                        }
                      </li>
                    ))}
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Our Offerings
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" target="_blank" href="https://roboestore.com/">
                      Robomate +
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" target="_blank" href="https://www.lakshyainstitute.com/">
                      Lakshya
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" target="_blank" href="https://www.lakshyainstitute.com/">
                      Mahesh Tutorials - School
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" target="_blank" href="http://science.maheshtutorials.com/">
                      Mahesh Tutorials - Science
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" target="_blank" href="https://commerce.maheshtutorials.com/">
                      Mahesh Tutorials - Commerce
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a href="#" onClick={() => setOpenContact(true)} className="nav-link" data-bs-toggle="modal">
                  Contact Us
                </a>
              </li>
              <li className="nav-item dropdown mb-4 mb-md-0">
                <a className="nav-link dropdown-toggle btn btn-sm btn-primary btn-admission" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Admission
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <div className="dropdown-item mt-subheader">
                      <div className="dropdown">
                        <a className="dropdown-toggle" href="https://admission.mteducare.com/school" target="_blank" data-bs-toggle="dropdown" aria-expanded="false">
                          School
                        </a>
                        <ul className="dropdown-menu">
                          <li>
                            <a className="dropdown-item" href="https://admission.mteducare.com/state-board" target="_blank">
                              State Board
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="https://admission.mteducare.com/cbse" target="_blank">
                              CBSE
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="https://admission.mteducare.com/icse" target="_blank">
                              ICSE
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li>
                    <a className="dropdown-item" target="_blank" href="https://admission.mteducare.com/science">
                      Science
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" target="_blank" href="https://admission.mteducare.com/commerce">
                      Commerce
                    </a>
                  </li>
                </ul>
                {/* HEADER LINKS ENDS HERE */}
              </li>
            </ul>
          </div>
        </div>

        <button type="button" onClick={() => setOpenEnquiry(true)} className="btn btn-enquire-now" data-bs-toggle="modal">
          Enquire Now
        </button>
        {/* ============= ENQUIRY MODAL STARTS ============= */}

        {openEnquiry ? <Enquiry openEnquiry={openEnquiry} handleCancel={(e) => setOpenEnquiry(false)} categoryData={categoryData} /> : null}

        {openContact ? <ContactUs openContact={openContact} handleCancel={(e) => setOpenContact(false)} /> : null}

        {/* ============= ENQUIRY MODAL ENDS ============= */}

        {/* ============= CONTACT MODAL STARTS ============= */}

        {/* ============= CONTACT MODAL ENDS ============= */}
      </nav>
    </>
  );
};

const mapStateToProps = (state) => {
  const { CategoryReducer } = state;
  const { categoryData } = CategoryReducer;
  return {
    categoryData: CategoryReducer.categoryData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    categoryListApi: () => dispatch(categoryListApi()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
