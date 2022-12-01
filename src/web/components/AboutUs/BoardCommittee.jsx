import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { boardCommitteeAPI } from "../../../redux/action/aboutUs";
import { WebRoutes } from "../../../routes";
import { parseHtml } from "../../../Utils/utils";
import About from "./About";

const BoardCommittee = ({ boardCommitteeAPI, commitesData }) => {
    useEffect(() => {
        boardCommitteeAPI();
    }, []);
    return (

        <>
            <About />
            <section className="management">

                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h3 className="headline">Our <span className="text-blue">Management</span></h3>
                            <p className="sub-headline">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat montes, pharetra cras odio nec scelerisque viverra.</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12 pills">
                            <Link to={WebRoutes.KEY_MANAGEMENT} >Key Management</Link>
                            <Link to={WebRoutes.BOARD_DIRECTORS}>Board of Directors</Link>
                            <Link to={WebRoutes.BOARD_COMMITTEE} className="active">Board Committees</Link>
                        </div>
                    </div>
                    <div className="row">
                        {commitesData.data && commitesData.data.map((item) =>
                            <div className="col-md-4">
                                <div className="card-address">
                                    <h5>{item.title}</h5>
                                    <div className="detail">
                                        <ul>
                                            <li>
                                                <span>{item.name}</span>
                                                <span>{item.designation}</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )}


                    </div>

                </div></section>
        </>


    );
}


const mapStateToProps = (state) => {
    const { AboutReducer } = state;
    const { commitesData } = AboutReducer;
    return {
        commitesData: AboutReducer.commitesData,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        boardCommitteeAPI: () => dispatch(boardCommitteeAPI()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BoardCommittee);
