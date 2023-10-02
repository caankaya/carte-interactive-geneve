import { Outlet } from 'react-router-dom';
import '../../styles/index.css';
// import Sidebar from '../Sidebar/Sidebar';
import Sidebar2 from '../Sidebar/Sidebar2';
function Layout() {
  return (
    <div className="Layout">
      {/* <Sidebar /> */}
      <Sidebar2 />
      <Outlet />
    </div>
  );
}

export default Layout;
