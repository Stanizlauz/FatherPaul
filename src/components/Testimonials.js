import React from "react";

export default function Testimonials() {
  return (
    <>
   {/* Testimonials */}
<div className="cards-2 bg-gray">
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <h2 className="h2-heading">Clients testimonials</h2>
      </div> {/* end of col */}
    </div> {/* end of row */}
    <div className="row">
      <div className="col-lg-12">
        {/* Card */}
        <div className="card">
          <img className="quotes" src="images/quotes.svg" alt="alternative" />
          <div className="card-body">
            <p className="testimonial-text">Being a single mum, the need for an extra income stream was pressing. Thank goodness we crossed paths, I've been able to bootstrap my business from proceeds on my investment.{" "}</p>
            <div className="testimonial-author">Alexia Jenkins</div>
            <div className="occupation">London, UK</div>
          </div>
          <div className="gradient-floor red-to-blue" />
        </div>
        {/* end of card */}
        {/* Card */}
        <div className="card">
          <img className="quotes" src="images/quotes.svg" alt="alternative" />
          <div className="card-body">
            <p className="testimonial-text">Scared of losing, I passed on many opportunities, until I met Madam Caroline. You've been nothing short of a blessing to my finances. How you pay attention to details and listen to my needs is second to  non. Thank you for all you do.{" "}</p>
            <div className="testimonial-author">Amir Sanghav</div>
            <div className="occupation">Vancouver, Canada</div>
          </div>
          <div className="gradient-floor blue-to-purple" />
        </div>
        {/* end of card */}
        {/* Card */}
        <div className="card">
          <img className="quotes" src="images/quotes.svg" alt="alternative" />
          <div className="card-body">
            <p className="testimonial-text">I desired a hold of my assets inclusive and I got introduced to Janet. Subsequently then, it has endlessly been one progress to the other. I have gained significantly from working with her.{" "}</p>
            <div className="testimonial-author">Gendolin Roy</div>
            <div className="occupation">Kentucky, USA</div>
          </div>
          <div className="gradient-floor purple-to-green" />
        </div>
        {/* end of card */}
      </div> {/* end of col */}
    </div> {/* end of row */}
  </div> {/* end of container */}
</div> {/* end of cards-2 */}
{/* end of testimonials */}




      {/* <section>
      <div className="testimonials-clean">
        <div className="container">
          <div className="intro">
          <div className="section-header">
            <h2>What Clients say about me.</h2>
          </div>
            <p className="text-center">
            Here's what some of my clients have to say
            </p>
          </div>
          <div className="row people">
            <div className="col-md-6 col-lg-4 item">
              <div className="box">
                <p className="description">
                Being a single mum, the need for an extra income stream was pressing. Thank goodness we crossed paths, I've been able to bootstrap my business from proceeds on my investment.
                </p>
              </div>
              <div className="author">
                <img className="rounded-circle" src="assets/img/client-11.jpg" />
                <h5 className="name">Alexia Jenkins</h5>
                <p className="title">London, UK</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 item">
              <div className="box">
                <p className="description">
                Scared of losing, I passed on many opportunities, until I met Madam Caroline. You've been nothing short of a blessing to my finances. How you pay attention to details and listen to my needs is second to  non. Thank you for all you do.
                </p>
              </div>
              <div className="author">
                <img className="rounded-circle" src="assets/img/client-12.jpg" />
                <h5 className="name">Amir Sanghav</h5>
                <p className="title">Vancouver, Canada</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 item">
              <div className="box">
                <p className="description">
                I desired a hold of my assets inclusive and I got introduced to Caroline. Subsequently then, it has endlessly been one progress to the other. I have gained significantly from working with her.
                </p>
              </div>
              <div className="author">
                <img className="rounded-circle" src="assets/img/client-5.jpg" />
                <h5 className="name">Gendoln Roy</h5>
                <p className="title">Kentucky, USA</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section> */}
    </>
  );
}
