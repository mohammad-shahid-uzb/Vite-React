import { useState } from "react";
import emailjs from "emailjs-com";
import React from "react";



export const Contact = (props) => {
  
  const contactData=props.Contact

  const mystyle = {
    color: "hsl(110, 120%, 60%)",
    padding: "10px",
    fontFamily: "system-ui"

  };
  const infostyle = {
    color: "hsl(190, 100%, 80%)",
    fontFamily: "system-ui"
  };

  return (
    <div>
      <div id="contact">
        <div className="container">
        <div className="row">
          <div className="col-md-8">
              <div className="section-title">
                <h2 style={mystyle}>Get In Touch</h2>
                <p style={mystyle}>
                  Please fill out the form below to send us an email and we will
                  get back to you as soon as possible.
                </p>
              </div>
              <form name="sentMessage" validate onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="Name"
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows="4"
                    placeholder="Message"
                    required
                    onChange={handleChange}
                  ></textarea>
                  <p className="help-block text-danger"></p>
                </div>
                <div id="success"></div>
                <button type="submit" className="btn btn-info btn-lg">
                  Send Message
                </button>
              </form>
            </div>
            <div className="col-md-3 col-md-offset-1 contact-info">
            <div className="contact-item">
              <h3 style={infostyle}><em>Contact Info</em></h3>
              <p>
                <span>
                  <i className="fa fa-map-marker"></i> Address
                </span>
                {contactData ? contactData.address : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-phone"></i> Phone
                </span>{" "}
                {contactData ? contactData.phone : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-envelope-o"></i> Email
                </span>{" "}
                {contactData ? contactData.email : "loading"}
              </p>
            </div>
          </div>
          </div>
         
          <div className="col-md-12">
            <div className="row">
              <div className="social">
                <ul>
                  <li>
                    {/* <a href={contactData ? contactData.facebook : "/home"}> */}
                    <a >
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a >
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a >
                      <i className="fa fa-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
