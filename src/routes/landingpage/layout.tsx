import { Outlet } from 'react-router-dom';
import Footer from '../../pages/Home/Footer';
import Navbar from '../../pages/Home/Navbar';

const LandingPage = () => {
  return (
    <div className=" h-screen overflow-x-hidden">
      <Navbar />
      <div className="w-full border-2 grid place-items-center">
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;
