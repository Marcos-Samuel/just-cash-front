import React, { ReactNode, ButtonHTMLAttributes } from 'react';
import './style.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variable: 'primaryButton' | 'secondaryButton' | 'alternateButton';
}

const Button: React.FC<ButtonProps> = ({ children, variable, ...rest }) => {
  return (
    <button
      className={variable}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
