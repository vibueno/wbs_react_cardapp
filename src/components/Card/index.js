import React, { useState } from 'react';
export default function Card() {
  const [screenStatus, setScreenStatus] = useState('System Off');

  const clickHandler = action => {
    if (action === 'switchon') setScreenStatus('System On');
    else if (action === 'switchoff') setScreenStatus('System Off');
  };

  return (
    <div className="card-container">
      <div className="card"></div>
      <div className="card"></div>
      <div className="card"></div>
    </div>
  );
}
