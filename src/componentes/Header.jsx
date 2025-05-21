import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

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
    <header className="bg-black shadow p-4 flex flex-wrap justify-center gap-2">
      {navItems.map((item, i) => (
        <button
          key={i}
          onClick={() => navigate(item.path)}
          className="px-4 py-2 rounded-md text-sm font-medium bg-purple-600 text-white hover:bg-purple-700"
        >
          {item.name}
        </button>
      ))}
    </header>
  );
};

export default Header;
