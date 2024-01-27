import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from '../components/sidebar';
import Navbar from '../components/navbar';

const Dashboard = () => {
  return (
    <div className="container">
      <Navbar />
      <Sidebar />
      <div className="content">{/* Main content goes here */}</div>
    </div>
  );
};

export default Dashboard;
