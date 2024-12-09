import Header from '../Header/Header';
import Sidebar from '../Sidebar/sidebar';
import Scrollbar from '../Scrollbar/Scrollbar';
import AddAdmin from './AddAdmin/AddAdmin';
import AddLearner from './AddLearner/AddLearner';
import AddTrainer from './AddTrainer/AddTrainer';
import { useState } from 'react';

function User() {
  const [selectedComponent, setSelectedComponent] = useState('AddAdmin');

  return (
    <>
      <Header />
      <Sidebar onSelect={(component) => setSelectedComponent(component)} />
      <Scrollbar />
      {selectedComponent === 'AddAdmin' && <AddAdmin />}
      {selectedComponent === 'AddLearner' && <AddLearner />}
      {selectedComponent === 'AddTrainer' && <AddTrainer />}
    </>
  );
}

export default User;
