import React from 'react';
import styles from './Modal.module.css';

export const Modal = ({ isVisible, onClose, children }) => {
  return (
    <div
      className={styles.modalContainer}
      style={{ display: isVisible ? 'grid' : 'none' }}
    >
      <div className={styles.modalBody}>
        <button className={styles.modalClose} onClick={onClose}>
          X
        </button>
        <>{children}</>
      </div>
    </div>
  );
};
