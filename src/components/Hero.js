import React from 'react'

export default function Hero() {
  return (
   <>
     <section id="hero" className="hero d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-xl-4">
              <h2 data-aos="fade-up">Cheryl Janet Higgins</h2>
              <blockquote data-aos="fade-up" data-aos-delay={100}>
                <p className="text-white" style={{ fontWeight: "bold" }}>
                  I offer quality, secure and profitable investment
                  opportunities to my clients. With a knack for excellence and
                  burning desire to see people succeed financially, I am the
                  perfect guide to achieving your financial goals. I work
                  generously with my clients to bring forth highly profitable
                  investment & exchange approaches fuelled by my exceptional
                  skills and work ethic, ensuring maximum satisfaction.{" "}
                </p>
              </blockquote>
              <div className="d-flex" data-aos="fade-up" data-aos-delay={200}>
                <a href="#about" className="btn-get-started">
                  Get Started
                </a>
                <a
                  href="https://www.youtube.com/watch?v=LXb3EKWsInQ"
                  className="glightbox btn-watch-video d-flex align-items-center"
                >
                  <i className="bi bi-play-circle" />
                  <span>Watch Video</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Hero Section */}

      <main id="main"></main>
   </>
  )
}
