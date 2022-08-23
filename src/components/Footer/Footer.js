import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../Button/Button";
import "./Footer.scss";

export default function Footer() {
  const handleScrollTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="footer">
      <section className="footer__subscription">
        <p className="footer__sub-heading">
          Join the Adventure newsletter to receive out best vacation deals.
        </p>
        <p className="footer__sub-text">You can unsubscribe at any time.</p>
        <div className="footer__input-areas">
          <form className="footer__email-input">
            <input
              placeholder="Your Email"
              type="email"
              name="email"
              className="footer__input"
            />
            <Button buttonStyle="btn--outline">Subscribe</Button>
          </form>
        </div>
      </section>
      <div className="footer__links">
        <div className="footer__link-wrapper">
          <div className="footer__link-items">
            <h2>About Us</h2>
            <Link to={"/services"}>How it works</Link>
            <Link to={"/services"}>Testimonials</Link>
            <Link to={"/services"}>Careers</Link>
            <Link to={"/services"}>Investors</Link>
            <Link to={"/services"}>Terms of Service</Link>
          </div>

          <div className="footer__link-items">
            <h2>Contact Us</h2>
            <Link to={"/services"}>Contact</Link>
            <Link to={"/services"}>Support</Link>
            <Link to={"/locations"}>Destinations</Link>
            <Link to={"/services"}>Sponsorships</Link>
          </div>
        </div>
        <div className="footer__link-wrapper">
          <div className="footer__link-items">
            <h2>Videos</h2>
            <Link to={"/services"}>Submit Video</Link>
            <Link to={"/services"}>Ambassadors</Link>
            <Link to={"/services"}>Agency</Link>
            <Link to={"/services"}>Influencer</Link>
          </div>

          <div className="footer__link-items">
            <h2>Social Media</h2>
            <Link to={"/services"}>Instagram</Link>
            <Link to={"/services"}>Facebook</Link>
            <Link to={"/services"}>Youtube</Link>
            <Link to={"/services"}>Twitter</Link>
          </div>
        </div>
      </div>
      <section className="footer__social-media">
        <div className="footer__social-media-wrap">
          <div className="footer__logo">
            <Link
              onClick={handleScrollTop}
              id="btnScrollTop"
              to={"/home"}
              className="footer__social-logo"
            >
              TRVL <i className="fab fa-typo3"></i>
            </Link>
          </div>
          <small className="footer__website-right">TRVL ©️ 2022</small>
          <div className="footer__social-icons">
            <Link
              className="footer__social-icons facebook"
              to="https://www.facebook.com"
              target="_blank"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f"></i>
            </Link>

            <Link
              className="footer__social-icons instagram"
              to="https://www.facebook.com"
              target="_blank"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </Link>

            <Link
              className="footer__social-icons youtube"
              to="https://www.facebook.com"
              target="_blank"
              aria-label="Youtube"
            >
              <i className="fab fa-youtube"></i>
            </Link>

            <Link
              className="footer__social-icons twitter"
              to="https://www.facebook.com"
              target="_blank"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter"></i>
            </Link>

            <Link
              className="footer__social-icons linkedin"
              to="https://www.facebook.com"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin"></i>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
