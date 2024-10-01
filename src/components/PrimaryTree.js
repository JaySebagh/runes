import React, { useState } from 'react';

const Landing = ({ rows }) => {
  // curr selected buttons
  const [selectedButtons, setSelectedButtons] = useState([]);
  
  const handleSelection = (row, value) => {
    setSelectedButtons(prev => {
      // remove old row selection
      const updated = prev.filter(sel => sel.row !== row);
      // add new row selection
      return [...updated, { row, value }];
    });
  };

  return (
    <div>
      {rows.map(({ row, options }) => (
        <div key={row}>
          {options.map(option => (
            <label key={option}>
              <input
                type="radio"
                name={`row${row}`}
                // checks if the curr option is in the selectedButtons state and selects it if it is
                checked={selectedButtons.some(sel => sel.row === row && sel.value === option)}
                // if the selection is selected then replace the old selection with the new selection
                onChange={() => handleSelection(row, option)}
              />
              {option}
            </label>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Landing;
