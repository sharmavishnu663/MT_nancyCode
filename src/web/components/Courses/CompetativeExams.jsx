import React from "react";
import { Link } from "react-router-dom";
import Connect from "../Dashboard/Connect";
import Feedback from "../Dashboard/Feedback";
import TopperDetails from "../Dashboard/Toppers";
import DemoVideos from "../Dashboard/Demo-vedios";
import CourseCard from "../Cards/CourseCard";
function CompetativeExam() {
  return (
    <>
      <section className="cards" id="courses">
        <div className="container">
          <div className="row">
            <div className="col-md-12 bg-light-blue box-radius">
              <h3 className="headline text-center mb-3">
                <span className="text-blue">Courses</span> we offer
              </h3>
              <p className="sub-headline text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat montes, pharetra cras odio nec scelerisque viverra.</p>

              <div className="article-header with-search">
                <div className="pills">
                  <Link to="/courses/competativeExams" className="active">
                    Competative Exams
                  </Link>
                  <Link to="/courses/college">Colleges</Link>
                  <Link to="/courses/school">School</Link>
                </div>

                <form action="">
                  <input type="text" className="search" placeholder="Search Course" />
                </form>
              </div>

              <div className="explore-lakshya bg-light-orange">
                <div>
                  <img src="../assets/imgs/lakshya-logo.png" alt="lakshya-logo" />
                  <p>Lakshay is our partner which provides the higher secondary education science courses for competitive exams.</p>
                </div>
                <a href="https://www.lakshyainstitute.com/" className="btn btn-lg">
                  Explore Lakshya
                </a>
              </div>

              <div className="articles">
                <CourseCard />

                <CourseCard />

                <CourseCard />

                <CourseCard />

                <CourseCard />

                <CourseCard />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cards provisions">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h3 className="headline text-center mb-3">
                Our <span className="text-blue">provisions</span>
              </h3>
              <p className="sub-headline text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>

              <div className="provision-list">
                <ul>
                  <li>
                    <img src="../assets/imgs/icon-hostel.svg" alt="icon" />
                    <span>Hostel Facilities</span>
                  </li>
                  <li>
                    <img src="../assets/imgs/icon-transport.svg" alt="icon" />
                    <span>Transportation Services</span>
                  </li>
                  <li>
                    <img src="../assets/imgs/icon-assignments.svg" alt="icon" />
                    <span>Daily Assignments</span>
                  </li>
                  <li>
                    <img src="../assets/imgs/icon-book.svg" alt="icon" />
                    <span>Revision Booklets</span>
                  </li>
                  <li>
                    <img src="../assets/imgs/icon-result.svg" alt="icon" />
                    <span>Result Analysis</span>
                  </li>
                </ul>
              </div>
              <div className="shadow"></div>
            </div>
          </div>
        </div>
      </section>

      {/* <DemoVideos/> */}

      <TopperDetails />

      <Feedback />

      <Connect />
    </>
  );
}

export default CompetativeExam;
