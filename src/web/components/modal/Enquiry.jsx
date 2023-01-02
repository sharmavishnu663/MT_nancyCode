import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Modal } from "react-bootstrap";
import { Form, Input } from "antd";

import { categoryBaodStandardsListAPI, cityListAPI, AreaListAPI } from "../../../redux/action/home";
import { categoryListApi } from "../../../redux/action/category";
import { enquiryForm } from "../../../redux/action/enquiry";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Enquiry = ({ openEnquiry, handleCancel, enquiryForm, userQueryApi, categoryBaodStandardsListAPI, cityListAPI, AreaListAPI, categoryData, boardStandardsData, cityData }) => {
  const [validated, setValidated] = useState(false);
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [category, setCategory] = useState("");
  const [city, setCity] = useState("");
  const [board, setBoard] = useState("");
  const [standard, setStandard] = useState("");
  const [demoTime, setDemoTime] = useState("");

  useEffect(() => {
    // categoryListApi();
    cityListAPI();
  }, []);

  const onFinish = (event) => {
    if (!isNaN(mobile)) {
      const data = {
        name: name,
        mobile: mobile,
        email: email,
        category: category,
        city: city,
        board: board,
        standard: standard,
        demo_time: demoTime,
      };
      enquiryForm(data);
      setInterval(() => {
        window.location.reload(false);
      }, 1000 * 5);
    } else {
      toast.error("Mobile number should be numeric value");
      return false;
    }
  };

  const boards = boardStandardsData && boardStandardsData.data && [
    ...new Set(boardStandardsData.data.map((q) => q.board_name)),
  ];
  const standards = boardStandardsData && boardStandardsData.data && [
    ...new Set(boardStandardsData.data.map((q) => q.name)),
  ];

  useEffect(() => {
    categoryBaodStandardsListAPI(category);
  }, [category]);

  const handleCategory = (e) => {
    setCategory(e.target.value);
    categoryBaodStandardsListAPI(category);
  }

  return (
    <>
      <ToastContainer />
      <Modal show={openEnquiry} onHide={handleCancel} className="modal fade modal-xl enquire-now" id="enquireNow" tabindex="-1" aria-labelledby="enquireNowLabel" aria-hidden="true">
        <button className="btn-close-modal" data-bs-dismiss="modal" aria-label="Close" onClick={handleCancel}>
          Close
        </button>
        <Modal.Header closeButton></Modal.Header>

        <Modal.Body className="EnquireNowWrp">
          <h2 className="text-center mb-4">
            <span className="text-blue">Enquire</span> Now
          </h2>
          <Form
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            onFinish={onFinish}
          >
            <div className="container enquiry-form">
              <div className="row">
                <div className="col-md-4 form-controls">
                  <Form.Item label="Enter Name" name="name" className="form-label" rules={[{ required: true, message: "Please input your name!" }]}>
                    <Input type="text" className="form-control text-capitalize" pattern="[a-zA-Z_&-]+([ ]?[a-zA-Z_&-]+)*" value={name} placeholder="Enter Full Name" onChange={(e) => setName(e.target.value)} required />
                  </Form.Item>
                </div>

                <div className="col-md-4 form-controls">
                  <Form.Item label="Email" name="email" className="form-label" rules={[{ required: true, message: "Please input your email!" }]}>
                    <Input required type="email" pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+[.]{1}[a-zA-Z]{2,}$" className="form-control" placeholder="@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                  </Form.Item>
                </div>

                <div className="col-md-4 form-controls">
                  <Form.Item label="Mobile Number" name="mobile" className="form-label" rules={[{ required: true, message: "Please input your Mobile number!" }]}>
                    <Input type="text" className="form-control" pattern="^[0-9\b]+$" maxLength={10} placeholder="+91" value={mobile} onChange={(e) => setMobile(e.target.value)} required />
                  </Form.Item>
                </div>

                <div className="col-md-4 form-controls">
                  <Form.Item label="Category" name="category" className="form-label" rules={[{ required: true, message: "Category!" }]}>
                    <select name="course" className="custom-select form-select" id="course" value={category} onChange={(e) => handleCategory(e)} required>
                      <option selected>
                        Please select category
                      </option>
                      {categoryData && categoryData.data && categoryData.data.map((item, index) => <option key={index} value={item.id}>{item.name}</option>)}
                    </select>
                  </Form.Item>
                </div>

                <div className="col-md-4 form-controls">
                  <Form.Item label="Board" name="board" className="form-label" rules={[{ required: true, message: "Board!" }]}>
                    <select name="boards" className="custom-select form-select" id="boards" value={board} onChange={(e) => setBoard(e.target.value)} required>
                      <option selected>
                        Please select board
                      </option>
                      {boards && boards.map((item, index) => <option key={index} value={item}>{item}</option>)}
                    </select>
                  </Form.Item>
                </div>

                <div className="col-md-4 form-controls">
                  <Form.Item label="Standard" name="standard" className="form-label" rules={[{ required: true, message: "Standrd!" }]}>
                    <select className="custom-select form-select" name="standards" id="standards" value={standard} onChange={(e) => setStandard(e.target.value)} required>
                      <option selected>
                        Please select Standards
                      </option>
                      {standards && standards.map((item, index) => <option key={index} value={item}>{item}</option>)}
                    </select>
                  </Form.Item>
                </div>

                <div className="col-md-4 form-controls">
                  <Form.Item label=" Preferred Time for Demo" name="demo_time" className="form-label" rules={[{ required: true, message: "Demo time!" }]}>
                    <select id="" className="custom-select form-select" value={demoTime} onChange={(e) => setDemoTime(e.target.value)} required>
                      <option selected>
                        Select demo time
                      </option>
                      <option value="11:00">11:00</option>
                      <option value="11:30">11:30</option>
                      <option value="12:00">12:00</option>
                      <option value="12:30">12:30</option>
                      <option value="13:00">13:00</option>
                      <option value="13:30">13:30</option>
                      <option value="14:00">14:00</option>
                      <option value="14:30">14:30</option>
                    </select>
                  </Form.Item>
                </div>

                <div className="col-md-4 form-controls">
                  <Form.Item label="City" name="city" className="form-label" rules={[{ required: true, message: "City!" }]}>
                    <select name="standards" id="standards" value={city} onChange={(e) => setCity(e.target.value)} className="custom-select form-select" required>
                      <option selected>
                        Please select city
                      </option>
                      {cityData && cityData.data && cityData.data.map((item, index) => <option key={index} value={item.id}>{item.name}</option>)}
                    </select>
                  </Form.Item>
                </div>

                <div className="col-md-4 form-controls">
                  <button type="submit" className="btn btn-booking">
                    Book
                  </button>
                </div>
              </div>
            </div>
          </Form>

          <div className="container card-wrapper mb-0">
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
        </Modal.Body>
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
    enquiryForm: (data) => dispatch(enquiryForm(data)),
    cityListAPI: () => dispatch(cityListAPI()),
    AreaListAPI: (data) => dispatch(AreaListAPI(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Enquiry);
