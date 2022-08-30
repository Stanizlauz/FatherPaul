import React from 'react'
import Footer from './Footer'
import Header from './Header'
import Testimonials from './Testimonials'

export default function Examination() {
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
    <h2>Examination</h2>
    <ol>
      <li>
        <a href="index.html">Home</a>
      </li>
      <li>Examination</li>
    </ol>
  </div>
</div>
{/* End Breadcrumbs */}
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
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Twitter_Verified_Badge.svg/2048px-Twitter_Verified_Badge.svg.png" alt="." />
            </div>
            <div className="solu_title">
              <h3>State Securities Law Exam</h3>
            </div>
            <div className="solu_description">
              <p>
              Series 63 - Uniform Securities Agent State Law Examination.
              </p> <hr />
              <p>Mar 10, 1993</p> <hr />
            </div>
          </div>
          <div className="solution_card">
            <div className="hover_color_bubble" />
            <div className="so_top_icon">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Twitter_Verified_Badge.svg/2048px-Twitter_Verified_Badge.svg.png" alt="." />

            </div>
            <div className="solu_title">
              <h3>General Industry/Products Exam</h3>
            </div>
            <div className="solu_description">
              <p>
              SIE - Securities Industry Essentials Examination.
              </p> <h />
              <p>Oct 1, 2018</p> <hr />
            </div>
          </div>
        </div>
        {/*  */}
        <div className="solution_cards_box sol_card_top_3">
          <div className="solution_card">
            <div className="hover_color_bubble" />
            <div className="so_top_icon">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Twitter_Verified_Badge.svg/2048px-Twitter_Verified_Badge.svg.png" alt="." />

            </div>
            <div className="solu_title">
              <h3>General Industry/Products Exam</h3>
            </div>
            <div className="solu_description">
              <p>
              Series 7 - General Securities Representative Examination.
              </p> <hr />
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
  )
}
