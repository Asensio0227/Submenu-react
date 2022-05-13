import React from 'react'
import { FaTimes } from 'react-icons/fa';
import { useGlobalContext } from './Context';
import sublinks from './data'

const Sidebar = () => {
  const { closeSidebar, isSidebarOpen } = useGlobalContext();

  return (
    <aside className={`${isSidebarOpen ? 'sidebar-wrapper show-wrapper' : 'sidebar-wrapper'}`}>
      <div className="sidebar">
        <div className="sidebar-links">
          <button className="close-btn" onClick={closeSidebar}>
            <FaTimes/>
          </button>
        </div>
        {sublinks.map((item, index) => {
          const { page, links } = item;
          return (
            <article key={index}>
              <h4>{page}</h4>
              <ul className="sidebar-sublinks">
                {links.map((link, index) => {
                  const { url, label, icon } = link;
                  return (
                    <li key={index}>
                    <a href={url}>
                      {icon}
                    </a>
                      {label}
                    </li>
                  )
                })}
              </ul>
            </article>
          )
        })}
      </div>
    </aside>
  )
}

export default Sidebar
