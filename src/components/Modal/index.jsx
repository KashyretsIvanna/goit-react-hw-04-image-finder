import styles from '../Modal/index.module.css';
import PropTypes from 'prop-types';
import { useEffect } from 'react';

const Modal = props => {
  const eventListen = e => {
    if (e.key === 'Escape') {
      props.closeModal(e);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', e => eventListen(e));
  });

  useEffect(() => {
    return window.removeEventListener('keydown', e => eventListen(e));
  });

  return (
    <div
      onClick={e => {
        props.closeModal(e);
      }}
      className={styles.Overlay}
    >
      <div className={styles.Modal}>
        <img src={props.image} alt="" />
      </div>
    </div>
  );
};

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  image: PropTypes.string.isRequired,
};

export default Modal;
