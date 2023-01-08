import { useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import styles from './Modal.module.css';

const Modal = ({ children, onClose }) => {
  const { overlay, modal } = styles;

  const memoKeyClose = useCallback(handelKeyClose, [handelKeyClose]);

  useEffect(() => {
    window.addEventListener('keydown', memoKeyClose);

    return () => {
      window.removeEventListener('keydown', memoKeyClose);
    };
  }, [memoKeyClose]);

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
