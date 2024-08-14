import React, { useState } from 'react';
import CloseEyeIcon from '../../assets/Icons/CloseEyeIcon';
import OpenEyeIcon from '../../assets/Icons/OpenEyeIcon';
import './style.css';

interface InputTextProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  isPassword?: boolean;
  type?: string;
  error?: string;
}

const InputText: React.FC<InputTextProps> = ({ name, type = 'text', isPassword, error = 'senha invalida' ,...props }) => {
  const [inputType, setInputType] = useState(type);

  const handleChangeIcon = () => {
    if (isPassword) {
      setInputType(inputType === 'password' ? 'text' : 'password');
    }
    return type;
  };

  return (
    <>
      <div className='input-container'>
        <input
          type={inputType}
          placeholder=' '
          {...props}
        />
        <label htmlFor={name}>{name}</label>
        {isPassword && (
          <span onClick={handleChangeIcon}>
            {inputType === 'password' ? <CloseEyeIcon /> : <OpenEyeIcon />}
          </span>
        )}  
      
        <p>
          {error && <>{error}</>}
        </p>
      </div>
    </>
  );
};

export default InputText;
