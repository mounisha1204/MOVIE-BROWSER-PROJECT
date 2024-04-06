
import React from 'react';


import { Link,useNavigate } from 'react-router-dom';

function Navbar1({ searchText, setSearchText }) {
  const navigate = useNavigate();

    const handlesearch = () => {
        // Navigate to the About page
        navigate('/search');
    };
  
  const updateSearchText = (e) => {
    
    setSearchText(e.target.value);
   
  }
  return (
    <nav className="navbar navbar-expand-lg bg-transparent text-primary ">
      <div className="container-fluid bg-transparent">
        <Link className="navbar-brand text-secondary" to="/">
          Movie browser
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active text-secondary" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-secondary" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item dropdown text-secondary">
              <Link
                className="nav-link dropdown-toggle text-secondary"
                to="/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item text-secondary" to="/">
                    Action
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item text-secondary" to="/">
                    Another action
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item text-secondary" to="/">
                    Something else here
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link  text-secondary" aria-disabled="true">
                Disabled
              </Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searchText}
              onChange={updateSearchText}
              onClick={handlesearch}
            />
            
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar1;
