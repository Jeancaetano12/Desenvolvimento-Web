import { useNavigate, useLocation } from 'react-router-dom';
import React, { useEffect, useRef, useState } from 'react';
import oharaBanner from '../assets/OharaBanner.png';
import "../Styles.css"

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { name: 'INICIO', path: '/' },
    { name: 'SOBRE', path: '/sobre' },
    { name: 'GALERIA', path: '/galeria' },
    { name: 'COMO JOGAR', path: '/comojogar' },
    { name: 'REGRAS', path: '/regras' },
    { name: 'DOWNLOAD', path: '/download' },
    { name: 'COMUNIDADE', path: '/comunidade' },
  ];

  const navRef = useRef(null);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const activeButton = navRef.current?.querySelector(".botoesNav.active");
    if (activeButton) {
      const { offsetLeft, offsetWidth } = activeButton;
      setIndicatorStyle({ left: offsetLeft, width: offsetWidth });
    }
  }, [location.pathname]);

  const handleNavigate = (path) => {
    navigate(path);
    setIsMenuOpen(false); // Fecha o menu após clique no mobile
  };

  return (
    <>
      <div
        className="h-64 bg-cover bg-center relative"
        style={{ backgroundImage: `url(${oharaBanner})` }}
      >
        <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-b from-transparent to-[#b3889e] pointer-events-none z-10" />
      </div>

      <nav
        ref={navRef}
        className="sticky top-0 z-50 flex justify-center gap-2 py-3"
      >
        {/* Indicador deslizante (ativo só no desktop) */}
        <span
          className="absolute top-0 h-1 bg-white rounded shadow-md transition-all duration-300 hidden md:block"
          style={{ left: indicatorStyle.left, width: indicatorStyle.width }}
        ></span>

        {/* Botão Hamburguer (apenas mobile) */}
        <button
          aria-label="Abrir Menu"
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1 rounded focus:outline-none focus:ring-2 focus:ring-white hover:bg-white group transition duration-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {/* Linha 1 */}
          <span 
            className={`
              block w-6 h-0.5 bg-[#fa77a3] transition-transform duration-300 ease-in-out
              ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}
            `}
          ></span>
          {/* Linha 2 */}
          <span 
            className={`
              block w-6 h-0.5 bg-[#fa77a3] transition-all duration-300 ease-in-out
              ${isMenuOpen ? 'opacity-0' : ''}
            `}
          ></span>
          {/* Linha 3 */}
          <span
            className={`
              block w-6 h-0.5 bg-[#fa77a3] transition-transform duration-300 ease-in-out
              ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}
            `}
          ></span>
        </button>

        {/* Lista de botões */}
        <div
          className={`
            ${isMenuOpen ? 'flex' : 'hidden'}
            flex-col gap-2 absolute top-12 left-0 w-full p-2
            md:flex md:flex-row md:static md:w-auto md:p-0 md:bg-transparent
          `}
        >
          {navItems.map((item, i) => (
            <button
              key={i}
              onClick={() => handleNavigate(item.path)}
              className={`botoesNav ${location.pathname === item.path ? 'active' : ''}`}
            >
              {item.name}
            </button>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Header;
