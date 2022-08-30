import React from "react";

export default function Services() {
  return (
    <>
      {/* Services */}
      <div id="services" className="cards-1 bg-gray">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2>Explore our services</h2>
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
                  <h5 className="card-title">Exclusive Approach</h5>
                  <p>
                  Established lots of utmost trading approach.
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
                  <h5 className="card-title">Global Mixture</h5>
                  <p>
                  I present you the various aspect of financial business
                  consultations. Regardless of your location
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
            </div>{" "}
            {/* end of col */}
          </div>{" "}
          {/* end of row */}
        </div>{" "}
        {/* end of container */}
      </div>{" "}
      {/* end of cards-1 */}
      {/* end of services */}
     
    </>
  );
}
