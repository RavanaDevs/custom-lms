import { Link } from 'react-router-dom';
import './sidebar.css'; // Custom styles

const Sidebar = () => {
  return (
    <nav className="sidebar">
      <div className="profile">
        <img
          src="https://png.pngtree.com/png-vector/20191018/ourmid/pngtree-user-vector-icon-png-image_1824214.jpg"
          alt="Profile"
          className="profile-icon"
        />
        <span className="role-indicator">Instructor</span>
      </div>

      <div className="links">
        <ul className="sidebar-links">
          <li>
            <Link to="/">Dashboard</Link>
          </li>
          <li>
            <Link to="/edit-profile">My Profile</Link>
          </li>
          <li>
            <Link to="#">Courses</Link>
          </li>
          <li>
            <Link to="#">Students</Link>
          </li>
          <li>
            <Link to="#">Grades</Link>
          </li>
          <li>
            <Link to="#">Settings</Link>
          </li>
        </ul>
        <button className="logout-btn">Logout</button>
      </div>
    </nav>
  );
};

export default Sidebar;
