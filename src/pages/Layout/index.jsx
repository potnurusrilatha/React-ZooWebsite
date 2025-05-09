
import Header from '../../components/Header'
import Footer from '../../components/Footer';
import { Outlet } from 'react-router-dom';
import './layout.css'; 

const Layout = () => {
  return (
    <>
      <Header />
      <main className="mainContent">
        <Outlet />
      </main>
       <Footer />
   </>
  );
};

export default Layout;
