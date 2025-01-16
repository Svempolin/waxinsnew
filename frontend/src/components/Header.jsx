import React, { useState, useEffect } from 'react';

const Header = () => {
  const [showNav, setShowNav] = useState(false);

  // Function for reservation click handling
  const handleReservationClick = (e) => {
    e.preventDefault(); // Prevent default behavior
    const openTableEl = document.querySelector('#ot-reservation-widget a.ot-button');

    if (openTableEl) openTableEl.click();
  };

  useEffect(() => {
    // Any additional effects or setup can be added here
    // For example, fetching navigation data from Sanity in the future
  }, []);

  return (
    <nav className="nav-container">
      <a
        href="#"
        className={`nav-trigger${showNav ? ' active' : ''}`}
        onClick={() => setShowNav(!showNav)}
      >
        <span></span>
        <span></span>
        <span></span>
      </a>
      <ul
        className={`nav nav-primary${showNav ? ' show' : ' hide'}`}
        onClick={() => setShowNav(false)}
      >
        <li className="nav-primary-item">
          <a className="nav-link" href="./#about-section">About</a>
        </li>
        <li className="nav-primary-item">
          <a className="nav-link" href="./#restaurant-section">Restaurant</a>
        </li>
        <li className="nav-primary-item">
          <a className="nav-link" href="./#bar-section">Bar</a>
        </li>
        <li className="nav-primary-item">
          <a className="nav-link" href="./#catering-section">Catering</a>
        </li>
        <li className="nav-primary-item">
          <a className="nav-link" href="#contact">Contact</a>
        </li>
      </ul>
      <ul className="nav">
        {/* Uncomment and modify the reservation logic if needed */}
        {/* <li className="nav-item">
          <a
            className="button button-outline button-white"
            href="#"
            onClick={handleReservationClick}
          >
            Reservation
          </a>
        </li> */}
        <li className="nav-contact">
          <a className="nav-link" href="tel:+155512341">888-8-WAXINS</a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;

