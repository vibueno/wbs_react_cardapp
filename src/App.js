import React, { useState, useEffect } from 'react';
import './App.css';
import Card from './components/Card';

export default function App() {
  const [welcomeMessage, setWelcomeMessage] = useState('');
  const [pageTheme, setPageTheme] = useState('light');
  const pageThemes = ['light', 'dark'];

  document.body.classList = `bg-${pageTheme}`;

  useEffect(() => {
    setWelcomeMessage('Happy 2021');
  }, []);

  const handleBtnClick = () => {
    if (pageTheme === pageThemes[0]) setPageTheme(pageThemes[1]);
    else setPageTheme(pageThemes[0]);

    document.body.classList = `bg-${pageTheme}`;
  };

  return (
    <>
      <h1>{welcomeMessage}</h1>
      <div className="card-container">
        <Card title="rock" img="rock.png" alt="Hand in rock position" />
        <Card title="paper" img="paper.png" alt="Hand in paper position" />
        <Card
          title="scissors"
          img="scissors.png"
          alt="Hand in scissors position"
        />
      </div>
      <div className="btn-container">
        <button onClick={handleBtnClick} className="btn">
          Change theme
        </button>
      </div>
    </>
  );
}
