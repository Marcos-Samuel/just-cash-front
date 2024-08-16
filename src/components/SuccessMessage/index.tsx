import React, { useState, useEffect } from 'react';
import './style.css';

interface SuccessMessageProps {
  message: string;
  onClose: () => void;
}

const SuccessMessage: React.FC<SuccessMessageProps> = ({ message, onClose }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  const handleCloseClick = () => {
    setVisible(false);
    onClose(); 
  };

  return (
    <div className={`success-message ${visible ? 'visible' : ''}`}>
      {message}
      <button className="close-button" onClick={handleCloseClick}>×</button>
    </div>
  );
};

export default SuccessMessage;
