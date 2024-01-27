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
            <a href="#">Dashboard</a>
          </li>
          <li>
            <a href="#">Courses</a>
          </li>
          <li>
            <a href="#">Students</a>
          </li>
          <li>
            <a href="#">Grades</a>
          </li>
          <li>
            <a href="#">Settings</a>
          </li>
        </ul>
        <button className="logout-btn">Logout</button>
      </div>

    </nav>
  );
};

export default Sidebar;
