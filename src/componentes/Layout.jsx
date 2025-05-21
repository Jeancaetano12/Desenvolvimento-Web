import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer'; // se você tiver um
import "../Styles.css"

const Layout = () => {
  return (
    <>
      <Header />
      <main className="p-4">
        <Outlet />
      </main>
      <Footer /> {/* opcional */}
    </>
  );
};

export default Layout;
