import Header from '../Header/Header';
import Sidebar from '../Sidebar/sidebar';
import Scrollbar from '../Scrollbar/Scrollbar';
import AddCourse from '../Course/AddCourse'

function Course() {
  return (
      <>
          <Header />
          <Sidebar onSelect={(component) => setSelectedComponent(component)} />
          <Scrollbar />
          <AddCourse />
      </>
  );
}

export default Course;
