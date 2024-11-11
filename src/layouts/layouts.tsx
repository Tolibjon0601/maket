import Footer from '../components/footer/footer'
import Header from '../components/header/header'
import { Outlet, useLocation } from "react-router-dom";
import DrawerPage from '../pages/drawer/drawer';
import { FC } from 'react';

const MainLayout :FC= () => {
  const location = useLocation();

  return (
   <>
      <Header />
      <DrawerPage/>
    <div className="container max-w-[1400px] mx-auto text-white flex flex-col min-h-screen">
      <div className="flex-grow">
				<Outlet />
			</div>
    </div>
      {location.pathname !== "/login" && location.pathname !== "/auth" && <Footer />}
    </>
  );
};


export default MainLayout
