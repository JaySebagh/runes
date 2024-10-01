import React, { useReducer } from 'react';

const reducer = (state, { row, value }) => {
  // check if an option is already selected in the curr row
  const existing = state.find(sel => sel.row === row);

  // if an option for the curr row is selected, replace it with the new one
  if (existing) return state.map(sel => (sel.row === row ? { row, value } : sel));
  
  // a max of 2 options can be selected at a time
  if (state.length === 2) {
    // check if row 1 and 3 are selected
    const toRemove = state.some(sel => sel.row === 1) && state.some(sel => sel.row === 3)
      // if it is then remove oldest
      ? state[0].row 
      // if it is not then remove the option from the closest row
      // if the curr row is closer to the new option than the prev row then curr becomes he new prev
      : state.reduce((prev, curr) => (Math.abs(curr.row - row) < Math.abs(prev.row - row) ? curr : prev)).row;

    // remove the selection and add the new selection
    return state.filter(sel => sel.row !== toRemove).concat({ row, value });
  }

  // if there is less than 2 selected, add the new selection
  return [...state, { row, value }];
};

// Rows data
const rows = [
  { row: 1, options: ['A', 'B', 'C'] },
  { row: 2, options: ['D', 'E', 'F'] },
  { row: 3, options: ['G', 'H', 'I'] },
];

const Landing = () => {
  // holds the curr selected options
  const [selectedButtons, dispatch] = useReducer(reducer, []);

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
                // if the selection is selected then use reducer function
                onChange={() => dispatch({ row, value: option })}
              />
              {option}
            </label>
          ))}
        </div>
      ))}
      <ul>
        {selectedButtons.map(({ row, value }) => (
          // text showing the selected options
          <li key={row}>Row {row}: {value}</li>
        ))}
      </ul>
    </div>
  );
};

export default Landing;
