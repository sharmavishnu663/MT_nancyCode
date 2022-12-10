import React, { useState } from "react";
import { Modal } from "react-bootstrap";

function ApplyNow({ openModal, handleCancel, appyJobAPI }) {
  // const [name, setName] = useState("");
  // const [mobile, setMobile] = useState("");
  // const [email, setEmail] = useState("");
  // const [location, setLocation] = useState("");
  // const [department, setDepartment] = useState("");
  // const [position, setPosition] = useState("");
  // const [emailError, setEmailError] = useState("");

  // const onFinish = () => {
  //   const data = {
  //     name: name,
  //     mobile: mobile,
  //     email: email,
  //     location: location,
  //     department: department,
  //     position: position,
  //   };
  //   appyJobAPI(data);
  //   handleCancel();
  // };

  return (
    <>
      <Modal
        show={openModal}
        onHide={handleCancel}
        className="idpl-modal"
        centered
        backdrop={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Apply Job</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="col-lg-12 col-md-12 ">
            {/* <Form
              labelCol={{
                span: 8,
              }}
              wrapperCol={{
                span: 16,
              }}
              onFinish={onFinish}
            >
              <div className="form-wrp">
                <div className="idpl-form">
                  <Form.Item
                    label="Name"
                    name="name"
                    className="form-label"
                    rules={[
                      { required: true, message: "Please input your name!" },
                    ]}
                  >
                    <Input
                      type="text"
                      name="name"
                      value={name}
                      className="form-control"
                      placeholder="Eg: John Doe"
                      onChange={(e) => setName(e.target.value)}
                    />
                  </Form.Item>
                </div>
                <div className="idpl-form">
                  <Form.Item
                    label="Mobile Number"
                    name="mobile"
                    className="form-label"
                    rules={[
                      {
                        required: true,
                        message: "Please put  your mobile number!",
                      },
                    ]}
                  >
                    <Input
                      type="text"
                      name="mobile"
                      pattern="[0-9]*"
                      className="form-control"
                      placeholder="Eg: 991234XXXX"
                      maxLength={10}
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value)}
                    />
                  </Form.Item>
                </div>
                <div className="idpl-form">
                  <Form.Item
                    label="Email"
                    name="email"
                    className="form-label"
                    rules={[
                      {
                        required: true,
                        message: "Please put  your email Address!",
                      },
                    ]}
                  >
                    <Input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Eg: name@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Form.Item>
                </div>
                <div className="idpl-form">
                  <Form.Item
                    label="Location"
                    name="location"
                    className="form-label"
                    rules={[
                      { required: true, message: "Please put your location !" },
                    ]}
                  >
                    <Input
                      type="text"
                      name="location"
                      className="form-control"
                      placeholder="Eg: Noida"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                    />
                  </Form.Item>
                </div>
                <div className="idpl-form">
                  <Form.Item
                    label="Department"
                    name="department"
                    className="form-label"
                    rules={[
                      {
                        required: true,
                        message: "Please put your Department!",
                      },
                    ]}
                  >
                    <Input
                      type="text"
                      name="department"
                      className="form-control"
                      placeholder="Eg: IT"
                      value={department}
                      onChange={(e) => setDepartment(e.target.value)}
                    />
                  </Form.Item>
                </div>
                <div className="idpl-form">
                  <Form.Item
                    label="Position"
                    name="position"
                    className="form-label"
                    rules={[
                      { required: true, message: "Please put your Position!" },
                    ]}
                  >
                    <Input
                      type="text"
                      name="position"
                      className="form-control"
                      placeholder="Eg: Senior Developer"
                      value={position}
                      onChange={(e) => setPosition(e.target.value)}
                    />
                  </Form.Item>
                </div>
                <div className="idpl-form">
                  <button type="submit" className="idpl-form-btn">
                    Submit
                  </button>
                </div>
              </div>

            </Form> */}

            <p>Please send your resume below E-mail address</p>
            <span><a href="mailto: hrd@mteducare.com"> hrd@mteducare.com</a></span>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ApplyNow;
