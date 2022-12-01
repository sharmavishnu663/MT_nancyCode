import React from "react";
function CourseCard() {
    return ( 
    <>
         {/* ============= COURSE CARD STARTS HERE ================ */}
         
            <div className="article">
                  <div className="thumbnail">
                    <img src="../assets/imgs/article1.png" alt="image" />
                  </div>

                  <div className="detail">
                    <h5>Best IIT JEE Coaching</h5>
                    <div className="description">
                      <p>
                        Lakshya offers unparalleled IIT JEE coaching in India
                        which results in producing top rankers in entrance exams
                        who go on.
                      </p>
                    </div>
                    <div className="tag-link">
                      <div className="tag">IIT JEE</div>
                      <a href="#" className="btn btn-sm">
                        <img
                          src="../assets/imgs/icon-arrow-right.svg"
                          alt="icon"
                        />
                      </a>
                    </div>
                  </div>
                </div>

          {/* ================ COURSE CARD ENDS HERE ================== */}
    </>

     );
}
export default CourseCard