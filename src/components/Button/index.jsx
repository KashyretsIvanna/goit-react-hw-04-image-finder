import styles from '../Button/index.module.css';
import PropTypes from 'prop-types';

const Button = (props) => {
  return (
    <button
      onClick={() => {
        props.onLoadMore();
      }}
      className={styles.Button}
    >
      Load more
    </button>
  );
};
Button.propTypes = {
  onLoadMore: PropTypes.func.isRequired,
};

export default Button;
