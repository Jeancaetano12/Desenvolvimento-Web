import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer'; // se você tiver um
import "../Styles.css"

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer /> {/* opcional */}
    </>
  );
};

export default Layout;
