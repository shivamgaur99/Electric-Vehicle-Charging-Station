import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h5>About Us</h5>
            <p>
              <strong>Welcome</strong> to <strong>Evon</strong>! We are a
              leading electric charging station company based in Connaught
              Place, Delhi. At Evon, we are committed to revolutionizing the
              electric vehicle charging experience. We provide efficient and
              eco-friendly charging solutions that empower individuals and
              businesses to embrace sustainable transportation.
            </p>
          </div>
          <div className="col-md-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Contact Us</h5>
            <address>
              <p>
                <strong>Evon</strong>
                <br />
                Address: Connaught Place, Delhi
                <br />
                Phone: +91 1234567890
                <br />
                Email: info@evoncharging.com
              </p>
            </address>
          </div>
        </div>
      </div>
      <div className='text-center p-3' >
      WPT Mrch23 
        <a className='text-white' href='https://www.cdac.in/index.aspx?id=MB' >
       cdac.in
        </a>
      </div>
    </footer>
  );
};

export default Footer;
