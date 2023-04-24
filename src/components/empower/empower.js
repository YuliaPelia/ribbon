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
      </div>
    </article>
  );
};
export default Empower;
