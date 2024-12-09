import Header from '../Header/Header';
import Sidebar from '../Sidebar/sidebar';
import Scrollbar from '../Scrollbar/Scrollbar';

function Support() {
  return (
      <>
          <Header />
          <Sidebar onSelect={(component) => setSelectedComponent(component)} />
          <Scrollbar />
      </>
  );
}

export default Support;
