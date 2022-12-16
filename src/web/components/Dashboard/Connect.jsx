import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Form, Input, Select } from "antd";
import { categoryBaodStandardsListAPI, cityListAPI, AreaListAPI } from "../../../redux/action/home";
import { categoryListApi } from "../../../redux/action/category";
import { userQueryApi } from "../../../redux/action/enquiry";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Connect = ({ categoryListApi, userQueryApi, categoryBaodStandardsListAPI, cityListAPI, AreaListAPI, categoryData, boardStandardsData }) => {
  const [queryname, setQueryName] = useState();
  const [queryEmail, setQueryEmail] = useState();
  const [queryMobile, setQueryMobile] = useState();
  const [querycategory, setQueryCategory] = useState();
  const [queryboards, setQueryBoards] = useState();
  const [queryStandards, setQueryStandards] = useState();
  useEffect(() => {
    categoryListApi();
    cityListAPI();
  }, []);

  const handleConnectSubmint = () => {
    const mobileData = queryMobile;
    if (!isNaN(mobileData)) {
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
        window.location.reload();
      }, 1000 * 5);
    } else {
      toast.error("Mobile number should be numeric value");
      return false;
    }
  };

  const handleCategory = (e) => {
    setQueryCategory(e.target.value);
    categoryBaodStandardsListAPI(e.target.value);
  }
  // const handleContact = (event) => {
  //   const result = event.target.value.replace(/\D/g, '');

  //   setQueryMobile(result);
  // }

  const boardfilter = boardStandardsData && boardStandardsData.data && [
    ...new Set(boardStandardsData.data.map((q) => q.board_name)),
  ];
  const standardfilter = boardStandardsData && boardStandardsData.data && [
    ...new Set(boardStandardsData.data.map((q) => q.name)),
  ];

  return (
    <>
      <ToastContainer />
      <section className="connect">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h3 className="text-center">
                Have any doubts? <span className="text-orange">let’s connect</span>
              </h3>

              <Form
                labelCol={{
                  span: 8,
                }}
                wrapperCol={{
                  span: 16,
                }}
                onFinish={handleConnectSubmint}
              >
                <div className="floating-form">
                  <div className="form-controls">
                    <Form.Item label="Name" name="name" className="form-label text-blue" rules={[{ required: true, message: " Name!" }]}>
                      <input type="text" id="name" placeholder="Name" pattern="[a-zA-Z_&-]+([ ]?[a-zA-Z_&-]+)*" value={queryname} onChange={(e) => setQueryName(e.target.value)} required />
                    </Form.Item>
                  </div>

                  <div className="form-controls">
                    <Form.Item label="Email" name="email" className="form-label text-blue" rules={[{ required: true, message: "Email address!" }]}>
                      <input type="email" id="email" placeholder="Email" value={queryEmail} onChange={(e) => setQueryEmail(e.target.value)} required />
                    </Form.Item>
                  </div>

                  <div className="form-controls">
                    <Form.Item label="Mobile Number" name="mobile" className="form-label text-blue" rules={[{ required: true, message: "Mobile!" }]}>
                      <input type="text" id="mobile" pattern="^[0-9]*$" minLength="10" maxLength="10" placeholder="Mobile" value={queryMobile} onChange={(e) => setQueryMobile(e.target.value)} required />
                    </Form.Item>
                  </div>

                  <div className="form-controls">
                    <Form.Item label="Category" name="category" className="form-label" rules={[{ required: true, message: "Category!" }]}>
                      <select name="course" className="form-controls w-100" id="category" value={querycategory} onChange={(e) => handleCategory(e)} required>
                        <option defaultValue selected>
                          Select category
                        </option>
                        {categoryData &&
                          categoryData.data &&
                          categoryData.data.map((item, index) => (
                            <option value={item.id} key={index}>
                              {item.name}
                            </option>
                          ))}
                      </select>
                    </Form.Item>
                  </div>

                  <div className="form-controls">
                    <Form.Item label="Baord" name="boards" className="form-label" rules={[{ required: true, message: "Board!" }]}>
                      <select name="boards" className="form-controls w-100" id="boards" value={queryboards} onChange={(e) => setQueryBoards(e.target.value)} required>
                        <option defaultValue selected>
                          Select board
                        </option>
                        {boardfilter && boardfilter.map((item) => <option value={item}>{item}</option>)}

                      </select>
                    </Form.Item>
                  </div>

                  <div className="form-controls">
                    <Form.Item label="Standards" name="standards" className="form-label" rules={[{ required: true, message: "Standard!" }]}>
                      <select name="standards" id="standards" className="form-controls w-100" value={queryStandards} onChange={(e) => setQueryStandards(e.target.value)} required>
                        <option defaultValue selected>
                          Select Standards
                        </option>
                        {standardfilter && standardfilter.map((item) => <option value={item}>{item}</option>)}
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
          </div>
        </div>
      </section>
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

export default connect(mapStateToProps, mapDispatchToProps)(Connect);
