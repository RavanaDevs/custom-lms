import Sidebar from '../components/sidebar';
import Navbar from '../components/navbar';

const Dashboard = () => {
  return (
    <div className="container">
      <Navbar />
      <div className="body">
        <Sidebar />
        <div className="content"></div>
      </div>
    </div>
  );
};

export default Dashboard;
