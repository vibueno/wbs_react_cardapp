import React, { useState } from 'react';
export default function Screen() {
  const [screenStatus, setScreenStatus] = useState('System Off');

  const clickHandler = action => {
    if (action === 'switchon') setScreenStatus('System On');
    else if (action === 'switchoff') setScreenStatus('System Off');
  };

  return (
    <>
      <div>{screenStatus}</div>
      <button onClick={() => clickHandler('switchon')}>Turn on</button>
      <button onClick={() => clickHandler('switchoff')}>Turn off</button>
    </>
  );
}
