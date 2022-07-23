import { Component } from 'react';
import styles from '../Searchbar/index.module.css';
import PropTypes from 'prop-types';

class Searchbar extends Component {
  state = {
    value: '',
  };

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  handleChangeValue = e => {
    this.setState({ value: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.value);
  };

  render() {
    return (
      <header className={styles.Searchbar}>
        <form
          onSubmit={e => {
            this.handleSubmit(e);
          }}
          className={styles.SearchForm}
        >
          <button type="submit" className={styles.SearchForm_button}>
            <span className={styles.SearchForm_button_label}>Search</span>
          </button>

          <input
            value={this.state.value}
            onChange={e => {
              this.handleChangeValue(e);
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
  }
}

export default Searchbar;
