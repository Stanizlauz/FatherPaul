import React from "react";
import Footer from "./Footer";
import Header from "./Header";

export default function Experience() {
  return (
    <>
      <Header />
       {/* ======= Breadcrumbs ======= */}
       {/* <Header /> */}

<div
  className="breadcrumbs d-flex align-items-center"
  style={{ backgroundImage: 'url("images/janet3.jpg")' }}
>
  <div className="container position-relative d-flex flex-column align-items-center">
    <h2>Experiences</h2>
    <ol>
      <li>
        <a href="index.html">Home</a>
      </li>
      <li>Experience</li>
    </ol>
  </div>
</div>
{/* End Breadcrumbs */}


<section className="section services-section" id="services">
  <div className="container">
    <div className="row">
      <div className="col-lg-6">
      <div className="section-header">
            <h2>Registration History.</h2>
          </div>
          <p className="text-center">This section provides the SROs and U.S states/territories the broker is currently registered and licensed with</p>
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
            <h5>CITIGROUP GLOBAL MARKETS INC. (CRD# 7059)</h5> <hr />
            <p> Registered with this Firm since 1995 - 2009.</p>
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
            <h5>Crypton Trades (CRD# 454)</h5> <hr />
            <p> Registered with this Firm since 2020.</p>
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
            <h5> CHATFIELD DEAN & CO., INC. (CRD# 14714)</h5> <hr />
            <p>Registered with this Firm since 1993</p>
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
            <h5>GLENFED BROKERAGE SERVICES (CRD# 13648)</h5> <hr />
            <p>Registered with this Firm since 1993</p>
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
    
<section className="bg-info">
<div className="section-header">
            <h2>Projcet Statistics.</h2>
          </div>
          <div className="container">
  <div className="row">
    <div className="col-md-3 col-sm-6">
      <div className="counter">
        <span className="counter-value">1597</span>
        <h3>Clients Served</h3>
      </div>
    </div>
    <div className="col-md-3 col-sm-6">
      <div className="counter green">
        <span className="counter-value">12</span>
        <h3>Years of Experience</h3>
      </div>
    </div>
    <div className="col-md-3 col-sm-6">
      <div className="counter">
        <span className="counter-value">3</span>
        <h3>Examination Passed</h3>
      </div>
    </div>
    <div className="col-md-3 col-sm-6">
      <div className="counter green">
        <span className="counter-value">53</span>
        <h3>State Licences</h3>
      </div>
    </div>
  </div>
</div>
</section>

<Footer />

    </>
  );
}
