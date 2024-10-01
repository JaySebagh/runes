import React from 'react';
import './assets/styles/landing.css'
import PrimaryTree from './components/PrimaryTree';
import SecondaryTree from './components/SecondaryTree';

const primaryRow = [
  { row: 1, options: ['A', 'B', 'C'] },
  { row: 2, options: ['D', 'E', 'F'] },
  { row: 3, options: ['G', 'H', 'I'] },
  { row: 4, options: ['J', 'K', 'L', 'M'] },
];

const secondaryRow = [
  { row: 5, options: ['1', '2', '3'] },
  { row: 6, options: ['4', '5', '6'] },
  { row: 7, options: ['7', '8', '9'] },
];

const tertiaryRow = [
  { row: 8, options: ['!', '@', '#'] },
  { row: 9, options: ['$', '%', '^'] },
  { row: 10, options: ['&', '*', '('] },
]

const Landing = () => {
  return (
    <div className='runes'>
      <PrimaryTree rows={primaryRow} />
      <div className='secondary-runes'>
        <SecondaryTree rows={secondaryRow} />
        <PrimaryTree rows={tertiaryRow} />
      </div>
    </div>
  );
};

export default Landing;
