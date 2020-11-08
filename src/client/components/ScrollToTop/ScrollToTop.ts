import { useState, useEffect, PropsWithChildren } from 'react';
import { useLocation } from 'react-router';

export function ScrollToTop({ children }: PropsWithChildren<any>) {
  const { pathname } = useLocation();
  const [currentPathName, setCurrentPathName] = useState(pathname);

  useEffect(() => {
    if (currentPathName !== pathname) {
      setCurrentPathName(pathname);
      window && window.scrollTo(0, 0);
    }
  }, [pathname, currentPathName]);

  return children;
}
