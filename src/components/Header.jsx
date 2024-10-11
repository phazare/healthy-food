import { Link } from "react-router-dom";
const Header = () => {
  return (
    <nav className="navbar bg-warning-subtle position-fixed w-100 top-0 z-1">
      <div className="container-fluid">
        <div className="navbar-brand d-flex align-items-center">
          <img
            src="/healthy-food.png"
            alt="Logo"
            width="60"
            height="50"
            className="d-inline-block align-text-top"
          />
          <h2 className="header-text m-0"><Link to="/" className="text-decoration-none text-black"> Healthy Food</Link></h2>
        </div>
      </div>
    </nav>
  );
};

export default Header;
