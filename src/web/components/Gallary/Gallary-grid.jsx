import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { connect } from "react-redux";
import { galleryAllDataAPI } from "../../../redux/action/gallery";
import { WebRoutes } from "../../../routes";
import { IMAGE_BASE_URL } from "../../../redux/constants";

var userId;
const GallaryGrid = ({ galleryAllDataAPI, galleryAllData }) => {
  const [awardsName, setAwardsName] = useState();
  const { id } = useParams();
  userId = id;
  useEffect(() => {
    galleryAllDataAPI(id);
  }, []);

  return (
    <section className="cards terms" id="privacy-policy">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/">
                    <img src="../assets/imgs/icon-back.svg" alt="icon" /> Home
                  </Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to={WebRoutes.PHOTO_GALLARY}>Gallery</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  {localStorage.getItem("awardName")}
                </li>
              </ol>
            </nav>

            <h4>{localStorage.getItem("awardName")}</h4>
          </div>
        </div>

        <div className="row gallery-grid">
          {galleryAllData &&
            galleryAllData.data &&
            galleryAllData.data.map((item, index) => (
              <div className="col-md-3" key={index}>
                <div className="gallery-img">
                  <a href={item && IMAGE_BASE_URL + "/" + item.image} data-fancybox="gallery" data-caption="Optional caption">
                    <img src={item && IMAGE_BASE_URL + "/" + item.image} alt="gallery-data" />
                  </a>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => {
  const { GalleryReducer } = state;
  const { galleryAllData } = GalleryReducer;
  return {
    galleryAllData: GalleryReducer.galleryAllData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    galleryAllDataAPI: (data) => dispatch(galleryAllDataAPI(userId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GallaryGrid);
