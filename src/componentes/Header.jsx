import { useNavigate, useLocation } from 'react-router-dom';
import React, { useState } from 'react';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Hook para pegar a rota atual

  const navItems = [
    { name: 'INICIO', path: '/' },
    { name: 'SOBRE', path: '/sobre' },
    { name: 'GALERIA', path: '/galeria' },
    { name: 'COMO JOGAR', path: '/comojogar' },
    { name: 'REGRAS', path: '/regras' },
    { name: 'DOWNLOAD', path: '/download' },
    { name: 'COMUNIDADE', path: '/comunidade' },
  ];

  return (
    <header className="relative h-64 bg-cover bg-center border-b border-gray-200 dark:border-gray-700" style={{ backgroundImage: "url('Ohara.png')" }}>
      {/* Navegacao sobreposta */}
      <nav className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {navItems.map((item, i) => (
          <button type="button"
            key={i}
            onClick={() => navigate(item.path)}
            className={`botoesNav ${location.pathname === item.path ? 'active' : ''}`} // Logica para o botao ficar selecionado
          >
            {item.name}
          </button>
      ))}
      </nav>
    </header>
  );
};

export default Header;
