import "./header.scss";
const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header_block">
          <nav className="header_nav">
            <ul className="header_menu">
              <li className="header_menu_link">
                <a href="#">Agents</a>
              </li>
              <li className="header_menu_link">
                <a href="#">Homebuyers</a>
              </li>
              <li className="header_menu_link">
                <a href="#">Resources</a>
              </li>
              <li className="header_menu_link">
                <a href="#">Log In</a>
              </li>
            </ul>
          </nav>
          <button className="header_btn">Sign up now</button>
        </div>
      </div>
    </header>
  );
};
export default Header;

// запитатись в Ростика по шрифтах ті що є в index.css
