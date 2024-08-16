import React, { ReactNode, ButtonHTMLAttributes } from 'react';
import './style.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variable: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({ children, variable, ...rest }) => {
  return (
    <button
      className={ variable === 'primary' ? 'primaryButton' : 'secondaryButton' }
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
