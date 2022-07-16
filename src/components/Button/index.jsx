import styles from '../Button/index.module.css';
import { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  static propTypes = {
    onLoadMore: PropTypes.func.isRequired,
  };

  render() {
    return (
      <button
        onClick={() => {
          this.props.onLoadMore();
        }}
        className={styles.Button}
      >
        Load more
      </button>
    );
  }
}

export default Button;
