import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  // const myFunc = () => {
  //   let tog = document.getElementById("accordionSidebar");
  //   if (!tog?.classList.contains("toggled")) {
  //     tog?.classList.add("toggled");
  //   } else {
  //     tog?.classList.remove("toggled");
  //   }
  // };
  // const myFunc = () => {
  //   const tog = document.getElementById("navbarsExampleDefault");
  //   tog.classList.toggle("open");
  // };

  return (
    <>
      <div>
        {/* Topbar Start */}
      
        {/* Topbar End */}
        {/* Navbar Start */}
        <nav
          className="navbar navbar-expand-lg bg-white navbar-light fixed-top p-0 wow fadeIn"
          data-wow-delay="0.1s"
        >
          <a
            href="index.html"
            className="navbar-brand d-flex align-items-center px-4 px-lg-5"
          >
            <h1 className="m-0 text-primary">
              {/* <i className="far fa-hospital me-3" /> */}
              CJH
            </h1>
          </a>
          <button
            type="button"
            className="navbar-toggler me-4"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto p-4 p-lg-0">
              <Link to="/" className="nav-link active" aria-current="page">
                Home
              </Link>
              <Link to="/about" className="nav-link">
                About
              </Link>
              <Link to="/examination" className="nav-link">
                Examination
              </Link>
              <Link to="/experience" className="nav-link">
                Experience
              </Link>
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </div>
            {/* <a
              href
              className="btn btn-primary rounded-0 py-4 px-lg-5 d-none d-lg-block"
            >
              Appointment
              <i className="fa fa-arrow-right ms-3" />
            </a> */}
          </div>
        </nav>
        {/* Navbar End */}
      </div>

      {/* Navigation */}
      {/* <nav
        id="navbarExample"
        className="navbar navbar-expand-lg fixed-top navbar-light"
        aria-label="Main navigation"
        style={{ padding: "0px", backgroundColor: "ash", position: "fixed" }}
      >
        <div className="container">
          <a className="navbar-brand logo-image" href="index.html">
            <h3>CJH</h3>
          </a>
          <button
            className="navbar-toggler p-0 border-0"
            type="button"
            id="navbarSideCollapse"
            aria-label="Toggle navigation"
            onClick={myFunc}
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="navbar-collapse offcanvas-collapse"
            id="navbarsExampleDefault"
          >
            <ul className="navbar-nav ms-auto navbar-nav-scroll">
              <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/examination" className="nav-link">
                  Examination
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/experience" className="nav-link">
                  Experience
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link">
                  Contact
                </Link>
              </li>
            </ul>
            <span className="nav-item">
              <a className="btn-solid-sm" href="#contact">
                Get quote
              </a>
            </span>
          </div>{" "}
        </div>{" "}
      </nav>{" "} */}
      {/* end of navbar */}
      {/* end of navigation */}
      {/* ======= Header ======= */}
      {/* <header
        id="accordion"
        className="header d-flex align-items-center fixed-top"
        style={{ background: "rgba(27, 47, 69, 0.9)", padding: "12px 0" }}
      >
        <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
          <a href="index.html" className="logo d-flex align-items-center">
            <h1 className="d-flex align-items-center navbar-brand">CJH</h1>
          </a>
          <div onClick={myFunc} id="accordionSidebar">
            <i className="mobile-nav-toggle mobile-nav-show bi bi-list"  />
            <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"  />
          </div>
          <button
          id="accordionSidebar"
          onClick={myFunc}
          className="btn btn-link d-md-none rounded-circle mr-3"
        >
          <i className="bi bi-list" style={{ color: 'white' }} />
        </button>
          <nav id="navbar" className="navbar">
        
            <ul>
              <li>
                <Link to="/" className="active">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/experience">Experience</Link>
              </li>
              <li>
                <Link to="/examination">Examination</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header> */}
      {/* End Header */}
    </>
  );
}
