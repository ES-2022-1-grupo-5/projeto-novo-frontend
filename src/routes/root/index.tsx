import { Outlet } from 'react-router-dom';
import { Navbar } from '../../components/Navbar';

export const Root = () => {
  // TODO: build navbar here
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};
