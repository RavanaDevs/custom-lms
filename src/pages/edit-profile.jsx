import Sidebar from '../components/sidebar';
import Navbar from '../components/navbar';
import EditProfile from '../components/edit-profile';

const Dashboard = () => {
  return (
    <div className="container">
      <Navbar />
      <div className="body">
      <Sidebar />
      <div className="content">
        <EditProfile/>
      </div>
      </div>
    </div>
  );
};

export default Dashboard;
