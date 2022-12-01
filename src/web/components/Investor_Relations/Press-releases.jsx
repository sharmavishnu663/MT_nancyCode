import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { releaseDataAPI } from "../../../redux/action/investor";
import { IMAGE_BASE_URL } from "../../../redux/constants";
import { WebRoutes } from "../../../routes";

const PressRelease = ({ releaseDataAPI, releaseData }) => {
    useEffect(() => {
        releaseDataAPI(1);
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
                                    <li class="breadcrumb-item active" aria-current="page">Releases</li>
                                </ol>
                            </nav>

                            <h4>Press Releases</h4>

                            <div class="pills">
                                <Link to={WebRoutes.PRESS_RELEASE} class="active">Press Releases</Link>
                                <Link to={WebRoutes.POSTAL_BALLOT}>Postal Ballot</Link>
                                <Link to={WebRoutes.STATUTORY_COMMUNICATION}>Statutory Communication</Link>
                                <Link to={WebRoutes.SHAREHOLDING_PATTERN}>Shareholding Pattern</Link>
                            </div>
                        </div>
                    </div>

                    <div class="row stories">
                        {releaseData && releaseData.data && releaseData.data.map((item) =>
                            <div class="col-md-4">
                                <div class="story">
                                    <div class="download">
                                        <div class="file-type">
                                            <img src="../assets/imgs/icon-pdf.svg" alt="icon" />
                                        </div>

                                        <div class="file-link">
                                            <a href={IMAGE_BASE_URL + '/' + item.file_name} download={IMAGE_BASE_URL + '/' + item.file_name} target="_blank">
                                                <img src="../assets/imgs/icon-download.svg" alt="icon" />
                                            </a>
                                        </div>
                                    </div>

                                    <h5>{item.file_title}</h5>

                                    <p>{item.invest_quater}</p>

                                    <a href="#" class="date">{item.date}</a>
                                </div>
                            </div>
                        )}





                    </div>
                </div>

            </section>







        </>
    );
}


const mapStateToProps = (state) => {
    const { InvestorReducer } = state;
    const { releaseData } = InvestorReducer;
    return {
        releaseData: InvestorReducer.releaseData,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        releaseDataAPI: (data) => dispatch(releaseDataAPI(1)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PressRelease);
