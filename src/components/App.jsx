import Searchbar from './Searchbar';
import styles from '../components/styles.module.css';
import ImageGallery from './ImageGallery';
import { useState } from 'react';

const App = () => {
  const [filter, setFilter] = useState('');

  const handleSubmit = value => {
    setFilter(value);
  };

  return (
    <div className={styles.App}>
      <Searchbar onSubmit={handleSubmit} />
      <ImageGallery filter={filter} />
    </div>
  );
};

export default App;
