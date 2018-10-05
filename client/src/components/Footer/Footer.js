import React from "react";
import "./footer.css";

const Footer = ({ children }) => (
  <footer className="col-md-12 navbar-fixed-bottom">
    <div className="container">
      <div className="row">
        <div className="col-md-12 justify-content-center"><a href="/">Home Page</a> ||| <a href="/user">User</a> ||| <a href="/room">Room</a> ||| <a href="/roomSearch">Room Search</a> ||| <a href="/userSearch">User Search</a></div>
        <hr className="col-md-8" />
        <div className="col-md-12 justify-content-center">
          <div className="site-info wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="0.3s">
            <p>All copyrights reserved &copy;2018: Brett Gonterman, Jeff Kounter, Jeremy Sexton, & Bailey Wilson</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;