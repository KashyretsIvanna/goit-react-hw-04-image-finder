import styles from '../Searchbar/index.module.css';
import PropTypes from 'prop-types';
import { useState } from 'react';

const Searchbar = props => {
  const [value, setValue] = useState('');

  const handleChangeValue = e => {
    setValue(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.onSubmit(value);
  };

  return (
    <header className={styles.Searchbar}>
      <form
        onSubmit={e => {
          handleSubmit(e);
        }}
        className={styles.SearchForm}
      >
        <button type="submit" className={styles.SearchForm_button}>
          <span className={styles.SearchForm_button_label}>Search</span>
        </button>

        <input
          value={value}
          onChange={e => {
            handleChangeValue(e);
          }}
          className={styles.SearchForm_input}
          type="text"
          autoComplete="off"
          autoFocus={true}
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
export default Searchbar;
