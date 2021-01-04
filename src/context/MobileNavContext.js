import { createContext } from 'react';

const MobileNavContext = createContext({
  mobileNavOpen: false,
  toggleMobileNav: () => {},
});

export default MobileNavContext;
