import Header from '../Header/Header';
import Sidebar from '../Sidebar/sidebar';
import Scrollbar from '../Scrollbar/Scrollbar';

function Materials() {
  return (
      <>
          <Header />
          <Sidebar onSelect={(component) => setSelectedComponent(component)} />
          <Scrollbar />
      </>
  );
}

export default Materials;
