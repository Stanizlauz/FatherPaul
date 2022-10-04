import React from "react";
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
                    Father Paul
                  </h1>
                  {/* <h2 data-aos="fade-up">Cheryl Janet Higgins</h2> */}
                  <blockquote data-aos="fade-up" data-aos-delay={100}>
                    <p>
                     Priest of God{" "}
                    </p>
                  </blockquote>
                  <div
                    className="d-flex"
                    data-aos="fade-up"
                    data-aos-delay={200}
                  >
                   
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
                   Father Paul
                  </h1>

                  <blockquote data-aos="fade-up" data-aos-delay={100}>
                    <p>
                      God is the way.{" "}
                    </p>
                  </blockquote>
                  <div
                    className="d-flex"
                    data-aos="fade-up"
                    data-aos-delay={200}
                  >
                
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
                    Father Paul
                  </h1>

                  <blockquote data-aos="fade-up" data-aos-delay={100}>
                    <p>
                      Jesus is the way.{" "}
                    </p>
                  </blockquote>
                  <div
                    className="d-flex"
                    data-aos="fade-up"
                    data-aos-delay={200}
                  >
                
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
