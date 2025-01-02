import TrainerAssignment from './TrainerAssignment';
import SubmitProject from './TrainerProject';
import { useState } from 'react';

function Assignment() {
    const [selectedComponent, setSelectedComponent] = useState('TrainerAssignment');

  return (
    <>
      {selectedComponent === 'TrainerAssignment' && <TrainerAssignment />}
      {selectedComponent === 'SubmitProject' && <SubmitProject />}
    </>
  );
}

export default Assignment;