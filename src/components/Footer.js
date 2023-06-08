import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="d-flex">
              <p>714 Turtle Creek Blvd Austin, Tx 78745</p>
            </div>
            <div className="d-flex">
              <a href="tel:555-555-5555">+1(361)585-5183</a>
            </div>
            <div className="d-flex">
              <p>austinjpoland311@gmail.com</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-2 col-sm-6">
            <div className="row">
              <div className="col">
                <a className="footer-nav">Home</a>
                <br />
                <a className="footer-nav">About Myself</a>
              </div>
              <div className="col">
                <a className="footer-nav">Portfolio</a>
                <br />
                <a className="footer-nav">Contact Me</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;