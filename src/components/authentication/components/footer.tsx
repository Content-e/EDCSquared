import { useHistory } from "react-router-dom";
import { UnAuthRoutes } from "utils";

import "../styles/login.scss";

export const Footer = () => {
  const history = useHistory();
  const path = window.location.pathname;

  return (
    <div className="landing-footer">
      <div className="landing-footer-text-container">
        <div
          className="landing-footer-text"
          onClick={() => history.push(UnAuthRoutes.Landing)}
        >
          Home
        </div>
        <div
          className="landing-footer-text"
          onClick={() => history.push(UnAuthRoutes.Creators)}
        >
          For Creators
        </div>
        <div
          className="landing-footer-text"
          onClick={() => history.push(UnAuthRoutes.Brands)}
        >
          For Brands
        </div>
        <div
          className="landing-footer-text"
          onClick={() => history.push(UnAuthRoutes.SayHello)}
        >
          Say Hello
        </div>
        <div
          className="landing-footer-text"
          onClick={() =>
            path === "/homePageLogin"
              ? history.push(UnAuthRoutes.Register)
              : history.push(UnAuthRoutes.Login)
          }
        >
          Login / Sign up
        </div>
      </div>

      <div className="landing-footer-img-container">
        <a target="_blank" href="https://www.linkedin.com/company/edcsquared/">
          <img src="/images/landing-linkedin.svg" />
        </a>
        <a target="_blank" href="https://www.instagram.com/edcsq/">
          <img src="/images/landing-insta.svg" />
        </a>
        <a target="_blank" href="https://www.tiktok.com/@edcsquared">
          <img src="/images/landing-tiktok.svg" />
        </a>
      </div>

      <div className="landing-footer-text">
        © 2023 Copyright EDC Squared. All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;