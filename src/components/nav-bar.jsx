import React from 'react';

const NavBar = ({ totalItems }) => {
  return (
    <ul className="nav justify-content-between align-items-center p-3">
      <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="/">
          <h2>Home</h2>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link position-relative" href="/">
          <h4>
            <i className="bi bi-cart3"></i>
          </h4>
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {totalItems}
            <span className="visually-hidden">unread messages</span>
          </span>
        </a>
      </li>
    </ul>
  );
};

export default NavBar;
