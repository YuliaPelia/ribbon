import home from "../../sourse/img/promo.png";
import TechCrunch from "../../sourse/img/TechCrunch.svg";
import AllThingsConsidered from "../../sourse/img/AllThingsConsidered.svg";
import WSJ from "../../sourse/img/WSJ.svg";
import UsaToday from "../../sourse/img/UsaToday.svg";
import inman from "../../sourse/img/inman.svg";
import "./promo.scss";

const Promo = () => {
  return (
    <section className="promo">
      <div className="container">
        <div className="promo_block">
          <div className="promo_descr">
            <h1 className="promo_title">
              Providing certainty <br /> on the journey to <br /> homeownership.
            </h1>
            <p className="promo_text">
              Guarantee your home closes with cash-backed, contingency-free
              offers for buyers, sellers, their agents, and loan officers.
            </p>
            <button className="promo_btn btn">Sign up now</button>
            <a className="promo_link" href="#">
              Learn more
            </a>
            <h2 className="promo_subtitle">FEATURED IN</h2>
            <ul className="promo_company">
              <li className="promo_company_item">
                <img
                  height="18px"
                  width="128px"
                  src={TechCrunch}
                  alt="Tech Crunch"
                />
              </li>
              <li className="promo_company_item">
                <img
                  height="107px"
                  width="107px"
                  src={AllThingsConsidered}
                  alt="All Things Considered"
                />
              </li>
              <li className="promo_company_item">
                <img height="114px" width="114px" src={WSJ} alt="WSJ" />
              </li>
              <li className="promo_company_item">
                <img
                  width="116px"
                  height="116px"
                  src={UsaToday}
                  alt="Usa Today"
                />
              </li>
              <li className="promo_company_item">
                <img height="115px" width="115px" src={inman} alt="inman" />
              </li>
            </ul>
          </div>
          <div className="promo_picture">
            <img className="promo_img" src={home} alt="home" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Promo;
