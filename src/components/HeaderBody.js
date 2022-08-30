import React from 'react'

export default function HeaderBody() {
  return (
   <>
    {/* Header */}
    <section>
        <header id="header" className="header">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-xl-5">
                <div className="text-container">
                  <h1 className="h1-large">Cheryl Janet Higgins</h1>
                  <h3>CRD: 2297762</h3>
                  <p className="p-large">
                    I offer quality, secure and profitable investment
                    opportunities to my clients. With a knack for excellence and
                    burning desire to see people succeed financially, I am the
                    perfect guide to achieving your financial goals. I work
                    generously with my clients to bring forth highly profitable
                    investment & exchange approaches fuelled by my exceptional
                    skills and work ethic, ensuring maximum satisfaction.{" "}
                  </p>
                  {/* <a className="btn-solid-lg" href="#services">
                    Offered services
                  </a> */}
                </div>{" "}
                {/* end of text-container */}
              </div>{" "}
              {/* end of col */}
              <div className="col-lg-6 col-xl-7">
                <div className="image-container">
                  <img
                    className="img-fluid"
                    src="images/janet1.jpg"
                    alt="alternative"
                  />
                </div>{" "}
                {/* end of image-container */}
              </div>{" "}
              {/* end of col */}
            </div>{" "}
            {/* end of row */}
          </div>{" "}
          {/* end of container */}
        </header>{" "}
        {/* end of header */}
      </section>
      {/* end of header */}
   </>
  )
}
