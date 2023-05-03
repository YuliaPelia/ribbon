import { ReactSVG } from "react-svg";
import AppStore from "../../sourse/img/appStore.svg";
import Mobile from "../../sourse/img/mobile.png";
import "./empower.scss";
const Empower = (props) => {
  return (
    <article className="empower">
      <div className="container">
        <h2 className="empower_title">Who we empower</h2>
        <ul className="empower_tabs">
          <li className="empower_tab">
            <button className="empower_btn">BuyEr's AgentS</button>
          </li>
          <li className="empower_tab">
            <button className="empower_btn">Buyers</button>
          </li>
          <li className="empower_tab">
            <button className="empower_btn">Listing agents</button>
          </li>
          <li className="empower_tab">
            <button className="empower_btn">sellers</button>
          </li>
          <li className="empower_tab">
            <button className="empower_btn">Loan officers</button>
          </li>
        </ul>
        <div>{props.children}</div>
        <div className="empower_wrapper">
          <div className="empower_block">
            <h2 className="empower_title">
              Everything you need is only a tap away
            </h2>
            <p className="empower_subtitle">
              Ribbon let’s you write an offer anytime, anywhere — right from
              your mobile device.
            </p>
            <button className="empower_button">
              <ReactSVG src={AppStore} />
            </button>
          </div>
          <img src={Mobile} alt="mobile" />
        </div>
      </div>
    </article>
  );
};
export default Empower;
