import React from "react";
import Feature from "./Feature";
import Footer from "./Footer";
import Header from "./Header";
import Testimonials from "./Testimonials";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <>
      <Header />
      {/* Page Header Start */}
      <div
        className="container-fluid page-header py-5 mb-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container py-5">
          <h1 className="display-3 text-white mb-3 animated slideInDown">
            About Me
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
                About
              </li>
            </ol>
          </nav>
        </div>
      </div>
      {/* Page Header End */}

      {/* About Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
              <div className="d-flex flex-column">
                <img
                  className="img-fluid rounded w-75 align-self-end"
                  src="img/bible.jpg"
                  alt="."
                />
                <img
                  className="img-fluid rounded w-50 bg-white pt-3 pe-3"
                  src="img/bible.jpg"
                  alt="."
                  style={{ marginTop: "-25%" }}
                />
              </div>
            </div>
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
              <p className="d-inline-block border rounded-pill py-1 px-4">
                About Me
              </p>
              <h1 className="mb-4">
              I'm a Priest
              </h1>
              <p>
            I'm a Minister.
              </p>
              {/* <p className="mb-4">Stet no et lorem dolor et diam, amet duo ut dolore vero eos. No stet est diam rebum amet diam ipsum. Clita clita labore, dolor duo nonumy clita sit at, sed sit sanctus dolor eos.</p> */}
              <p>
                <i className="far fa-check-circle text-primary me-3" />
               Hobby
              </p>
              <p>
                <i className="far fa-check-circle text-primary me-3" />
              Hobby
              </p>
              <p>
                <i className="far fa-check-circle text-primary me-3" />
                Hobby
              </p>
              {/* <a className="btn btn-primary rounded-pill py-3 px-5 mt-3" href>Read More</a> */}
            </div>
          </div>
        </div>
      </div>
      {/* About End */}

      <Feature />

      <Testimonials />

      <Footer />
    </>
  );
}
