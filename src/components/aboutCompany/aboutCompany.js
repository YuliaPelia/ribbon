import Human from "../../sourse/img/human.svg";
import Sofa from "../../sourse/img/sofa.png";
import "./aboutcompany.scss";
const AboutCompany = () => {
  return (
    <section className="company">
      <div className="container">
        <h2 className="company_title">You’re in good company</h2>
        <div className="company_block">
          <div className="company_block_about">
            <p className="company_descr">
              “Ribbon is a huge advantage for you as the buyer's agent - and
              definitely gives you the extra edge needed to have your buyer's
              offer accepted."
            </p>
            <div className="company_human">
              <img className="company_human_img" src={Human} alt="human" />
              <div className="company_human_wrapper">
                <h4 className="company_human_name">Edgar Gonzalez</h4>
                <h3 className="company_human_position">eXp Realty</h3>
              </div>
            </div>
            <div className="company_line"></div>
            <p className="company_love">
              Agents love us because we empower their buyers with cash and don't
              compete for their commissions.
            </p>
            <button className="company_btn">Learn More</button>
          </div>
          <div className="company_block_img">
            <img src={Sofa} alt="sofa" />
          </div>
        </div>
        <div className="company_line company_line_purple"></div>
        <ul className="company_list">
          <li className="company_list_item">
            <span>7,000+</span>
            <p>Homes Purchased</p>
          </li>
          <li className="company_list_item">
            <span>30,000+</span>
            <p>Agents</p>
          </li>
          <li className="company_list_item">
            <span>$5 B+</span>
            <p>Buying Power</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default AboutCompany;
