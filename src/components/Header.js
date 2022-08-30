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
  const myFunc = () => {
    const tog = document.getElementById("navbarsExampleDefault");
    tog.classList.toggle("open");
  };

  return (
    <>
    
    
      {/* Navigation */}
      <nav
        id="navbarExample"
        className="navbar navbar-expand-lg fixed-top navbar-light"
        aria-label="Main navigation"
        style={{padding: "0px", backgroundColor: "ash", position: "fixed"}}
      >
        <div className="container">
          {/* Image Logo */}
          <a className="navbar-brand logo-image" href="index.html">
            <h3>CJH</h3>
          </a>
          {/* Text Logo - Use this if you don't have a graphic logo */}
          {/* <a class="navbar-brand logo-text" href="index.html">Nubis</a> */}
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
          {/* end of navbar-collapse */}
        </div>{" "}
        {/* end of container */}
      </nav>{" "}
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
