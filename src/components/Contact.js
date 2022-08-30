import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Link } from "react-router-dom";
import emailjs from '@emailjs/browser';



export default function Contact() {
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_p4jswda', 'template_kh9sg39', e.target, 'user_3Qmrr6MR0vYHh7GiRvOW9')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
  return (
    <>
    <Header />
      <div>
        {/* ======= Breadcrumbs ======= */}
        <div
          className="breadcrumbs d-flex align-items-center"
          style={{ backgroundImage: 'url("images/janet2.jpg")' }}
        >
          <div className="container position-relative d-flex flex-column align-items-center">
            <h2>Contact</h2>
            <ol>
              <li>
              <Link to="/" className="active">
                  Home
                </Link>
              </li>
              <li>Contact</li>
            </ol>
          </div>
        </div>
        {/* End Breadcrumbs */}
        {/* ======= Contact Section ======= */}
        <section id="contact" className="contact">
          <div className="container position-relative" data-aos="fade-up">
            <div className="row gy-4 d-flex justify-content-end">
              <div className="col-lg-5" data-aos="fade-up" data-aos-delay={100}>
                {/* <div className="info-item d-flex">
                  <i className="bi bi-geo-alt flex-shrink-0" />
                  <div>
                    <h4>Location:</h4>
                    <p>A108 Adam Street, New York, NY 535022</p>
                  </div>
                </div> */}
                {/* End Info Item */}
                <div className="info-item d-flex">
                  <div>
                    <h4>Email:</h4>
                    <a href="mailto: janethiggins.info@gmail.com" className="email">
                    <p>Janethiggins.info@gmail.com</p>
                    </a>
                  </div>
                </div>
                {/* End Info Item */}
                <div className="info-item d-flex">
                <a href="https://t.me/Tradewithjanet" className="text-white">
                  <i className="bi bi-telegram flex-shrink-0" />
                    <h4>Telegram</h4>
                    {/* <p>+1 5589 55488 55</p> */}
                  </a>
                </div>
                {/* End Info Item */}
              </div>
              <div className="col-lg-6" data-aos="fade-up" data-aos-delay={250}>
                <form
                 onSubmit={sendEmail}
                >
                  <div className="row">
                    <div className="col-md-6 form-group">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        id="name"
                        placeholder="Your Name"
                        required
                      />
                    </div>
                    <div className="col-md-6 form-group mt-3 mt-md-0">
                      <input
                        type="email"
                        className="form-control"
                        name="user_email"
                        id="email"
                        placeholder="Your Email"
                        required
                      />
                    </div>
                  </div>
                  {/* <div className="form-group mt-3">
                    <input
                      type="text"
                      className="form-control"
                      name="subject"
                      id="subject"
                      placeholder="Subject"
                      required
                    />
                  </div> */}
                  <div className="form-group mt-3">
                    <textarea
                      className="form-control"
                      name="message"
                      rows={5}
                      placeholder="Message"
                      required
                      defaultValue={""}
                    />
                  </div>
                  <div className="my-3">
                   
                  </div>
                  <div className="text-center">
                    {/* <button type="submit">Send Message</button> */}
                    <button type="submit" className="btn btn-info">
                 send
                </button>
                  </div>
                </form>
              </div>
              {/* End Contact Form */}
            </div>
          </div>
        </section>
        {/* End Contact Section */}
      </div>

      <Footer />
    </>
  );
}
