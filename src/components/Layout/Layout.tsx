import Sidebar from '../Sidebar/Sidebar';
import { Outlet } from 'react-router-dom';
import '../../styles/index.css';

function Layout() {
  return (
    <div className="Layout">
      <Sidebar />
      <Outlet />
    </div>
  );
}

export default Layout;
