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

  useEffect(() => {
    const activeButton = navRef.current?.querySelector(".botoesNav.active");
    if (activeButton) {
      const { offsetLeft, offsetWidth } = activeButton;
      setIndicatorStyle({ left: offsetLeft, width: offsetWidth });
    }
  }, [location.pathname]);

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
        className="sticky top-0 z-50 flex justify-center gap-2 py-3 relative"
      >
        {/* Indicador deslizante */}
        <span
          className="absolute bottom-0 h-1 bg-white rounded shadow-md transition-all duration-300"
          style={{ left: indicatorStyle.left, width: indicatorStyle.width }}
        ></span>

        {navItems.map((item, i) => (
          <button
            key={i}
            onClick={() => navigate(item.path)}
            className={`botoesNav ${location.pathname === item.path ? 'active' : ''}`}
          >
            {item.name}
          </button>
        ))}
      </nav>
    </>
  );
};

export default Header;
