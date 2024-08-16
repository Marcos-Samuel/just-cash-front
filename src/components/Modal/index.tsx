import { ReactNode } from 'react';
import './style.css';

interface ModalProps extends React.InputHTMLAttributes<HTMLInputElement> { 
  isOpen: boolean;
  onClose: ()=> void;
  title: string;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button onClick={onClose} className="close-button">&times;</button>
        <h2>{title}</h2>
        <h3>Dados do Lead</h3>
        {children}
      </div>
   
    </div>
  );
};

export default Modal;