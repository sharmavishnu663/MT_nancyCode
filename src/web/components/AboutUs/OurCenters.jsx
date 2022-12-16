import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Form, Input, Select } from "antd";
import { categoryBaodStandardsListAPI, cityListAPI, AreaListAPI } from "../../../redux/action/home";
import { categoryListApi } from "../../../redux/action/category";
import { centerListAPI, centerSearchAPI } from "../../../redux/action/aboutUs";
import { parseHtml } from "../../../Utils/utils";
import { WebRoutes } from "../../../routes";
import Connect from "../Dashboard/Connect";

const Center = ({ categoryListApi, categoryBaodStandardsListAPI, boardStandardsData, categoryData, cityListAPI, AreaListAPI, cityData, areaData, centerListAPI, centersData, centerSearchAPI, centerSearchData }) => {
  const searchData = localStorage.getItem("centersearch");
  const [category, setCategory] = useState();
  const [boards, setBoards] = useState();
  const [standards, setStandards] = useState();
  const [city, setCity] = useState();
  const [area, setArea] = useState();
  useEffect(() => {
    centerListAPI();
    categoryListApi();
    cityListAPI();
  }, []);

  // useEffect(() => {
  //   if (searchData) {
  //     centerSearchAPI(searchData);
  //     centersData = centerSearchData;
  //   }
  // }, [searchData]);



  const handleCityChange = (e) => {
    setCity(e.target.value);
    AreaListAPI(e.target.value);
    localStorage.setItem("cityId", city);
  };

  const onFinish = (event) => {
    const data = {
      city: city,
      area: area,
    };
    centerSearchAPI(data);
  };

  const boardsFilter = boardStandardsData && boardStandardsData.data && [
    ...new Set(boardStandardsData.data.map((q) => q.board_name)),
  ];
  const standardsFilter = boardStandardsData && boardStandardsData.data && [
    ...new Set(boardStandardsData.data.map((q) => q.name)),
  ];
  const areaFilter = areaData && areaData.data && [
    ...new Set(areaData.data.map((q) => q.area)),
  ];


  const handleCategory = (e) => {
    setCategory(e.target.value);
    categoryBaodStandardsListAPI(e.target.value);
  }
  return (
    <>
      {/*====================== MANAGEMENT ================== */}
      <section className="management our-centers">
        <div className="container box-radius bg-light-orange">
          <div className="row">
            <div className="col-md-12 text-center">
              <h3 className="headline">
                Our <span className="text-blue">centers</span>
              </h3>
              <p className="sub-headline">Our world-class infrastructure is reaching into various cities. Find one of our institutes near you.</p>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <Form
                labelCol={{
                  span: 8,
                }}
                wrapperCol={{
                  span: 16,
                }}
                onFinish={onFinish}
              >
                <div className="floating-form in-banner">
                  <div className="form-controls">
                    <Form.Item label="Category" name="category" className="form-label">
                      <select name="course" className="form-controls w-100" id="course" value={category} onChange={(e) => handleCategory(e)}>
                        <option selected >
                          Select Category
                        </option>
                        {categoryData && categoryData.data && categoryData.data.map((item) => <option value={item.id}>{item.name}</option>)}
                      </select>
                    </Form.Item>
                  </div>

                  <div className="form-controls">
                    <Form.Item label="Baord" name="board" className="form-label">
                      <select name="boards" className="form-controls w-100" id="boards" value={boards} onChange={(e) => setBoards(e.target.value)}>
                        <option selected >
                          Select Board
                        </option>
                        {boardsFilter && boardsFilter.map((item) => <option value={item}>{item}</option>)}
                      </select>
                    </Form.Item>
                  </div>

                  <div className="form-controls">
                    <Form.Item label="Standards" name="standards" className="form-label">
                      <select name="standards" id="standards" className="form-controls w-100" value={standards} onChange={(e) => setStandards(e.target.value)}>
                        <option selected>
                          Select Standards
                        </option>
                        {standardsFilter && standardsFilter.map((item) => <option value={item}>{item}</option>)}
                      </select>
                    </Form.Item>
                  </div>

                  <div className="form-controls">
                    <Form.Item label="City" name="city" className="form-label">
                      <select name="standards" id="standards" className="form-controls w-100" value={city} onChange={(e) => handleCityChange(e)}>
                        <option selected >
                          Select City
                        </option>
                        {cityData && cityData.data && cityData.data.map((item) => <option value={item.id}>{item.name}</option>)}
                      </select>
                    </Form.Item>
                  </div>

                  <div className="form-controls">
                    <Form.Item label="Area" name="area" className="form-label">
                      <select name="area" id="area" className="form-controls w-100" value={area} onChange={(e) => setArea(e.target.value)}>
                        <option selected >
                          Select Area
                        </option>
                        {areaFilter && areaFilter.map((item) => <option value={item}>{item}</option>)}
                      </select>
                    </Form.Item>
                  </div>

                  <div className="form-controls">
                    <button className="btn btn-primary btn-submit" type="submit">
                      Submit
                    </button>
                  </div>
                </div>
                {/* -- floating-form -- */}
                <div className="shadow"></div>
              </Form>
            </div>
          </div>

          <div className="row g-4">
            {centerSearchData && centerSearchData.data ? (
              <>
                {centerSearchData &&
                  centerSearchData.data &&
                  centerSearchData.data.map((item) => (
                    <div className="col-md-4">
                      <div className="card-address centres">
                        <h5>{item.name}</h5>
                        <div className="detail">
                          <ul>
                            <li>
                              <span>
                                <img src="../assets/imgs/icon-phone.svg" alt="icon" />
                              </span>
                              <span>Ph : {item.mobile}</span>
                            </li>
                            <li>
                              <span>
                                <img src="../assets/imgs/icon-email.svg" alt="icon" />
                              </span>
                              <span>
                                <Link to="" href={`mailto: ${item.email}`}>
                                  {item.email}
                                </Link>
                              </span>
                            </li>
                            <li>
                              <span>
                                <img src="../assets/imgs/icon-location-pin.svg" alt="icon" />
                              </span>
                              <span>
                                {item.address},{item.address1},{item.city ? item.city.name : ""},{item.state ? item.state.name : ""}
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
              </>
            ) : (
              <>
                {centersData.data &&
                  centersData.data &&
                  centersData.data.map((item) => (
                    <div className="col-md-4">
                      <div className="card-address centres">
                        <h5>{item.name}</h5>
                        <div className="detail">
                          <ul>
                            <li>
                              <span>
                                <img src="../assets/imgs/icon-phone.svg" alt="icon" />
                              </span>
                              <span>Ph: {item.mobile} </span>
                            </li>
                            <li>
                              <span>
                                <img src="../assets/imgs/icon-email.svg" alt="icon" />
                              </span>
                              <span>
                                <Link to="" href={`mailto: ${item.email}`}>
                                  {item.email}
                                </Link>
                              </span>
                            </li>
                            <li>
                              <span>
                                <img src="../assets/imgs/icon-location-pin.svg" alt="icon" />
                              </span>
                              <span>
                                {item.address},{item.address1},{item.city ? item.city.name : ""},{item.state ? item.state.name : ""}
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
              </>
            )}
          </div>
        </div>
      </section>
      {/* =================== Management ends here ==================== */}

      {/* ================ CONNECT =========================*/}
      <Connect />
      {/* ================ CONNECT ends here =====================*/}
    </>
  );
};

const mapStateToProps = (state) => {
  const { AboutReducer, HomeReducer, CategoryReducer } = state;
  const { centersData, centerSearchData } = AboutReducer;
  return {
    centersData: AboutReducer.centersData,
    centerSearchData: AboutReducer.centerSearchData,
    boardStandardsData: HomeReducer.boardStandardsData,
    cityData: HomeReducer.cityData,
    areaData: HomeReducer.areaData,
    categoryData: CategoryReducer.categoryData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    centerListAPI: () => dispatch(centerListAPI()),
    centerSearchAPI: (data) => dispatch(centerSearchAPI(data)),
    categoryBaodStandardsListAPI: (data) => dispatch(categoryBaodStandardsListAPI(data)),
    categoryListApi: () => dispatch(categoryListApi()),
    cityListAPI: () => dispatch(cityListAPI()),
    AreaListAPI: (data) => dispatch(AreaListAPI(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Center);
