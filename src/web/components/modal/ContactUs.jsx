import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Form, Input, Select } from "antd";
import { categoryBaodStandardsListAPI, cityListAPI, AreaListAPI } from "../../../redux/action/home";
import { categoryListApi } from "../../../redux/action/category";
import { userQueryApi } from "../../../redux/action/enquiry";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Modal } from "react-bootstrap";
const ContactUs = ({ openContact, handleCancel, categoryListApi, userQueryApi, categoryBaodStandardsListAPI, cityListAPI, AreaListAPI, categoryData, boardStandardsData }) => {
  const [queryname, setQueryName] = useState();
  const [queryEmail, setQueryEmail] = useState();
  const [queryMobile, setQueryMobile] = useState();
  const [querycategory, setQueryCategory] = useState();
  const [queryboards, setQueryBoards] = useState();
  const [queryStandards, setQueryStandards] = useState();
  useEffect(() => {
    cityListAPI();
  }, []);

  useEffect(() => {
    categoryBaodStandardsListAPI(querycategory);
  }, [querycategory]);

  const handleCategory = (e) => {
    setQueryCategory(e.target.value)
    categoryBaodStandardsListAPI(e.target.value);
  }

  const handleConnectSubmint = () => {
    const mobileData = queryMobile;
    if (isNaN(mobileData)) {
      toast.error("Mobile number should be numeric value");
      return false;
    }
    if (!isNaN(queryname)) {
      toast.error("Name  should be numeric value");
      return false;
    } else {
      const data = {
        name: queryname,
        email: queryEmail,
        mobile: queryMobile,
        category: querycategory,
        board: queryboards,
        standards: queryStandards,
      };

      userQueryApi(data);
      setInterval(() => {
        window.location.reload(false);
      }, 1000 * 5);
    }
  };

  const boards = boardStandardsData && boardStandardsData.data && [
    ...new Set(boardStandardsData.data.map((q) => q.board_name)),
  ];
  const standards = boardStandardsData && boardStandardsData.data && [
    ...new Set(boardStandardsData.data.map((q) => q.name)),
  ];
  return (
    <>
      <ToastContainer />
      <Modal show={openContact} onHide={handleCancel} className="modal fade modal-xl contact-us" id="contactUs" tabindex="-1" aria-labelledby="contactUsLabel" aria-hidden="true" centered>
        <Modal.Header closeButton></Modal.Header>

        <div className="modal-body pb-5">
          <h2 className="text-center mb-4">Contact Us</h2>
          <p className="text-center">MT Educare has its presence across 270+ coaching centres at 174 locations in Maharashtra, Gujarat, Tamil Nadu, Karnataka, Uttar Pradesh, Punjab, Haryana, Chandigarh,Assam, Odisha, Andhra Pradesh, Kerala,Telangana and internationally - Dubai</p>

          <div className="container card-wrapper mb-5">
            <div className="row">
              <div className="col">
                <div className="info-card bg-light-blue">
                  <div className="img-wrapper">
                    <img src="../assets/imgs/icon-robomate.svg" alt="icon" />
                  </div>

                  <p className="text-medium">To Install Robomate+ at your Institution call 9987686444</p>
                </div>
              </div>

              <div className="col">
                <div className="info-card bg-light-orange">
                  <div className="img-wrapper">
                    <img src="../assets/imgs/icon-product-call.svg" alt="icon" />
                  </div>

                  <p className="text-medium">For Product Enquiries, call on our Toll-free Number 1800 2100 009</p>
                </div>
              </div>

              <div className="col">
                <div className="info-card bg-light-blue">
                  <div className="img-wrapper">
                    <img src="../assets/imgs/icon-franchise.svg" alt="icon" />
                  </div>

                  <p className="text-medium">For Franchise enquiry contact 9987686444</p>
                </div>
              </div>
            </div>
          </div>

          <h4 className="text-center text-blue">Request a Call Back</h4>

          <Form
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            onFinish={handleConnectSubmint}
          >
            <div className="floating-form mt-4">
              <div className="form-controls">
                <Form.Item label="Name" name="name" className="form-label text-blue" rules={[{ required: true, message: "Please enter your name!" }]}>
                  <input type="text" id="name" placeholder="Name" pattern="[a-zA-Z_&-]+([ ]?[a-zA-Z_&-]+)*" value={queryname} onChange={(e) => setQueryName(e.target.value)} required />
                </Form.Item>
              </div>

              <div className="form-controls">
                <Form.Item label="Email" name="email" className="form-label text-blue" rules={[{ required: true, message: "Please enter your email address!" }]}>
                  <input type="email" id="email" pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+[.]{1}[a-zA-Z]{2,}$" placeholder="Email" value={queryEmail} onChange={(e) => setQueryEmail(e.target.value)} required />
                </Form.Item>
              </div>

              <div className="form-controls">
                <Form.Item label="Phone Number" name="mobile" className="form-label text-blue" rules={[{ required: true, message: "Please select your mobile!" }]}>
                  <input type="text" className="allow_numeric" id="mobile" pattern="^[0-9\b]+$" minLength="10" maxLength="10" placeholder="Mobile" value={queryMobile} onChange={(e) => setQueryMobile(e.target.value)} required />
                </Form.Item>
              </div>

              <div className="form-controls">
                <Form.Item label="Category" name="category" className="form-label" rules={[{ required: true, message: "category!" }]}>
                  <select name="course" className="form-controls w-100" id="category" value={querycategory} onChange={(e) => handleCategory(e)} required>
                    <option selected >
                      Select Category
                    </option>
                    {categoryData && categoryData.data && categoryData.data.map((item, index) => <option key={index} value={item.id}>{item.name}</option>)}
                  </select>
                </Form.Item>
              </div>

              <div className="form-controls">
                <Form.Item label="Baord" name="boards" className="form-label" rules={[{ required: true, message: "board!" }]}>
                  <select name="boards" className="form-controls w-100" id="boards" value={queryboards} onChange={(e) => setQueryBoards(e.target.value)} required>
                    <option selected>
                      Select Board
                    </option>
                    {boards && boards.map((item, index) => <option key={index} value={item}>{item}</option>)}
                  </select>
                </Form.Item>
              </div>

              <div className="form-controls">
                <Form.Item label="Standards" name="standards" className="form-label" rules={[{ required: true, message: "standard!" }]}>
                  <select name="standards" className="form-controls w-100" id="standards" value={queryStandards} onChange={(e) => setQueryStandards(e.target.value)} required>
                    <option selected>
                      Select Standards
                    </option>
                    {standards && standards.map((item, index) => <option key={index} value={item}>{item}</option>)}
                  </select>
                </Form.Item>
              </div>

              <div className="form-controls">
                <button className="btn btn-primary btn-submit" type="submit">
                  Submit
                </button>
              </div>
            </div>
            <div className="shadow"></div>
          </Form>
        </div>
      </Modal>
    </>
  );
};

const mapStateToProps = (state) => {
  const { AboutReducer, HomeReducer, CategoryReducer } = state;
  const { centersData, centerSearchData } = AboutReducer;
  return {
    boardStandardsData: HomeReducer.boardStandardsData,
    cityData: HomeReducer.cityData,
    areaData: HomeReducer.areaData,
    categoryData: CategoryReducer.categoryData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    categoryBaodStandardsListAPI: (data) => dispatch(categoryBaodStandardsListAPI(data)),
    categoryListApi: () => dispatch(categoryListApi()),
    cityListAPI: () => dispatch(cityListAPI()),
    AreaListAPI: (data) => dispatch(AreaListAPI(data)),
    userQueryApi: (data) => dispatch(userQueryApi(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactUs);
