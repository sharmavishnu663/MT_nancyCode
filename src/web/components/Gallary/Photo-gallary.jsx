import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { galleryDataAPI } from "../../../redux/action/gallery";
import { WebRoutes } from "../../../routes";

const PhotoGallary = ({ galleryDataAPI, galleryData }) => {
  useEffect(() => {
    galleryDataAPI();
  }, []);

  const handleSession = (name) => {
    localStorage.setItem("awardName", name);
  };
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
                <li className="breadcrumb-item active" aria-current="page">
                  Gallery
                </li>
              </ol>
            </nav>

            <h4>Gallery</h4>

            <div className="pills">
              <Link to={WebRoutes.PHOTO_GALLARY} className="active">
                Photo Gallery
              </Link>
              <Link to={WebRoutes.VIDEO_GALLARY}>Video Gallery</Link>
            </div>
          </div>
        </div>

        <section className="cards" id="gallery">
          <div className="container">
            <div className="row">
              <div className="col-md-12 box-radius">
                <div className="articles gallery-cards">
                  <div className="row">
                    {galleryData &&
                      galleryData.data &&
                      galleryData.data.map((item, index) => (
                        <div className="col-md-4" key={index}>
                          <div className="article">
                            <div className="thumbnail">
                              <a>
                                <img src="../assets/imgs/gallery1.png" alt="asset_img" />
                              </a>
                            </div>

                            <div className="detail gallery">
                              <div className="gallery-header">
                                <h5>{item.name}</h5>
                                <Link to={`${WebRoutes.GALLARY_GRID}${item.id}`} onClick={(e) => handleSession(item.name)} className="btn btn-sm">
                                  <img src="../assets/imgs/icon-arrow-right.svg" className="link-icon" alt="icon" />
                                </Link>
                              </div>

                              <div className="count">({item.total})</div>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => {
  const { GalleryReducer } = state;
  const { galleryData } = GalleryReducer;
  return {
    galleryData: GalleryReducer.galleryData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    galleryDataAPI: () => dispatch(galleryDataAPI()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PhotoGallary);
