import React, { useContext, useState } from 'react';
import ErrorBoundary from './ErrorBoundary';
import sublinks from './data';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [page, setPage] = useState({ page: '', links: [] });
  const [location, setLocation] = useState({});

  const openSidebar = () => {
    setIsSidebarOpen(true);
  }

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  }

  const openSubmenu = (text, coordinates) => {
    const tempPage = sublinks.find((link) => link.page === text);
    setPage(tempPage);
    setLocation(coordinates)
    setIsSubmenuOpen(true);
  }

  const closeSubmenu = () => {
    setIsSubmenuOpen(false);
  }

  return (
    <ErrorBoundary>
      <AppContext.Provider value={{
        isSidebarOpen,
        openSidebar,
        closeSidebar,
        isSubmenuOpen,
        openSubmenu,
        closeSubmenu,
        page,
        location,
      }}>
        {children}
      </AppContext.Provider>
    </ErrorBoundary>
  )
};


const useGlobalContext = () => {
  return useContext(AppContext);
}

export { AppContext, useGlobalContext, AppProvider };
