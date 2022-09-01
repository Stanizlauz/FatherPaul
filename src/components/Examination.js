import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Testimonials from "./Testimonials";
import { Link } from "react-router-dom";

export default function Examination() {
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
            Examination
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
                Examination
              </li>
            </ol>
          </nav>
        </div>
      </div>
      {/* Page Header End */}
      <br />
      <section>
        <div className="section_our_solution">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="our_solution_category">
                  <div className="solution_cards_box">
                    <div className="solution_card">
                      <div className="hover_color_bubble" />
                      <div className="so_top_icon">
                        <img
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Twitter_Verified_Badge.svg/2048px-Twitter_Verified_Badge.svg.png"
                          alt="."
                        />
                      </div>
                      <div className="solu_title">
                        <h3>State Securities Law Exam</h3>
                      </div>
                      <div className="solu_description">
                        <p>
                          Series 63 - Uniform Securities Agent State Law
                          Examination.
                        </p>{" "}
                        <hr />
                        <p>Mar 10, 1993</p> <hr />
                      </div>
                    </div>
                    <div className="solution_card">
                      <div className="hover_color_bubble" />
                      <div className="so_top_icon">
                        <img
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Twitter_Verified_Badge.svg/2048px-Twitter_Verified_Badge.svg.png"
                          alt="."
                        />
                      </div>
                      <div className="solu_title">
                        <h3>General Industry/Products Exam</h3>
                      </div>
                      <div className="solu_description">
                        <p>SIE - Securities Industry Essentials Examination.</p>{" "}
                        <h />
                        <p>Oct 1, 2018</p> <hr />
                      </div>
                    </div>
                  </div>
                  {/*  */}
                  <div className="solution_cards_box sol_card_top_3">
                    <div className="solution_card">
                      <div className="hover_color_bubble" />
                      <div className="so_top_icon">
                        <img
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Twitter_Verified_Badge.svg/2048px-Twitter_Verified_Badge.svg.png"
                          alt="."
                        />
                      </div>
                      <div className="solu_title">
                        <h3>General Industry/Products Exam</h3>
                      </div>
                      <div className="solu_description">
                        <p>
                          Series 7 - General Securities Representative
                          Examination.
                        </p>{" "}
                        <hr />
                        <p>Feb 23, 1993</p> <hr />
                      </div>
                    </div>
                    {/* <div className="solution_card">
            <div className="hover_color_bubble" />
            <div className="so_top_icon">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Twitter_Verified_Badge.svg/2048px-Twitter_Verified_Badge.svg.png" alt="." />

            </div>
            <div className="solu_title">
              <h3>Demo 4</h3>
            </div>
            <div className="solu_description">
              <p>
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
              </p>
            </div>
          </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />
      <Footer />
    </>
  );
}
