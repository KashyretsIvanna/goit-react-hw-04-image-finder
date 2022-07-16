import styles from '../Modal/index.module.css';
import { Component } from 'react';
import PropTypes from 'prop-types';

class Modal extends Component {
  static propTypes = {
    closeModal: PropTypes.func.isRequired,
    image: PropTypes.string.isRequired,
  };

  eventListen = e => {
    if (e.key === 'Escape') {
      this.props.closeModal(e);
    }
  };

  componentDidMount() {
    window.addEventListener('keydown', e => this.eventListen(e));
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', e => this.eventListen(e));
  }

  render() {
    return (
      <div
        onClick={e => {
          this.props.closeModal(e);
        }}
        className={styles.Overlay}
      >
        <div className={styles.Modal}>
          <img src={this.props.image} alt="" />
        </div>
      </div>
    );
  }
}

export default Modal;
