import { useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './Modal.module.css';

const Modal = ({ children, onClose }) => {
  const { overlay, modal } = styles;

  useEffect(() => {
    window.addEventListener('keydown', handelKeyClose);

    return () => {
      window.removeEventListener('keydown', handelKeyClose);
    };
  }, []);

  function handelKeyClose(evt) {
    if (evt.code === 'Escape') {
      onClose();
    }
  }

  function handelClose(evt) {
    if (evt.target === evt.currentTarget) {
      onClose();
    }
  }

  return (
    <div className={overlay} onClick={handelClose}>
      <div className={modal}>{children}</div>
    </div>
  );
};

Modal.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
