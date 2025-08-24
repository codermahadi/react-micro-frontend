import React from 'react';
import './Button.css';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'medium',
  onClick,
  type = 'button'
}) => {
  const buttonClass = `custom-button ${variant} ${size}`;
  
  return (
    <button 
      className={buttonClass}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;