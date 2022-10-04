import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      {/* Footer Start */}
      <div
        className="container-fluid bg-dark text-light footer mt-5 pt-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-3 col-md-6">
              <h5 className="text-light mb-4">Fr Paul</h5>
{/*          
              <p className="mb-2">
                <a href="https://t.me/Tradewithjanet" className="text-white">
                  <i className="fab fa-telegram me-3" />
                </a>
                Telegram
              </p> */}
              {/* <p className="mb-2"><i className="fab fa-telegram  me-3" />Telegram</p> */}
              <p className="mb-2">
                <i className="fa fa-envelope me-3" />
                example.info@example.com
                <a href="mailto: janethiggins.info@gmail.com"> </a>
              </p>
              {/* <div className="d-flex pt-2">
                <a
                  className="btn btn-outline-light btn-social rounded-circle"
                  href
                >
                  <i className="fab fa-twitter" />
                </a>
                <a
                  className="btn btn-outline-light btn-social rounded-circle"
                  href
                >
                  <i className="fab fa-facebook-f" />
                </a>
                <a
                  className="btn btn-outline-light btn-social rounded-circle"
                  href
                >
                  <i className="fab fa-telegram" />
                </a>
                <a
                  className="btn btn-outline-light btn-social rounded-circle"
                  href
                >
                  <i className="fab fa-linkedin-in" />
                </a>
              </div> */}
            </div>
            {/* <div className="col-lg-3 col-md-6">
              <h5 className="text-light mb-4">Services</h5>
              <a className="btn btn-link" href>
                Cardiology
              </a>
              <a className="btn btn-link" href>
                Pulmonary
              </a>
              <a className="btn btn-link" href>
                Neurology
              </a>
              <a className="btn btn-link" href>
                Orthopedics
              </a>
              <a className="btn btn-link" href>
                Laboratory
              </a>
            </div> */}
            <div className="col-lg-3 col-md-6">
              <h5 className="text-light mb-4">Quick Links</h5>
              <Link to="/" className="btn btn-link">
                    Home
                  </Link>
                  <Link to="/about" className="btn btn-link">
                    About
                  </Link>
                  <Link to="/experience" className="btn btn-link">
                    Experience
                  </Link>
                  <Link to="/examination" className="btn btn-link">
                    Examination
                  </Link>
                  <Link to="/contact" className="btn btn-link">
                    Contact
                  </Link>
              {/* <a className="btn btn-link" href>
                About Us
              </a> */}
              {/* <a className="btn btn-link" href>
                Contact Us
              </a>
              <a className="btn btn-link" href>
                Our Services
              </a>
              <a className="btn btn-link" href>
                Terms &amp; Condition
              </a>
              <a className="btn btn-link" href>
                Support
              </a> */}
            </div>
            {/* <div className="col-lg-3 col-md-6">
              <h5 className="text-light mb-4">Newsletter</h5>
              <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
              <div
                className="position-relative mx-auto"
                style={{ maxWidth: 400 }}
              >
                <input
                  className="form-control border-0 w-100 py-3 ps-4 pe-5"
                  type="text"
                  placeholder="Your email"
                />
                <button
                  type="button"
                  className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2"
                >
                  SignUp
                </button>
              </div>
            </div> */}
          </div>
        </div>
        <div className="container">
          <div className="copyright">
            <div className="row">
              <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                ©{" "}
                <p className="border-bottom">
                  Father Paul
                </p>
                 All Right Reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer End */}

    </>
  );
}
