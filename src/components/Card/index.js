import React from 'react';
import './index.css';
export default function Card({ title, img, alt }) {
  return (
    <div className="card">
      <div className="card-title">{title}</div>
      <div className="card-img-container">
        <img src={`./img/${img}`} alt={`${alt}`} />
      </div>
    </div>
  );
}
