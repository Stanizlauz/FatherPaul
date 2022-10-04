import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Link } from "react-router-dom";

export default function Experience() {
  return (
    <>
      <Header />
      {/* Page Header Start */}
      <div
        className="container-fluid page-header1 py-5 mb-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container py-5">
          <h1 className="display-3 text-white mb-3 animated slideInDown">
            Experience
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
                Experience
              </li>
            </ol>
          </nav>
        </div>
      </div>
      {/* Page Header End */}

      <section className="section services-section" id="services">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="section-header">
                <h2>Registration History.</h2>
              </div>
              <p className="text-center">
                Study
              </p>
            </div>
          </div>
          <div className="row">
            {/* feaure box */}
            <div className="col-sm-6 col-lg-4">
              <div className="feature-box-1">
                <div className="icon">
                  <i className="fa fa-desktop" />
                </div>
                <div className="feature-content">
                  <h5>School</h5> <hr />
                  <p> Class</p>
                </div>
              </div>
            </div>
            {/* / */}
            {/* feaure box */}
            <div className="col-sm-6 col-lg-4">
              <div className="feature-box-1">
                <div className="icon">
                  <i className="fa fa-user" />
                </div>
                <div className="feature-content">
                  <h5>School</h5> <hr />
                  <p> Class</p>
                </div>
              </div>
            </div>
            {/* / */}
            {/* feaure box */}
            <div className="col-sm-6 col-lg-4">
              <div className="feature-box-1">
                <div className="icon">
                  <i className="fa fa-comment" />
                </div>
                <div className="feature-content">
                  <h5>School</h5> <hr />
                  <p>Class</p>
                </div>
              </div>
            </div>
            {/* / */}
            {/* feaure box */}
            <div className="col-sm-6 col-lg-4">
              <div className="feature-box-1">
                <div className="icon">
                  <i className="fa fa-image" />
                </div>
                <div className="feature-content">
                  <h5>School</h5> <hr />
                  <p>Class</p>
                </div>
              </div>
            </div>
            {/* / */}
            {/* feaure box */}

            {/* / */}
            {/* feaure box */}

            {/* / */}
          </div>
        </div>
      </section>

      {/* <div className="container-fluid header bg-primary p-0 mb-5">
        <div className="row g-0 align-items-center flex-column-reverse flex-lg-row">
          <div className="col-lg-6 p-5 wow fadeIn" data-wow-delay="0.1s">
            <h1 className="display-4 text-white mb-5">
              A Better Way To Invest
            </h1>
            <div className="row g-4">
              <div className="col-sm-4">
                <div className="border-start border-light ps-4">
                  <h2 className="text-white mb-1" data-toggle="counter-up">
                    12
                  </h2>
                  <p className="text-light mb-0">Years of Experience</p>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="border-start border-light ps-4">
                  <h2 className="text-white mb-1" data-toggle="counter-up">
                    54
                  </h2>
                  <p className="text-light mb-0">State Licenses</p>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="border-start border-light ps-4">
                  <h2 className="text-white mb-1" data-toggle="counter-up">
                    1597
                  </h2>
                  <p className="text-light mb-0">Client Served</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <Footer />
    </>
  );
}
