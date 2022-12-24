import React from 'react';
import overlayStyles from './overlay.module.css';
import { useNavigate } from 'react-router-dom';

export default function Overlay({ active = true, children }) {
  const navigate = useNavigate();
  // Create a click event where if it clicks the overlay it will navigate back to /
  const handleClick = () => {
    navigate('/');
  };
  return !active ? (
    <></>
  ) : (
    <div className={overlayStyles.container} onClick={handleClick}>
      {children}
    </div>
  );
}
