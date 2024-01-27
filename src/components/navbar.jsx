import './Navbar.css'; // Custom styles

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Your LMS</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">Link 1</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Link 2</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Link 3</a>
            </li>
          </ul>
          <div className="d-flex">
            <button className="btn btn-outline-light me-2">Login</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
