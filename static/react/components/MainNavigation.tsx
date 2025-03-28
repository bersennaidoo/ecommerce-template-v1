import React from "react";
import { Link, NavLink } from "react-router-dom";
import Header from "./Header";

function MainNavigation() {
  return (
    <div className="all-title-box">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <h2>Shop</h2>
            <ul className="breadcrumb">
              <li className="breadcrumb-item">
                <Header />
              </li>
              <li className="breadcrumb-item">
                <div className="btn-group">
                  <button
                    type="button"
                    className="btn btn-info dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="fa fa-user"></i>
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" to="/login-admin">
                        Login
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/logout-admin">
                        Logout
                      </Link>
                    </li>
                     <li>
                      <Link className="dropdown-item" to="/login-products">
                        Login Products
                      </Link>
                    </li>
                     <li>
                      <Link className="dropdown-item" to="/login-products">
                        Login Products
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/profile">
                        Profile
                      </Link>
                    </li>
                     <li>
                      <Link className="dropdown-item" to="/shop/products">
                        Products
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainNavigation;
