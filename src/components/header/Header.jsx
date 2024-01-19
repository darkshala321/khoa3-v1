import React from "react";
import "./header.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img
          src="https://photo2.tinhte.vn/data/avatars/l/2995/2995271.jpg?1700038051"
          alt="Logo"
        />
      </div>
      <nav className="navigation">
        {/* Thay đường dẫn lại */}
        <a href="#">Home</a>
        <a href="#">#ly do mua</a>
        <a href="#">#trên tay</a>
        <a href="#">#trải nghiệm</a>
        <a href="#">#tinh te lookback 2023</a>
        <a href="#">#ces24</a>
      </nav>
      <div className="search">
        {/* Thanh search */}
        <input type="text" placeholder="Search..." />
      </div>
      <div className="user-profile">
        {/* User Profile */}
        <img src="/path-to-your-user-icon.png" alt="User Profile" />
      </div>
    </header>
  );
}

export default Header;
