import { Banner } from '../../components/Banner';
import { Outlet } from 'react-router-dom';

const LayoutAccount = () => {
  return (
    <div className="flex flex-row w-[100vw] h-[100vh] justify-between">
      <Banner />
      <Outlet />
    </div>
  );
};

export default LayoutAccount;
