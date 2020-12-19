import React, { useState } from 'react';
import './index.css';
export default function Card({ title, img, alt }) {
  const [isSelected, selectCard] = useState(false);

  const handleClick = () => selectCard(!isSelected);

  return (
    <div
      className={`card ${isSelected ? 'selected' : 'card not-selected'}`}
      onClick={handleClick}
    >
      <div className="card-title">{title}</div>
      <div className="card-img-container">
        <img src={`./img/${img}`} alt={`${alt}`} />
      </div>
    </div>
  );
}
