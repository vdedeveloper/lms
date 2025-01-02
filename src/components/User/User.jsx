import AddAdmin from './AddAdmin';
import AddLearner from './AddLearner';
import AddTrainer from './AddTrainer';
import { useState } from 'react';

function User() {
  const [selectedComponent, setSelectedComponent] = useState('AddAdmin');

  return (
    <>
      {selectedComponent === 'AddAdmin' && <AddAdmin />}
      {selectedComponent === 'AddLearner' && <AddLearner />}
      {selectedComponent === 'AddTrainer' && <AddTrainer />}
    </>
  );
}

export default User;
