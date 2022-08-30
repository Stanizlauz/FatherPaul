import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      {/*footer starts from here*/}
      <footer className="footer">
        <div className="container bottom_border">
          <div className="row">
            <div className="col-lg-5 col-md-12">
              <h5 className="headin5_amrc col_white_amrc pt2">
                Cheryl Janet Higgins
              </h5>
              {/*headin5_amrc*/}
              <p className="mb10">
                {" "}
                I am the perfect guide to achieving your financial goals. Years
                in the field has shown that different clienst have different
                needs. Working with me, you'll get a plan tailored to suit your
                personal needs and prefences. This way, you have full control
                over the direction your portfolio is going. I'll be there,
                gudiding you all through. Your win is my win, and I love winning
              </p>
              <p>
                <i className="fa fa-location-arrow" />
                <a href="https://t.me/Tradewithjanet" className="text-white">
                 - Telegram
                </a>
              </p>
              <a href = "mailto: janethiggins.info@gmail.com">
              <p>
                <i className="fa fa fa-envelope" /> janethiggins.info@gmail.com
              </p>
              </a>
            </div>

            <div className="col-lg-5 col-md-12">
              <h5 className="headin5_amrc col_white_amrc pt2">Useful links</h5>
              {/*headin5_amrc*/}
              <ul className="footer_ul_amrc">
                    <li>
                      <Link to="/" className="bi bi-dash">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link to="/about" className="bi bi-dash">
                        About
                      </Link>
                    </li>
                    <li>
                      <Link to="/experience" className="bi bi-dash">
                        Experience
                      </Link>
                    </li>
                    <li>
                      <Link to="/examination" className="bi bi-dash">
                        Examination
                      </Link>
                    </li>
                    <li>
                      <Link to="/contact" className="bi bi-dash">
                        Contact
                      </Link>
                    </li>
                  </ul>
              {/*footer_ul_amrc ends here*/}
            </div>
          </div>
        </div>
        <div className="col-lg-5 col-md-12 container">
        
          <p className="text-center">
            Copyright @Cheryl Janet Higgins | All Right Reserved
          </p>
          <ul className="social_footer_ul">
           
            <li>
              <a href="https://t.me/Tradewithjanet">
                <i className="fab fa-telegram" />
              </a>
            </li>
          
          </ul>
          {/*social_footer_ul ends here*/}
        </div>
      </footer>

    </>
  );
}
