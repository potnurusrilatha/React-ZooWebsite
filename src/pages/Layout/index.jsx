
import Header from '../../components/Header'
import Footer from '../../components/Footer';
import { Outlet } from 'react-router-dom';
import './layout.css'; // If your styles are here

const Layout = ({ getPopUp }) => {
  return (
    <div className="pageContainer">
      <Header />
      <main className="mainContent">
        <Outlet />
      </main>
      {!getPopUp && <Footer />}
    </div>
  );
};

export default Layout;
