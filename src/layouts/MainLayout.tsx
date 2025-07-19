import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div>
      <p> I'ma a Navbar </p>
      <Outlet />
    </div>
  );
};

export default MainLayout;
