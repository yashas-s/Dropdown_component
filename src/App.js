import React, { useState } from 'react';
import "./App.css";
import { DROPDOWN_OPTIONS } from './common/data/dropdown';
import Dropdown from './components/dropdown';

const App = () => {
//whatever we are selecting in dropdown file should be accessable in parent file
// creating usestate use 
  const [selectedOption, setSelectedOption] = useState(DROPDOWN_OPTIONS[0]);

  return (
    <div className='app'>

      <Dropdown
      options={DROPDOWN_OPTIONS} 
      selectedOption={selectedOption} 
      setSelectedOption={setSelectedOption}
      label={"How did you come to know about the career camp course?"}
      />
    </div>
  )
};

export default App;