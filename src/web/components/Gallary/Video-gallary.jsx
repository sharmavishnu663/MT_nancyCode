import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { galleryVideoAPI } from "../../../redux/action/gallery";
import { WebRoutes } from "../../../routes";

const VideoGallary = ({ galleryVideoAPI, galleryVideoData }) => {
  useEffect(() => {
    galleryVideoAPI();
  }, []);
  return (
    <>
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
                <Link to={WebRoutes.PHOTO_GALLARY}>Photo Gallery</Link>
                <Link to={WebRoutes.VIDEO_GALLARY} className="active">
                  Video Gallery
                </Link>
              </div>
            </div>
          </div>

          <section className="cards" id="gallery">
            <div className="container">
              <div className="row">
                <div className="col-md-12 box-radius">
                  <div className="articles gallery-cards">
                    {galleryVideoData &&
                      galleryVideoData.data &&
                      galleryVideoData.data.map((item, index) => (
                        <div className="col-md-4" key={index} style={{ display: "inline-block" }}>
                          <div className="article">
                            <div className="thumbnail">
                              <a href={item.video_url} data-fancybox>
                                <iframe
                                  width="100%"
                                  height="200"
                                  src={item && item.video_url}
                                  frameBorder="0"
                                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                  allowFullScreen
                                  title="Embedded youtube"
                                  style={{ borderRadius: "36px" }}
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

const mapStateToProps = (state) => {
  const { GalleryReducer } = state;
  const { galleryVideoData } = GalleryReducer;
  return {
    galleryVideoData: GalleryReducer.galleryVideoData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    galleryVideoAPI: () => dispatch(galleryVideoAPI()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(VideoGallary);
