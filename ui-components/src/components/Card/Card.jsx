import React from 'react';
import './Card.css';

const Card = ({ 
  children, 
  title, 
  elevation = 'medium' 
}) => {
  return (
    <div className={`custom-card ${elevation}`}>
      {title && <div className="card-title">{title}</div>}
      <div className="card-content">
        {children}
      </div>
    </div>
  );
};

export default Card;