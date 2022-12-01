import React from "react";
import Connect from "../Dashboard/Connect";
import Topper from "../Dashboard/Toppers"
import Feedback from "../Dashboard/Feedback";
import CourseCard from "../Cards/CourseCard";
import { Link } from "react-router-dom";
import DemoVideos from "../Dashboard/Demo-vedios";

function School() {
  return (
    <>
      <section className="cards" id="courses">
        <div className="container">
          <div className="row">
            <div className="col-md-12 bg-light-blue box-radius">
              <h3 className="headline text-center mb-3">
                <span className="text-blue">Courses</span> we offer
              </h3>
              <p className="sub-headline text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Volutpat montes, pharetra cras odio nec scelerisque viverra.
              </p>

              <div className="article-header with-search">
                <div className="pills">
                  <Link to="/courses/competativeExams"  >
                    Competative Exams
                  </Link>
                  <Link to="/courses/college" >Colleges</Link>
                  <Link to="/courses/school" className="active">School</Link>
                </div>

                <form action="">
                  <input
                    type="text"
                    className="search"
                    placeholder="Search Course"
                  />
                </form>
              </div>

              <div className="explore-lakshya bg-light-orange">
                <div>
                  <img
                    src=" ../assets/imgs/mahesh-tutorials-school.png"
                    alt="lakshya-logo"
                  />
                  <p>
                    For over three decades, Mahesh tutorials has been mentoring
                    students for success, in academics and in life.{" "}
                  </p>
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

      <Topper />

      {/* <DemoVideos /> */}

      <Feedback />

      <Connect />

    </>
  );
}

export default School;
