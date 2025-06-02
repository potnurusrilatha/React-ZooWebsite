
import Header from '../../src/components/Header'
import Footer from '../../src/components/Footer';
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
