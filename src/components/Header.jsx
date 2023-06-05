import '../styles/_header.sass';
import logo from '../images/logo.svg';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__row">
          <div className="header__logo">
            <img src={logo} alt="logo testtask" width="104px" />
          </div>
          <div className="header__actions">
            <a href="#users" className="button">
              Users
            </a>
            <a href="#form" className="button">
              Sign up
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
