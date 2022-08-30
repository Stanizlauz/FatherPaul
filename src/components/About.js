import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Testimonials from "./Testimonials";

export default function About() {
  return (
    <>
      {/* ======= Breadcrumbs ======= */}
      <Header />

      <div
        className="breadcrumbs d-flex align-items-center"
        style={{ backgroundImage: 'url("images/janet2.jpg")' }}
      >
        <div className="container position-relative d-flex flex-column align-items-center">
          <h2>About</h2>
          <ol>
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>About</li>
          </ol>
        </div>
      </div>
      {/* End Breadcrumbs */}

      {/* ======= About Section ======= */}
      <section id="about" className="about">
        <div className="container" data-aos="fade-up">
          <div className="row gy-4" data-aos="fade-up">
            <div className="col-lg-4">
              <img src="images/janet3.jpg" className="img-fluid" alt="." />
            </div>
            <div className="col-lg-8">
              <div className="content ps-lg-5">
                <h3>
                I have been in the markets for over 12 years and have built proficiency, skill and excellence in various strategies on winnning the markets.
                </h3>

                <ul>
                  <li>
                    <i className="bi bi-check-circle-fill" />
                    I am duly registered and accredited by FINRA nad other top
                  brokerage regulatory bodies.
                  </li>
                  <li>
                    <i className="bi bi-check-circle-fill" />I give a self-assured grade of
                  securities on my client’s investments; ensuring that they
                  never lose out on a trading or investment promise.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End About Section */}

      {/* Services */}
      <section>
      <div id="services" className="cards-1 bg-gray">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2>What I Provide</h2>
            </div>{" "}
            {/* end of col */}
          </div>{" "}
          {/* end of row */}
          <div className="row">
            <div className="col-lg-12">
              {/* Card */}
              <div className="card">
                <div className="card-icon">
                  <span className="fas fa-check" />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Personalized Approach</h5>
                  <p>
                  Every client gets a plan that meets his/her peculiar needs.
                  </p>
                  {/* <a className="read-more no-line" href="article.html">
                    Learn more <span className="fas fa-long-arrow-alt-right" />
                  </a> */}
                </div>
              </div>
              {/* end of card */}
              {/* Card */}
              <div className="card">
                <div className="card-icon red">
                  <span className="fas fa-check" />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Indept Analysis</h5>
                  <p>
                  I carry out lot of research and testing to ensure maximum
                  accuracy.
                  </p>
                  {/* <a className="read-more no-line" href="article.html">
                    Learn more <span className="fas fa-long-arrow-alt-right" />
                  </a> */}
                </div>
              </div>
              {/* end of card */}
              {/* Card */}
              <div className="card">
                <div className="card-icon green">
                  <span className="fas fa-check" />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Investment Securities</h5>
                  <p>
                  Securing client accounts.
                  </p>
                  {/* <a className="read-more no-line" href="article.html">
                    Learn more <span className="fas fa-long-arrow-alt-right" />
                  </a> */}
                </div>
              </div>
              {/* end of card */}
              <div className="card">
                <div className="card-icon yellow">
                  <span className="fas fa-check" />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Safe and profitable opportunities</h5>
                  <p>
                  Times are hard, I ensure every investment is safe and returns the highest possible yield
                  </p>
                  {/* <a className="read-more no-line" href="article.html">
                    Learn more <span className="fas fa-long-arrow-alt-right" />
                  </a> */}
                </div>
              </div>
            </div>{" "}
            {/* end of col */}
          </div>{" "}
          {/* end of row */}
        </div>{" "}
        {/* end of container */}
      </div>{" "}
      {/* end of cards-1 */}
      {/* end of services */}
      </section>
   
      <Testimonials />
      <Footer />
    </>
  );
}
