import React from "react";

export default function AboutMe() {
  return (
    <>
    <section>
   <div>
  {/* Details 1 */}
  <div id="details" className="basic-1">
    <div className="container">
      <div className="row">
       
        <div className="col-lg-6 col-xl-5">
          <div className="text-container">
            <div className="section-title">About Me</div>
            <h2>I have over 12 years of experience during which I have built proficiency in Trades and Investments...</h2>
            <p>I only trade in liquid assets or stocks for clients. I do not pose as either of the following: Tutor, Director, Stock Guide or communal firm partner.</p>
            {/* <a className="btn-solid-reg" href="#contact">Get quote</a> */}
          </div> {/* end of text-container */}
        </div> {/* end of col */}
        <div className="col-lg-6 col-xl-7">
          <div className="image-container">
            <img className="img-fluid" src="images/janet3.jpg" alt="alternative" />
          </div> {/* end of image-container */}
        </div> {/* end of col */}
      </div> {/* end of row */}
    </div> {/* end of container */}
  </div> {/* end of basic-1 */}
  {/* end of details 1 */}
  {/* Details 2 */}
  
</div>
</section>

    </>
  );
}
