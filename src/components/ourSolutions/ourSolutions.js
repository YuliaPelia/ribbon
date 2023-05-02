import "./ourSolution.scss";

const OurSolution = (props) => {
  return (
    <section className="solutions">
      <div className="container">
        <h2 className="solutions_title">Our solutions</h2>
        <ul className="solutions_tabs">
          <li className="solutions_tabs_item">
            <button className="solutions_tabs_item_btn">
              Turn an offer to all cash
            </button>
          </li>
          <li className="solutions_tabs_item">
            <button className="solutions_tabs_item_btn">
              Buy before you sell
            </button>
          </li>
          <li className="solutions_tabs_item">
            <button className="solutions_tabs_item_btn">
              Save an existing deal
            </button>
          </li>
        </ul>
        <div>{props.children}</div>
      </div>
    </section>
  );
};

export default OurSolution;
