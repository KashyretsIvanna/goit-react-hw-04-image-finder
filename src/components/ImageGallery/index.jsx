import styles from '../ImageGallery/index.module.css';
import { Fragment } from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from 'components/ImageGalleryItem';
import Loader from 'components/Loader';
import Button from 'components/Button';
import { useState } from 'react';
import { useEffect } from 'react';

const ImageGallery = props => {
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);
  const [imagesNumber, setImagesNumber] = useState(12);
  const [lengthOfJson, setLengthOfJson] = useState(null);

  const handleLoadMore = () => {
    setImagesNumber(prev => prev + 12);
  };

  useEffect(() => {
    if (props.filter !== '' || imagesNumber !== 12) {
      setLoading(true);

      fetch(
        `https://pixabay.com/api/?q=${props.filter}&page=1&key=28662580-e80c32ef76301f2cc10b9678d&image_type=photo&orientation=horizontal&per_page=${imagesNumber}`
      )
        .then(res => res.json())
        .then(items => {
          setItems(items.hits);
          setLengthOfJson(items.totalHits);
        })
        .finally(() => setLoading(false));
    }
  }, [props.filter, imagesNumber]);

  return (
    <Fragment>
      {items && (
        <ul className={styles.ImageGallery}>
          {items.map(el => (
            <ImageGalleryItem key={el.id} element={el} />
          ))}
        </ul>
      )}
      {loading === true && <Loader />}
      {items.length < lengthOfJson && <Button onLoadMore={handleLoadMore} />}
    </Fragment>
  );
};

ImageGallery.propTypes = {
  filter: PropTypes.string,
};

export default ImageGallery;
