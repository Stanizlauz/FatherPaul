import React from "react";
import { Link } from "react-router-dom";

export default function AboutMe() {
  return (
    <>
      {/* About Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
              <div className="d-flex flex-column">
                <img
                  className="img-fluid rounded w-75 align-self-end"
                  src="img/janet.jpg"
                  alt="."
                />
                <img
                  className="img-fluid rounded w-50 bg-white pt-3 pe-3"
                  src="img/janet3.jpg"
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
                I have over 12 years of experience during which I have built
                proficiency in Trades and Investments...
              </h1>
              <p>
                I only trade in liquid assets or stocks for clients. I do not
                pose as either of the following: Tutor, Director, Stock Guide or
                communal firm partner.
              </p>
              {/* <p className="mb-4">Stet no et lorem dolor et diam, amet duo ut dolore vero eos. No stet est diam rebum amet diam ipsum. Clita clita labore, dolor duo nonumy clita sit at, sed sit sanctus dolor eos.</p> */}
              <p>
                <i className="far fa-check-circle text-primary me-3" />
                Round Profit Generation.
              </p>
              <p>
                <i className="far fa-check-circle text-primary me-3" />
                Safe and Profitable Opportunities.
              </p>
              <p>
                <i className="far fa-check-circle text-primary me-3" />
                Building rich Portfolio.
              </p>
              <Link
                to="/about"
                className="btn btn-primary rounded-pill py-3 px-5 mt-3"
              >
                Read More.
              </Link>
              {/* <a className="btn btn-primary rounded-pill py-3 px-5 mt-3" href>Read More</a> */}
            </div>
          </div>
        </div>
      </div>
      {/* About End */}

      {/* <section>
   <div>
  <div id="details" className="basic-1">
    <div className="container">
      <div className="row">
       
        <div className="col-lg-6 col-xl-5">
          <div className="text-container">
            <div className="section-title">About Me</div>
            <h2>I have over 12 years of experience during which I have built proficiency in Trades and Investments...</h2>
            <p>I only trade in liquid assets or stocks for clients. I do not pose as either of the following: Tutor, Director, Stock Guide or communal firm partner.</p>
          </div>
        </div>
        <div className="col-lg-6 col-xl-7">
          <div className="image-container">
            <img className="img-fluid" src="images/janet3.jpg" alt="alternative" />
          </div>
        </div> 
      </div> 
    </div>
  </div>
</div>
</section> */}
    </>
  );
}
