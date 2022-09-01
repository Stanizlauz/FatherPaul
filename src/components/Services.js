import React from "react";
import { Link } from "react-router-dom";

export default function Services() {
  return (
    <>
      {/* Service Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div
            className="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: 600 }}
          >
            <p className="d-inline-block border rounded-pill py-1 px-4">
              What I Provide.
            </p>
            <h4>Get exceptional service, Grow your Portfilio.</h4>
          </div>
          <div className="row g-4">
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="service-item bg-light rounded h-100 p-3">
                <div
                  className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4"
                  style={{ width: 65, height: 65 }}
                >
                  <i className="fa fa-address-book text-primary fs-4" />
                </div>
                <h4 className="mb-3">Personalized Approach</h4>
                <p className="mb-4">
                  Every client gets a plan that meets his/her peculiar needs.
                </p>
                <Link to="/experience" className="btn">
                  <i className="fa fa-plus text-primary me-3" />
                  Read More
                </Link>
                {/* <a className="btn" href><i className="fa fa-plus text-primary me-3" />Read More</a> */}
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="service-item bg-light rounded h-100 p-3">
                <div
                  className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4"
                  style={{ width: 65, height: 65 }}
                >
                  <i className="fa fa-id-badge text-primary fs-4" />
                </div>
                <h4 className="mb-3">Indept Analysis</h4>
                <p className="mb-4">
                  I carry out lot of research and testing to ensure maximum
                  accuracy.
                </p>
                <Link to="/experience" className="btn">
                  <i className="fa fa-plus text-primary me-3" />
                  Read More
                </Link>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="service-item bg-light rounded h-100 p-3">
                <div
                  className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4"
                  style={{ width: 65, height: 65 }}
                >
                  <i className="fa fa-handshake text-primary fs-4" />
                </div>
                <h4 className="mb-3">Safe and Profitable Opportunities</h4>
                <p className="mb-4">
                  Times are hard, I ensure every investments is safe and returns
                  the highest possible yeild.
                </p>
                <Link to="/experience" className="btn">
                  <i className="fa fa-plus text-primary me-3" />
                  Read More
                </Link>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="service-item bg-light rounded h-100 p-3">
                <div
                  className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4"
                  style={{ width: 65, height: 65 }}
                >
                  <i className="fa fa-check text-primary fs-4" />
                </div>
                <h4 className="mb-3">Global Mixture</h4>
                <p className="mb-4">
                  Where ever you are in the world, you can connect with me and
                  build a rich portfolio.
                </p>
                <Link to="/experience" className="btn">
                  <i className="fa fa-plus text-primary me-3" />
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Service End */}

      {/* Services */}
      {/* <div id="services" className="cards-1 bg-gray">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2>Explore our services</h2>
            </div>{" "}
          </div>{" "}
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-icon">
                  <span className="fas fa-check" />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Exclusive Approach</h5>
                  <p>
                  Established lots of utmost trading approach.
                  </p>
             
                </div>
              </div>
             
              <div className="card">
                <div className="card-icon red">
                  <span className="fas fa-check" />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Global Mixture</h5>
                  <p>
                  I present you the various aspect of financial business
                  consultations. Regardless of your location
                  </p>
            
                </div>
              </div>
             
              <div className="card">
                <div className="card-icon green">
                  <span className="fas fa-check" />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Investment Securities</h5>
                  <p>
                  Securing client accounts.
                  </p>
                  
                </div>
              </div>
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
      */}
    </>
  );
}
