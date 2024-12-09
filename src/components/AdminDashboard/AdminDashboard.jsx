import Header from '../Header/Header';
import Sidebar from '../Sidebar/sidebar';
import Scrollbar from '../Scrollbar/Scrollbar';

function AdminDashboard() {
  return (
      <>
          <Header />
          <Sidebar onSelect={(component) => setSelectedComponent(component)} />
          <Scrollbar />
      </>
  );
}

export default AdminDashboard;
