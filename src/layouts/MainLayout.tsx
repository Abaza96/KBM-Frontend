import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div>
      {/* Future header, footer, or sidebar can be added here */}
      <Outlet />
    </div>
  );
};

export default MainLayout;
