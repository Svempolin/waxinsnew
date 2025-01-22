import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          {/* Tom kolumn för layout */}
          <div className="column"></div>

          {/* Text centrerad i mitten */}
          <div className="column text-center">
            <p>
              <small>&copy; 2019 Waxins. All Rights Reserved.</small>
            </p>
          </div>

          {/* Tom kolumn för layout */}
          <div className="column"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
