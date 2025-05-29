import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Rola para o topo da página ao mudar de rota
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
}