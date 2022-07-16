import Searchbar from './Searchbar';
import styles from '../components/styles.module.css';
import { Component } from 'react';
import ImageGallery from './ImageGallery';

class App extends Component {
  state = {
    filter: '',
    json: [],
  };

  handleSubmit = value => {
    this.setState({ filter: value });
  };

  render() {
    return (
      <div className={styles.App}>
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery filter={this.state.filter} />
      </div>
    );
  }
}

export default App;
