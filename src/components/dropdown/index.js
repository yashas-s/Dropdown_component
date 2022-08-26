import React from 'react';
import './dropdown.css';
import { useState } from 'react';
//passing the created props
const Dropdown = (props) => {
//using the passed props by js destructuring
   const {label, selectedOption, setSelectedOption, options} = props;
   
   const [isOptionsVisible, setIsOptionsVisible] = useState(false);

   //to set the selected option as option and to close the dropdown after selection//
   const handleSelected=(option)=>{
    setSelectedOption(option);
    setIsOptionsVisible(false);
   };

  return (
    <div className="dropdown">
        <div className="heading">Dropdown-project</div>
        {label && <div className='dropdown-label'>{label}</div>}
         
         <div className="dropdown-component">
            <div className="selected-option" 
            //to toggle the down and up icon//
                 onClick={() => setIsOptionsVisible(!isOptionsVisible)}>
                <div>{selectedOption}</div>
            {/*to create down arrow and up arrow based on use state*/}
                {isOptionsVisible ? 
                 /*default code from tableircons for down and up buttons*/
                 (<svg 
                   xmlns="http://www.w3.org/2000/svg" 
                   class="icon icon-tabler icon-tabler-caret-up" 
                   width="20" 
                   height="20" 
                   viewBox="0 0 24 24" 
                   stroke-width="1.5" 
                   stroke="#7f5345" 
                   fill="none" 
                   stroke-linecap="round" 
                   stroke-linejoin="round">
                  <path 
                   stroke="none" 
                   d="M0 0h24v24H0z" 
                   fill="none"/>
                  <path 
                   d="M18 15l-6 -6l-6 6h12" />
                  </svg>) : 
                  (<svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    class="icon icon-tabler icon-tabler-caret-down" 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    stroke-width="1.5" 
                    stroke="#7f5345" 
                    fill="none" 
                    stroke-linecap="round" 
                    stroke-linejoin="round">
                   <path 
                     stroke="none" 
                     d="M0 0h24v24H0z" 
                     fill="none"/>
                   <path d="M18 15l-6 -6l-6 6h12" transform="rotate(180 12 12)" />
                   </svg>)}
            </div>
            {isOptionsVisible && (
                //to make dropdown options visible after clicking down //
                   <div className="dropdown-options">
                {options.length >0 && options.map((option) => <div className="dropdown-option" onClick={()=>handleSelected(option)}>{option}</div>) }
            </div> )}
         </div>
        </div>
  )
};

export default Dropdown;