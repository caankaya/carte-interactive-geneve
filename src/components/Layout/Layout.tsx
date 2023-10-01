import { Outlet } from 'react-router-dom';
import '../../styles/index.css';
import Sidebar from '../Sidebar/Sidebar';
function Layout() {
  return (
    <div className="Layout">
      <Sidebar />
      <Outlet />
    </div>
  );
}

export default Layout;
