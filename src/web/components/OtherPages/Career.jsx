import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { connect } from "react-redux";
import { jobListAPI } from "../../../redux/action/jobs";
import { WebRoutes } from "../../../routes";
import { parseHtml } from "../../../Utils/utils";

const Career = ({ jobListAPI, jobData }) => {
  useEffect(() => {
    jobListAPI();
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
                  <li class="breadcrumb-item active" aria-current="page">
                    Career
                  </li>
                </ol>
              </nav>

              <h4>Career</h4>

              <div class="jumbotron bg-light-orange">
                <div class="row">
                  <div class="col-md-6">
                    <h2>
                      <span class="text-orange">Life At </span>MT Educare
                    </h2>
                    <p>We have been making the right investments in creating the necessary framework, technology and processes to capitalise on a new world of learning. We seek to continue the transformation growth across the entire education value chain</p>
                  </div>

                  <div class="col-md-6">
                    <div class="img-wrapper">
                      <img src="../assets/imgs/career.png" alt="image" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="why-mt-educare culture-values">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <h3 class="text-center">Our Culture And Values</h3>
              <p class="text-center">Culture and values of MT Educare manifest different qualities and we expect all our employees to embrace it in their day to day activities.</p>
            </div>
          </div>

          <div class="row">
            <div class="col-md-4">
              <div class="mt-card bg-light-blue">
                <img src="../assets/imgs/icon-mentoring.svg" alt="icon" />
                <h5>Mentoring</h5>
                <p>MT Educare constantly coaches its team members/ individual employees on various aspects of business / functional areas. </p>
              </div>
            </div>

            <div class="col-md-4">
              <div class="mt-card bg-light-orange">
                <img src="../assets/imgs/icon-innovation.svg" alt="icon" />
                <h5>Innovation</h5>
                <p>Innovation & Creativity form the backbone of our organization. We constantly evolve our processes for improved service and enhanced quality that cuts through </p>
              </div>
            </div>

            <div class="col-md-4">
              <div class="mt-card bg-light-blue">
                <img src="../assets/imgs/icon-teamwork.svg" alt="icon" />
                <h5>Team Work</h5>
                <p>MT Educare constantly builds an organization culture, which germinates the feeling of ‘Team’. We believe in working cohesively and build strong relationships</p>
              </div>
            </div>

            <div class="col-md-4">
              <div class="mt-card bg-light-orange">
                <img src="../assets/imgs/icon-trust.svg" alt="icon" />
                <h5>Trust</h5>
                <p>MT Educare engages with its customers at regular intervals and offers value for their investments, with the ethos that every relationship is important and long-term.</p>
              </div>
            </div>

            <div class="col-md-4">
              <div class="mt-card bg-light-blue">
                <img src="../assets/imgs/icon-proexcellence.svg" alt="icon" />
                <h5>Pro-Excellence</h5>
                <p>At MT Educare, we endeavor to achieve the highest standards in work. We believe in challenging the conventional thinking & experimenting with </p>
              </div>
            </div>

            <div class="col-md-4">
              <div class="mt-card bg-light-orange">
                <img src="../assets/imgs/icon-integrity.svg" alt="icon" />
                <h5>Integrity</h5>
                <p>At MT Educare, we conduct our business fairly, with transparency & honesty. We honour our commitments and take responsibility of our actions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="management job-openings">
        <div class="container">
          <div class="row">
            <div class="col-md-12 text-center">
              <h3 class="headline">Openings</h3>
            </div>
          </div>
          <div class="row">
            {jobData &&
              jobData.data &&
              jobData.data.map((item, index) => (
                <div class="col-md-4" key={index}>
                  <div class="card-address">
                    <h5>{item.title}</h5>
                    <div class="detail job">
                      <div class="job-location">
                        <p>Location: {item.location}</p>
                        <p>Experience: {parseHtml(item.requirement)}</p>
                      </div>

                      <Link to={`${WebRoutes.CAREER_DETAILS}${item.id}`}>
                        <img src="../assets/imgs/icon-arrow-right.svg" alt="icon" />
                      </Link>
                    </div>
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
  const { JobReducer } = state;
  const { jobData } = JobReducer;
  return {
    jobData: JobReducer.jobData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    jobListAPI: () => dispatch(jobListAPI()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Career);
