import { createContext } from 'react';

const MobileNavContext = createContext({
  mobileNavOpen: false,
  toggleMobileNav: () => {},
  showMobileNavMenu: false,
  toggleMobileNavView: () => {},
});

export default MobileNavContext;
