import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import styles from "./styles/Form.module.css";
import ghosty from "../assets/icons/ghost_icon.png";

class Form extends Component {
  state = {
    fullName: "",
    email: "",
    showModal: false,
  };

  handleInputChange = (event) => {
    // get value/name of input which triggered the change
    const value = event.target.value;
    const name = event.target.name;

    // updating the input's state
    this.setState({
      [name]: value,
    });
  };

  handleFormSubmit = (event) => {
    // Preventing page refresh
    event.preventDefault();
    console.log("submit pressed!");

    // conditionals
    if (!this.state.fullName.length) {
      // alert for debug only
      // alert("Provide your name please");
      this.setState({
        fullName: "",
        showModal: true,
        modalMessage: `Hold up! You need to enter your name please.`,
      });
      return;
    } else if (
      this.state.email === "undefined" ||
      this.state.email.length <= 9 ||
      !this.state.email.includes("@")
    ) {
      // convert alerts to modal popup
      // alert("Please provide a proper email");
      this.setState({
        email: "",
        showModal: true,
        modalMessage: `Hi ${this.state.fullName}! 
        Please provide your finest, legitimate email address.`,
      });
      return;
    }

    this.setState({
      fullName: "",
      showModal: true,
      modalMessage: `Thanks ${this.state.fullName}! 
      I'll be in touch as soon as possible.`,
    });
  };

  handleCloseModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    return (
      <>
        {/* render the form */}
        <div
          className={`${styles.wrapper} rounded align-items-stretch -mt-16`}
        >
          <div className="bg-dark p-8 mt-8">
            <div className="flexTop flex align-items-center justify-between">
              <div className="text-white">
                <i className="fa-solid fa-envelope fa-3x"></i>
              </div>
              <div className={`${styles.avatar} -mr-2`}>
                <img
                  className="lilGhosty"
                  src={`${ghosty}`}
                  alt="lil ghosty avatar"
                />
              </div>
            </div>
            <div className="pt-5">Please get in touch via this secure form</div>
            <div className="reach-out">
              <em>I need your email to reach you!</em>
            </div>
          </div>
          <div className="contact-form bg-dark grid-cols-2 p-4 justify-center">
            <form className="form">
              <div className="form-group justify-center pt-2 w-full">
                <label htmlFor="message">Message</label>
                <textarea
                  name="message"
                  className="form-control w-full mt-2"
                  required
                  style={{
                    fontFamily: "Poppins",
                    color: "black",
                    fontSize: "14px",
                  }}
                  rows="5"
                  placeholder="Type a message here ..."
                ></textarea>
              </div>
              <div
                className="d-flex align-items-center flex-wrap 
                justify-content-between pt-4 w-full"
              >
                <div className="form-group pt-lg-2 pt-3 w-full">
                  <label htmlFor="name">Your Name</label>
                  <input
                    value={this.state.fullName}
                    name="fullName"
                    onChange={this.handleInputChange}
                    type="text"
                    className="form-control pr-8 w-full"
                    placeholder="Your Name"
                    required
                    style={{ fontFamily: "Poppins", color: "black" }}
                  />
                </div>
                <div className="form-group pt-lg-2 pt-3 w-full">
                  <label htmlFor="name">Your Email</label>
                  <input
                    value={this.state.email}
                    type="email"
                    name="email"
                    className="form-control pr-8 w-full"
                    onChange={this.handleInputChange}
                    placeholder="Your Email"
                    required
                    style={{ fontFamily: "Poppins", color: "black" }}
                  />
                </div>
              </div>
              <div
                className="flex flex-col md:flex-row items-center justify-center 
                  md:justify-between pt-8-lg-5 mt-lg-4 mt-5"
              >
                <div
                  className="closeBtn btn btn-primary py-2 px-6 text-lg rounded-lg 
                  shadow-md text-white bg-lumi-pink hover:bg-purps focus:outline-none 
                  focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 cursor-pointer"
                  data-bs-toggle="modal"
                  data-bs-target="#myModal"
                  type="button"
                  onClick={this.handleFormSubmit}
                >
                  Submit
                </div>
              </div>
            </form>
          </div>
        </div>
        <div
          className="modal fade"
          id="myModal"
          tabIndex="-1"
          aria-labelledby="myModalLabel"
          aria-hidden="true"
        >
          {/* <!-- Modal --> */}
          <Modal
            // show.hide
            show={this.state.showModal}
            onHide={this.handleClose}
            // prevent? auto scrolling
            className={this.state.showModal ? "modalOpen" : ""}
          >
            <div className={`${styles.modalCard}`}>
              <div className={`${styles.modalContent}`}>
                <Modal.Header className={`${styles.modalHeader}`} closeButton>
                  <Modal.Title>{this.state.modalMessage}</Modal.Title>
                </Modal.Header>
                {/* <Modal.Body>{this.state.modalMessage}</Modal.Body> */}
                <Modal.Footer className={`${styles.modalFooter}`}>
                  {/* modal btn */}
                  <div
                    variant="secondary"
                    className={`${styles.closeBtn} btn btn-primary py-2 px-6 text-lg rounded-lg 
                  shadow-md text-white bg-lumi-pink hover:bg-purps focus:outline-none focus:ring-2
                focus:ring-blue-400 focus:ring-opacity-75 cursor-pointer mx-auto`}
                    data-bs-toggle="modal"
                    data-bs-target="#myModal"
                    type="button"
                    onClick={this.handleCloseModal}
                  >
                    Close
                  </div>
                </Modal.Footer>
              </div>
            </div>
          </Modal>
        </div>
      </>
    );
  }
}

export default Form;