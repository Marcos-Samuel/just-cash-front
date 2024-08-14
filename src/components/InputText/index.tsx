import React, { useState, forwardRef } from 'react';
import CloseEyeIcon from '../../assets/Icons/CloseEyeIcon';
import OpenEyeIcon from '../../assets/Icons/OpenEyeIcon';
import './style.css';

interface InputTextProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  isPassword?: boolean;
  type?: string;
  error?: string;
}

const InputText = forwardRef<HTMLInputElement, InputTextProps>(
  ({ label, type = 'text', isPassword, error = 'senha invalida', ...rest }, ref) => {
    const [inputType, setInputType] = useState(type);

    const handleChangeIcon = () => {
      if (isPassword) {
        setInputType(inputType === 'password' ? 'text' : 'password');
      }
      return type;
    };

    return (
      <div className='input-container'>
        <input
          id={label}
          type={inputType}
          placeholder=' '
          ref={ref}
          {...rest}
        />
        <label htmlFor={label}>{label}</label>
        {isPassword && (
          <span onClick={handleChangeIcon}>
            {inputType === 'password' ? <CloseEyeIcon /> : <OpenEyeIcon />}
          </span>
        )}
        <p>
          {error && <>{error}</>}
        </p>
      </div>
    );
  }
);

InputText.displayName = 'InputText';

export default InputText;
