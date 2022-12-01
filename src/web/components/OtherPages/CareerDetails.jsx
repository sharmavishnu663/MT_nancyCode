import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { connect } from "react-redux";
import { jobDataAPI } from "../../../redux/action/jobs";
import { WebRoutes } from "../../../routes";
import { parseHtml } from "../../../Utils/utils";

var jobId;

const CareerDetails = ({ jobDataAPI, jobDetails }) => {
  const { id } = useParams();
  jobId = id;
  useEffect(() => {
    jobDataAPI(id);
  }, []);

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
                  <li class="breadcrumb-item">
                    <Link to={WebRoutes.CAREER}> Career</Link>
                  </li>
                  <li class="breadcrumb-item active" aria-current="page">
                    {jobDetails && jobDetails.data && jobDetails.data.title}
                  </li>
                </ol>
              </nav>

              <h4>{jobDetails && jobDetails.data && jobDetails.data.title}</h4>
            </div>
          </div>
        </div>
      </section>

      <section class="job-description">
        <div class="container box-radius bg-light-blue">
          <div class="row">
            <div class="col-md-4">
              <div class="job-info">
                <div class="icon">
                  <img src="../assets/imgs/icon-requirements.svg" alt="icon" />
                </div>

                <div class="info">
                  <p>Requirements</p>
                  <p>Experience : {jobDetails && jobDetails.data && parseHtml(jobDetails.data.requirement)}</p>
                </div>
              </div>
            </div>

            <div class="col-md-4">
              <div class="job-info">
                <div class="icon">
                  <img src="../assets/imgs/icon-location.svg" alt="icon" />
                </div>

                <div class="info">
                  <p>Location</p>
                  <p>{jobDetails && jobDetails.data && parseHtml(jobDetails.data.location)}</p>
                </div>
              </div>
            </div>

            <div class="col-md-4">
              <div class="job-info">
                <div class="icon">
                  <img src="../assets/imgs/icon-date.svg" alt="icon" />
                </div>

                <div class="info">
                  <p>Posted on</p>
                  <p>{new Date(jobDetails && jobDetails.data && jobDetails.data.created_at).toLocaleDateString("en-us", { weekday: "long", year: "numeric", month: "short", day: "numeric" })}</p>
                </div>
              </div>
            </div>

            <div class="col-md-12">
              <hr />
            </div>

            <div class="col-md-6">
              <h3>Job Description</h3>
              {jobDetails && jobDetails.data && parseHtml(jobDetails.data.description)}

              <a href="mailto: hrd@mteducare.com">Kindly Mail your resume/Cv at hrd@mteducare.com</a>

              <a href="#" class="btn-apply">
                Apply
              </a>
            </div>

            <div class="col-md-6">
              <h3>Desired Candidate Profile</h3>
              {jobDetails && jobDetails.data && parseHtml(jobDetails.data.candidate_profile)}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const mapStateToProps = (state) => {
  const { JobReducer } = state;
  const { jobDetails } = JobReducer;
  return {
    jobDetails: JobReducer.jobDetails,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    jobDataAPI: (data) => dispatch(jobDataAPI(jobId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CareerDetails);
