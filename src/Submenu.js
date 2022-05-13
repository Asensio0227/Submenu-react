import React, { useEffect, useRef, useState } from 'react';
import { useGlobalContext } from './Context';

const Submenu = () => {
  const {
    isSubmenuOpen,
    page: { page, links },
    location
  } = useGlobalContext();
  const container = useRef(null);
  const [columns, setColumns] = useState('col-2');

  useEffect(() => {
    setColumns('col-2');
    const submenu = container.current;
    const { center, bottom } = location;
    submenu.style.left = `${center}px`;
    submenu.style.top = `${bottom}px`;
    if (links.length === 3) {
      setColumns('col-3')
    }
    if (links.length > 3) {
      setColumns('col-4')
    }
  }, [page, location, links]);

  return (
    <aside className={`${isSubmenuOpen ? 'submenu show-submenu' : 'submenu'}`} ref={container}>
      <section>
        <h4>{page}</h4>
        <ul className={`submenu-center ${columns}`}>
          {links.map((link, index) => {
            const { label, url, icon } = link;
            return (
              <li key={index}>
                <a href={url}>
                  {icon}
                </a>
                { label}
              </li>
            )
          })}
        </ul>
      </section>
    </aside>
  )
}

export default Submenu
