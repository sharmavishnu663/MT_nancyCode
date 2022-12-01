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
    <section class="cards terms" id="privacy-policy">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item">
                  <Link to="/">
                    <img src="../assets/imgs/icon-back.svg" alt="icon" /> Home
                  </Link>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                  Gallery
                </li>
              </ol>
            </nav>

            <h4>Gallery</h4>

            <div class="pills">
              <Link to={WebRoutes.PHOTO_GALLARY} class="active">
                Photo Gallery
              </Link>
              <Link to={WebRoutes.VIDEO_GALLARY}>Video Gallery</Link>
            </div>
          </div>
        </div>

        <section class="cards" id="gallery">
          <div class="container">
            <div class="row">
              <div class="col-md-12 box-radius">
                <div class="articles gallery-cards">
                  <div className="row">
                    {galleryData &&
                      galleryData.data &&
                      galleryData.data.map((item) => (
                        <div class="col-md-4">
                          <div class="article">
                            <div class="thumbnail">
                              <a>
                                <img src="../assets/imgs/gallery1.png" alt="asset_img" />
                              </a>
                            </div>

                            <div class="detail gallery">
                              <div class="gallery-header">
                                <h5>{item.name}</h5>
                                <Link to={`${WebRoutes.GALLARY_GRID}${item.id}`} onClick={(e) => handleSession(item.name)} class="btn btn-sm">
                                  <img src="../assets/imgs/icon-arrow-right.svg" className="link-icon" alt="icon" />
                                </Link>
                              </div>

                              <div class="count">({item.total})</div>
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
