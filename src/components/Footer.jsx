import React from "react";
import './footer.css';

const Footer = () => {
  return (
   <div className="footer">
    <div className="sb_footer section_padding">
      <div className="sb_footer-links">
        <div className="sb_footer-links_div">
          <h4>Buisness</h4>
          <a href="/" >
            <p>Employee</p>
          </a>
          <a href="/" >
            <p>Health plan</p>
          </a>
          <a href="/" >
            <p>Individual</p>
          </a>
         </div>
          
         <div className="sb_footer-links_div">
          <h4>Resources</h4>
          <a href="/" >
            <p>resources center</p>
          </a>
          <a href="/" >
            <p>Testimonials</p>
          </a>
          <a href="/" >
            <p>STV</p>
          </a>
         </div>
        <div className="sb_footer-links_div">
          <h4>Partners</h4>
          <a href="/" >
            <p>swing tech</p>
          </a>
        </div>

        <div className="sb_footer-links_div">
        <h4>Company</h4>
          <a href="/" >
            <p>About</p>
          </a>
          <a href="/" >
            <p>Press</p>
          </a>
          <a href="/" >
            <p>Career</p>
          </a>
          <a href="/" >
            <p>Contact</p>
          </a>
        </div>

        <div className="sb_footer-links_div">
          <h4>Coming soon on</h4>
          <div className="socialmedia">
            
              <a href="/"><i className="fa-brands fa-facebook"></i></a>
              <a href="/"><i className="fa-brands fa-instagram"></i></a>
              <a href="/"><i className="fa-brands fa-twitter"></i></a>
              <a href="/"><i className="fa-brands fa-google-plus"></i></a>
              <a href="/"><i className="fa-brands fa-linkedin"></i></a>
            
          </div>

        </div>

      </div>
      <hr />
      <div className="sb_footer-below">
        <div className="sb_footer-copyright">
          <p>
            @{new Date().getFullYear()} codeInn. All right reserved
          </p>
        </div>
          <div className="sb_footer-below-links">
            <a href="/"><div><p>Terms & Condition</p></div></a>
            <a href="/"><div><p>Privacy</p></div></a>
            <a href="/"><div><p>Security</p></div></a>
            <a href="/"><div><p>Cookie and Declaration</p></div></a>

          </div>
      </div>

    </div>



  </div>
   
  )
}

export default Footer;
