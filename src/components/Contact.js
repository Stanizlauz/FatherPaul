import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_p4jswda",
        "template_kh9sg39",
        e.target,
        "user_3Qmrr6MR0vYHh7GiRvOW9"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
      <Header />

      <div>
        {/* Page Header Start */}
        <div
          className="container-fluid page-header1 py-5 mb-5 wow fadeIn"
          data-wow-delay="0.1s"
        >
          <div className="container py-5">
            <h1 className="display-3 text-white mb-3 animated slideInDown">
              Contact Us
            </h1>
            <nav aria-label="breadcrumb animated slideInDown">
              <ol className="breadcrumb text-uppercase mb-0">
                <li className="breadcrumb-item">
                  <Link to="/" className="text-white">
                    Home
                  </Link>
                </li>
                <li
                  className="breadcrumb-item text-primary active"
                  aria-current="page"
                >
                  Contact
                </li>
              </ol>
            </nav>
          </div>
        </div>
        {/* Page Header End */}
        {/* Contact Start */}
        <div className="container-xxl py-5">
          <div className="container">
            <div className="row g-4">
              {/* <div className="col-lg-4">
                <div className="h-100 bg-light rounded d-flex align-items-center p-5">
                  <div
                    className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-white"
                    style={{ width: 55, height: 55 }}
                  >
                    <i className="fa fa-map-marker-alt text-primary" />
                  </div>
                  <div className="ms-4">
                    <p className="mb-2">Address</p>
                    <h5 className="mb-0">123 Street, New York, USA</h5>
                  </div>
                </div>
              </div> */}
              <div className="col-lg-4">
                <div className="h-100 bg-light rounded d-flex align-items-center p-5">
                  <div
                    className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-white"
                    style={{ width: 55, height: 55 }}
                  >
                    <i className="fab fa-telegram text-primary" />
                  </div>
                  <div className="ms-4">
                    {/* <p className="mb-2"></p> */}
                    {/* <a
                      href="https://t.me/Tradewithjanet"
                      className="text-white"
                    >
                      <h5 className="mb-0">Telegram</h5>

                      
                    </a> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="h-100 bg-light rounded d-flex align-items-center p-5">
                  <div
                    className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-white"
                    style={{ width: 55, height: 55 }}
                  >
                    <i className="fa fa-envelope-open text-primary" />
                  </div>
                  <div className="ms-4">
                    <p className="mb-2">Mail Us Now</p>
                    <a
                      href="mailto: janethiggins.info@gmail.com"
                      className="email"
                    >
                      <h5 className="mb-0">example.info@gmail.com</h5>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                <div className="bg-light rounded p-5">
                  <p className="d-inline-block border rounded-pill py-1 px-4">
                    Contact Us
                  </p>
                  <h1 className="mb-4">Have Any Query? Please Contact Me!</h1>
                  <p className="mb-4">Get in touch</p>
                  <form onSubmit={sendEmail}>
                    <div className="row g-3">
                      <div className="col-md-6">
                        <div className="form-floating">
                          <input
                            name="name"
                            required
                            type="text"
                            className="form-control"
                            id="name"
                            placeholder="Your Name"
                          />
                          <label htmlFor="name">Your Name</label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-floating">
                          <input
                            type="email"
                            name="user_email"
                            required
                            className="form-control"
                            id="email"
                            placeholder="Your Email"
                          />
                          <label htmlFor="email">Your Email</label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-floating">
                          <textarea
                            className="form-control"
                            name="message"
                            placeholder="Leave a message here"
                            id="message"
                            style={{ height: 100 }}
                            defaultValue={""}
                          />
                          <label htmlFor="message">Message</label>
                        </div>
                      </div>
                      <div className="col-12">
                        <button
                          className="btn btn-primary w-100 py-3"
                          type="submit"
                        >
                          Send Message
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
             
            </div>
          </div>
        </div>
        {/* Contact End */}
      </div>

     

      <Footer />
    </>
  );
}
