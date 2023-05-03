import { ReactSVG } from "react-svg";
import Logo from "../../sourse/img/ribbon.svg";
import Accredited from "../../sourse/img/accredited_business.svg";
import Instagram from "../../sourse/img/instagram_icon.svg";
import Facebook from "../../sourse/img/facebook_icon.svg";
import "./footer.scss";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer_block">
          <a href="#" className="footer_logo">
            <ReactSVG src={Logo} />
          </a>
          <ul className="footer_list">
            <li className="footer_list_cooperation">
              <h4 className="footer_list_cooperation_title">Agents</h4>
              <ul className="footer_list_cooperation_sublist">
                <li className="footer_list_cooperation_item">
                  <a href="#">Buying</a>
                </li>
                <li className="footer_list_cooperation_item">
                  <a href="#">Listing</a>
                </li>
                <li className="footer_list_cooperation_item">
                  <a href="#">iOS App</a>
                </li>
                <li className="footer_list_cooperation_item">
                  <a href="#">Get Certified</a>
                </li>
              </ul>
            </li>
            <li className="footer_list_cooperation">
              <h4 className="footer_list_cooperation_title">Homebuyers</h4>
              <ul className="footer_list_cooperation_sublist">
                <li className="footer_list_cooperation_item">
                  <a href="#">Buying</a>
                </li>
                <li className="footer_list_cooperation_item">
                  <a href="#">Buy Before You Sell</a>
                </li>
                <li className="footer_list_cooperation_item">
                  <a href="#">New Construction</a>
                </li>
                <li className="footer_list_cooperation_item">
                  <a href="#">Rescue Your Closing</a>
                </li>
                <li className="footer_list_cooperation_item">
                  <a href="#">Sellers</a>
                </li>
              </ul>
            </li>
            <li className="footer_list_cooperation">
              <h4 className="footer_list_cooperation_title">Partners</h4>
              <ul className="footer_list_cooperation_sublist">
                <li className="footer_list_cooperation_item">
                  <a href="#">Lenders</a>
                </li>
                <li className="footer_list_cooperation_item">
                  <a href="#">Builders</a>
                </li>
                <li className="footer_list_cooperation_item">
                  <a href="#">Brokerages</a>
                </li>
              </ul>
            </li>
            <li className="footer_list_cooperation">
              <h4 className="footer_list_cooperation_title">Resources</h4>
              <ul className="footer_list_cooperation_sublist">
                <li className="footer_list_cooperation_item">
                  <a href="#">Pricing</a>
                </li>
                <li className="footer_list_cooperation_item">
                  <a href="#">FAQs</a>
                </li>
                <li className="footer_list_cooperation_item">
                  <a href="#">How it works</a>
                </li>
                <li className="footer_list_cooperation_item">
                  <a href="#">Blog</a>
                </li>
                <li className="footer_list_cooperation_item">
                  <a href="#">Guides</a>
                </li>
                <li className="footer_list_cooperation_item">
                  <a href="#">Webinars</a>
                </li>
              </ul>
            </li>
            <li className="footer_list_cooperation">
              <h4 className="footer_list_cooperation_title">ABOUT</h4>
              <ul className="footer_list_cooperation_sublist">
                <li className="footer_list_cooperation_item">
                  <a href="#">Mission</a>
                </li>
                <li className="footer_list_cooperation_item">
                  <a href="#">Culture</a>
                </li>
                <li className="footer_list_cooperation_item">
                  <a href="#">Careers</a>
                </li>
                <li className="footer_list_cooperation_item">
                  <a href="#">Press</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="footer_block_second">
          <div className="footer_about">
            <ReactSVG src={Accredited} />
            <a href="#">Click for Review</a>
          </div>
          <div className="footer_descr">
            <a href="#">Terms</a>
            <a href="#">Privacy</a>
            <p>Copyright 2022 Ribbon Home Inc, All Rights Reserved.</p>
          </div>
          <div className="footer_icon">
            <ReactSVG src={Facebook} />
            <ReactSVG src={Instagram} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
