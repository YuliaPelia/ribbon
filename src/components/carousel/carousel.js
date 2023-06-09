import LeftArrow from "../../sourse/img/left_arrow.svg";
import RightArrow from "../../sourse/img/right_arrow.svg";
import HappyPeople from "../../sourse/img/happy_people.png";
import AppraisalProtection from "../../sourse/img/appraisal_protection.svg";
import R from "../../sourse/img/r.svg";
import Book from "../../sourse/img/book.svg";
import "./carousel.scss";
import { ReactSVG } from "react-svg";

const Carousel = () => {
  return (
    <section className="carousel">
      <div className="container">
        <div className="carousel_inner">
          <button className="carousel_btn">
            <ReactSVG
              className="carousel_svg carousel_svg_left"
              src={LeftArrow}
            />
          </button>
          <div className="carousel_list">
            <div className="carousel_part carousel_part_first">
              <div className="carousel_part_first_svg">
                <ReactSVG src={R} />
              </div>
              <div className="carousel_part_first_text">ORLANDO, FL</div>
              <img
                className="carousel_img"
                src={HappyPeople}
                alt="Happy people"
              />
              <div className="carousel_block">
                <div className="carousel_line"></div>
                <h4 className="carousel_title_pfoto">home won with</h4>
                <div className="carousel_line"></div>
              </div>
              <div className="carousel_icon">
                <img
                  className="carousel_icon_img"
                  src={AppraisalProtection}
                  alt="Appraisal Protection"
                />
              </div>
              <div className="carousel_line carousel_long"></div>
              <table className="carousel_table">
                <tbody className="carousel_table_colomn">
                  <tr className="carousel_table_colomn_name">
                    <td className="carousel_name">The buyer</td>
                    <td className="carousel_name">The seller</td>
                  </tr>
                  <tr className="carousel_table_colomn_descr">
                    <td className="carousel_descr">
                      won her dream house in multiple-offers situation.
                    </td>
                    <td className="carousel_descr">
                      got a guaranteed closing with no contingencies.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="carousel_part carousel_part_second">
              <h2 className="carousel_main_title">Turn an offer to all cash</h2>
              <p className="carousel_main_descr">
                Once your buyer is preapproved, upgrade your buying power to
                cash to make your strongest offer, first.
              </p>
              <button className="carousel_button btn">Learn more</button>
              <div className="carousel_line carousel_line_grey"></div>
              <div className="carousel_block_link">
                <img src={Book} alt="Book" />
                <a className="carousel_link" href="#">
                  Read the success story
                </a>
              </div>
            </div>
          </div>
          <button className="carousel_btn">
            <ReactSVG
              className="carousel_svg carousel_svg_right"
              src={RightArrow}
            />
          </button>
        </div>
        <ol className="carousel_indicators">
          <li className="carousel_indicators_tabs carousel_indicators_tabs_active"></li>
          <li className="carousel_indicators_tabs "></li>
          <li className="carousel_indicators_tabs "></li>
        </ol>
      </div>
    </section>
  );
};

export default Carousel;
