import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { mediaListApi } from "../../../redux/action/investor";
import { parseHtml } from "../../../Utils/utils";

const Media = ({ mediaListApi, mediaData }) => {
  useEffect(() => {
    mediaListApi();
  }, []);

  const colSize = [4, 8, 4, 4, 4, 8, 4];

  return (
    <>
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
                    Media
                  </li>
                </ol>
              </nav>

              <h4>Media</h4>
            </div>
          </div>

          <div class="row media-coverage">
            {mediaData &&
              mediaData.data &&
              mediaData.data.map((item, index) => (
                <div class={`col-md-${colSize[index]} coverage`} key={index}>
                  <div class={index % 2 === 0 ? "media bg-light-orange" : "media bg-light-blue"}>
                    <h5>{item && item.title}</h5>
                    <p>{new Date(item && item.created_at).toLocaleDateString("en-us", { weekday: "long", year: "numeric", month: "short", day: "numeric" })}</p>
                    <p>{item && parseHtml(item.description)}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  );
};

const mapStateToProps = (state) => {
  const { InvestorReducer } = state;
  const { mediaData } = InvestorReducer;
  return {
    mediaData: InvestorReducer.mediaData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    mediaListApi: () => dispatch(mediaListApi()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Media);
