import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';



function VideoCard() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      {/*====================== VIDEO STARTS HERE ========================*/}
      <div className="article">
        <div className="thumbnail">
          <a href="http://media.w3.org/2010/05/sintel/trailer.mp4" data-fancybox>
            <img src="../assets/imgs/video1.png" alt="image" />
          </a>
        </div>

        <div className="detail">
          <h5>Geometry</h5>
          <div className="description">
            <p>
              Get experts advise & start referring to the question
              papers of previous yrs.
            </p>
          </div>
          <div className="tag-link flex-none">
            <div className="tag blue bg-light-blue">Maths</div>
            <div className="tag bg-light-orange">className VII</div>
          </div>
        </div>
      </div>
      {/* ================== VIDEO ENDS HERE =========================*/}
    </>
  );
}

export default VideoCard;