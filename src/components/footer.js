import React from "react";
const Footer = () => {
  return (
    <footer  style={{ backgroundColor: "rgb(167, 172, 238)"  }}>
        
      <div className="row mx-4 py-4">
        <div className="col-md-4">
          <h4>Email:</h4>
          <a href="" style={{textDecoration: 'none', color: 'white', fontWeight:'bold'}}>support@MyBakkery.co.in</a>
        </div>
        <div className="col-md-4">
          <h4>Follow Us</h4>
          <span className="social">
          <a href={"https://www.facebook.com/"} target="_blank"><i className=" fa fa-facebook"></i></a>
          <a href={"https://twitter.com/?lang=en"} target="_blank" ><i className=" fa fa-twitter"></i></a>
          <a href={"https://www.linkedin.com/"}  target="_blank" ><i className=" fa fa-linkedin"></i></a>
          <a href={"https://www.youtube.com/"} target="_blank" ><i className=" fa fa-youtube"></i></a>
          <a href={"https://www.instagram.com/"} target="_blank"><i  className=" fa fa-instagram"></i></a>
          </span>
        </div>
        <div className="col-md-4">
            <a href="#" style={{textDecoration: 'none', color:'white', fontWeight:'bold', fontSize:'20px'}}>Back To Top &#8593;</a>
        </div>
      </div>
     
          <div className="copyright">
          <p > © 2021 MyBakkery.</p>
          </div>
     
    </footer>
  );
};

export default Footer;