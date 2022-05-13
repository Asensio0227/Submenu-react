import React, { useRef } from 'react';
import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from './Context';

const Navbar = () => {
  const { closeSubmenu, openSubmenu, openSidebar } = useGlobalContext();

  const displaySubmenu = (e) => {
    const page = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom - 3;
    openSubmenu(page, { center, bottom });
  }

  const handleSubmenu = (e) => {
    if (!e.target.classList.contains('link-btn')) {
      closeSubmenu();
    }
  }

  return (
    <nav onMouseEnter={handleSubmenu}>
      <div className="nav-center">
        <div className="nav-header">
          <h4>sky<span>coding</span></h4> 
          <button className="btn nav-toggle" onClick={openSidebar}>
            <FaBars/>
          </button>
        </div>
        <ul className="links">
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu}>
              products
            </button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu}>
              developers
            </button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu}>
              company
            </button>
          </li>
        </ul>
        <button className="btn signin-btn">
          sign-in
        </button>
      </div>
    </nav>
  )
}

export default Navbar