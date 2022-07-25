import styles from '../ImageGallery/index.module.css';
import PropTypes from 'prop-types';
import { Fragment } from 'react';
import Modal from 'components/Modal';
import { useState } from 'react';

const ImageGalleryItem = props => {
  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(true);
  };

  const closeModal = e => {
    if (e.key === 'Escape') {
      setModal(false);
    } else if (e.target === e.currentTarget) {
      setModal(false);
    }
  };

  return (
    <Fragment>
      {modal && (
        <Modal closeModal={closeModal} image={props.element.largeImageURL} />
      )}
      <li
        onClick={() => {
          openModal(props.element);
        }}
        className={styles.ImageGalleryItem}
      >
        <img
          className={styles.ImageGalleryItem_image}
          src={props.element.webformatURL}
          alt=""
        />
      </li>
    </Fragment>
  );
};

ImageGalleryItem.propTypes = {
  element: PropTypes.shape({
    largeImageURL: PropTypes.string.isRequired,
    webformatURL: PropTypes.string.isRequired,
  }).isRequired,
  onClickedImage: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
