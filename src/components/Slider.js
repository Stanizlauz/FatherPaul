import React from "react";
import { Link } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function Slider() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          {/* ======= Hero Section ======= */}
          <section id="hero" className="hero d-flex align-items-center">
            <div className="container">
              <div className="row">
                <div className="col-xl-4">
                  <h1 className="display-3 text-white mb-3 animated slideInDown">
                    Cheryl Janet Higgins
                  </h1>
                  <h4 className="display text-white mb-3 animated slideInDown">CRD: 2297762</h4>
                  {/* <h2 data-aos="fade-up">Cheryl Janet Higgins</h2> */}
                  <blockquote data-aos="fade-up" data-aos-delay={100}>
                    <p>
                      I offer quality, secure and profitable investment
                      opportunities to my clients. With a knack for excellence
                      and burning desire to see people succeed financially.{" "}
                    </p>
                  </blockquote>
                  <div
                    className="d-flex"
                    data-aos="fade-up"
                    data-aos-delay={200}
                  >
                    <Link to="/about" className="btn-get-started">
                      Get Started.
                    </Link>
                    {/* <a href="#about" className="btn-get-started">
                      Get Started
                    </a> */}
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* End Hero Section */}
        </SwiperSlide>
        <SwiperSlide>
          {/* ======= Hero Section ======= */}
          <section id="hero" className="hero d-flex align-items-center">
            <div className="container">
              <div className="row">
                <div className="col-xl-4">
                   <h1 className="display-3 text-white mb-3 animated slideInDown">
                    Cheryl Janet Higgins
                  </h1>
                  <h4 className="display text-white mb-3 animated slideInDown">CRD: 2297762</h4>

                  <blockquote data-aos="fade-up" data-aos-delay={100}>
                    <p>
                      I am the perfect guide to achieving your financial goals.{" "}
                    </p>
                  </blockquote>
                  <div
                    className="d-flex"
                    data-aos="fade-up"
                    data-aos-delay={200}
                  >
                    <Link to="/about" className="btn-get-started">
                      Get Started.
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* End Hero Section */}
        </SwiperSlide>
        <SwiperSlide>
          {/* ======= Hero Section ======= */}
          <section id="hero" className="hero d-flex align-items-center">
            <div className="container">
              <div className="row">
                <div className="col-xl-4">
                   <h1 className="display-3 text-white mb-3 animated slideInDown">
                    Cheryl Janet Higgins
                  </h1>
                  <h4 className="display text-white mb-3 animated slideInDown">CRD: 2297762</h4>

                  <blockquote data-aos="fade-up" data-aos-delay={100}>
                    <p>
                      I work generously with my clients to bring forth highly
                      profitable investment & exchange approaches fuelled by my
                      exceptional skills and work ethic, ensuring maximum
                      satisfaction.{" "}
                    </p>
                  </blockquote>
                  <div
                    className="d-flex"
                    data-aos="fade-up"
                    data-aos-delay={200}
                  >
                    <Link to="/about" className="btn-get-started">
                      Get Started.
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* End Hero Section */}
        </SwiperSlide>
        {/* <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
    </>
  );
}
