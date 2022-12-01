import React from "react";

function FeedbackCard() {
    return ( 
        <>
        {/*================== FEEDBACK STARTS HERE ===================== */}
         <div className="article">
                  <div className="detail">
                    <div className="description">
                      <p>
                        "This Course is amazing with the current version, I
                        can’t imagine it, how cool will it be when you finish
                        the all."
                      </p>
                    </div>

                    <div className="profile">
                      <img
                        src="../assets/imgs/img-profile-placeholder.png"
                        alt="placeholder"
                      />

                      <div className="user">
                        <p className="name">Jeremy Bieber</p>
                        <p className="role">Architect</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ==================FEEDBACK ENDS HERE ==================== */}

        </>
     );
}

export default FeedbackCard;