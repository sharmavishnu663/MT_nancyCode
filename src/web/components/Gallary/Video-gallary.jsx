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


            <section class="cards terms" id="privacy-policy">

                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <nav aria-label="breadcrumb">
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item"><Link to="/"><img src="../assets/imgs/icon-back.svg" alt="icon" /> Home</Link></li>
                                    <li class="breadcrumb-item active" aria-current="page">Gallery</li>
                                </ol>
                            </nav>

                            <h4>Gallery</h4>

                            <div class="pills">
                                <Link to={WebRoutes.PHOTO_GALLARY} >Photo Gallery</Link>
                                <Link to={WebRoutes.VIDEO_GALLARY} class="active">Video Gallery</Link>
                            </div>
                        </div>
                    </div>

                    <section class="cards" id="gallery">

                        <div class="container">
                            <div class="row">
                                <div class="col-md-12 box-radius">

                                    <div class="articles gallery-cards">
                                        {galleryVideoData && galleryVideoData.data && galleryVideoData.data.map((item) =>
                                            <div class="article">
                                                <div class="thumbnail">
                                                    <a href={item.video_url} data-fancybox>
                                                        <img src="../assets/imgs/video1.png" alt="image" />
                                                    </a>
                                                </div>
                                            </div>
                                        )}

                                    </div>

                                </div>
                            </div>
                        </div>

                    </section>
                </div>

            </section>

        </>
    );
}


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
