import { Outlet } from 'react-router-dom';
import '../../styles/index.css';
function Layout() {
  return (
    <div className="Layout">
      Layout
      <Outlet />
    </div>
  );
}

export default Layout;
