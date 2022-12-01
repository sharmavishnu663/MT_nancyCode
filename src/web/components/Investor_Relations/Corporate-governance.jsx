import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { CorporateDataAPI } from "../../../redux/action/investor";
import { IMAGE_BASE_URL } from "../../../redux/constants";
import { parseHtml } from "../../../Utils/utils";

const CorporateGovernance = ({ CorporateDataAPI, corporateData }) => {
    useEffect(() => {
        CorporateDataAPI();
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
                                    <li class="breadcrumb-item active" aria-current="page">Corporate Governance</li>
                                </ol>
                            </nav>

                            <h4>Corporate Governance</h4>

                            <div class="jumbotron bg-light-orange">

                                <div class="row">
                                    <div class="col-md-6">
                                        <h2>
                                            <span class="text-orange">Corporate </span><br />Governance
                                        </h2>
                                        <p>The Company is committed to maintain the highest standards of Corporate. Governance and adhere to the Corporate Governance requirements as set out in the Listing Agreement. The Company has also implemented several best Corporate Governance practices as prevalent globally</p>
                                    </div>

                                    <div class="col-md-6">
                                        <div class="img-wrapper">
                                            <img src="../assets/imgs/governance.png" alt="image" />
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div class="row stories reports">

                        {corporateData.data && corporateData.data.map((item) =>
                            <div class="col-md-4">
                                <div class="story report">
                                    <div class="download">
                                        <div class="file-type">
                                            <img src="../assets/imgs/icon-pdf.svg" alt="icon" />
                                        </div>

                                        <div class="file-link">
                                            <a href={IMAGE_BASE_URL + '/' + item.filename} download={IMAGE_BASE_URL + '/' + item.filename} target="_blank">
                                                <img src="../assets/imgs/icon-download.svg" alt="icon" />
                                            </a>
                                        </div>
                                    </div>

                                    <h5>{item.file_title}</h5>

                                    <p>{item.filename}</p>
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
    const { corporateData } = InvestorReducer;
    return {
        corporateData: InvestorReducer.corporateData,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        CorporateDataAPI: () => dispatch(CorporateDataAPI()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CorporateGovernance);
