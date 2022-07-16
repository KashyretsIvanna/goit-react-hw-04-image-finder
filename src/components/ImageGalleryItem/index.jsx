import styles from '../ImageGallery/index.module.css';
import { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Modal from 'components/Modal';

class ImageGalleryItem extends Component {
  state = {
    modal: false,
  };
  static propTypes = {
    element: PropTypes.object.isRequired,
    onClickedImage: PropTypes.func.isRequired,
  };

  openModal = () => {
    this.setState({ modal: true });
  };

  closeModal = e => {
    if (e.key === 'Escape') {
      this.setState({ modal: false });
    } else if (e.target === e.currentTarget) {
      this.setState({ modal: false });
    }
  };

  render() {
    return (
      <Fragment>
        {this.state.modal && (
          <Modal
            closeModal={this.closeModal}
            image={this.props.element.largeImageURL}
          />
        )}
        <li
          onClick={() => {
            this.openModal(this.props.element);
          }}
          className={styles.ImageGalleryItem}
        >
          <img
            className={styles.ImageGalleryItem_image}
            src={this.props.element.webformatURL}
            alt=""
          />
        </li>
      </Fragment>
    );
  }
}

export default ImageGalleryItem;
