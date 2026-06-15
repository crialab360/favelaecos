import React from 'react';
import './Button.scss';
import { Link } from 'react-router-dom';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'medium',
  href,
  onClick,
  type = 'button',
  disabled = false,
  icon,
  fullWidth = false
}) => {
  const classes = `btn btn--${variant} btn--${size} ${fullWidth ? 'btn--full' : ''}`;

  if (href) {
    return (
      <Link to={href} className={classes}>
        {icon && <span className="btn__icon">{icon}</span>}
        {children}
      </Link>
    );
  }

  return (
    <button 
      type={type} 
      className={classes} 
      onClick={onClick}
      disabled={disabled}
    >
      {icon && <span className="btn__icon">{icon}</span>}
      {children}
    </button>
  );
};

export default Button;