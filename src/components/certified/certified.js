import together from "../../sourse/img/together.png";
import IconWrapper from "./components/icon-wrapper";
// import Dollar from "../../sourse/img/dollar.svg";
// import Write from "../../sourse/img/write.svg";
// import Bank from "../../sourse/img/bank.svg";
import { servicesIcons } from "./constants";

import "./certified.scss";

const Certified = () => {
  return (
    <section className="certified">
      <div className="container">
        <div className="certified_block">
          <img
            width="466px"
            height="494px"
            className="certified_img"
            src={together}
            alt="together people"
          />
          <div className="certified_info">
            <div className="certified_line"></div>
            <h3 className="certified_subtitle">BuyER's agents</h3>
            <h2 className="certified_title">
              Give your buyers the certainty of cash
            </h2>
            <p className="certified_descr">
              Waive common contingencies, including the home-sale contingency,
              to allow your buyers to make their strongest offer in any market.
            </p>
            <button className="certified_btn btn">Get Certified Today</button>
          </div>
        </div>
        <div className="certified_line"></div>
        <ul className="certified_list">
          {/* <IconWrapper icon={Dollar} />
          <IconWrapper icon={Dollar} />
          <IconWrapper icon={Dollar} /> */}
          {servicesIcons.map((icon) => (
            <IconWrapper key={icon.id} icon={icon.img} descr={icon.descr} />
          ))}
        </ul>
      </div>
    </section>
  );
};
export default Certified;
