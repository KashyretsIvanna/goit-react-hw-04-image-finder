import styles from '../ImageGallery/index.module.css';
import { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from 'components/ImageGalleryItem';
import Loader from 'components/Loader';
import Button from 'components/Button';

class ImageGallery extends Component {
  state = {
    loading: false,
    items: [],
    imagesNumber: 12,
    modal: false,
    lengthOfJson: null,
  };

  static propTypes = {
    filter: PropTypes.string,
  };

  handleClickedImage = element => {
    this.setState({ modal: true });
    return element;
  };

  handleLoadMore = () => {
    this.setState(prev => ({ imagesNumber: prev.imagesNumber + 12 }));
  };

  async componentDidUpdate(prevProps, prevState) {
    const prevFilter = prevProps.filter;
    const nextFilter = this.props.filter;
    const prevNumber = prevState.imagesNumber;
    const nextNumber = this.state.imagesNumber;

    if (prevFilter !== nextFilter || prevNumber !== nextNumber) {
      console.log('filter was changed');
      const URL = `https://pixabay.com/api/?q=${this.props.filter}&page=1&key=28662580-e80c32ef76301f2cc10b9678d&image_type=photo&orientation=horizontal&per_page=${this.state.imagesNumber}`;

      this.setState({ loading: true });
      fetch(URL)
        .then(res => res.json())
        .then(items => {
          this.setState({ items: items.hits, lengthOfJson: items.totalHits });
          console.log(items);
        })
        .finally(() => this.setState({ loading: false }));

      console.log(this.props.filter);
    }
  }

  render() {
    return (
      <Fragment>
        {this.state.items && (
          <ul className={styles.ImageGallery}>
            {this.state.items.map(el => (
              <ImageGalleryItem
                onClickedImage={this.handleClickedImage}
                key={el.id}
                element={el}
              />
            ))}
          </ul>
        )}
        {this.state.loading === true && <Loader />}
        {this.state.items.length < this.state.lengthOfJson && (
          <Button onLoadMore={this.handleLoadMore} />
        )}
        {/* his.state.items && */}
      </Fragment>
    );
  }
}

export default ImageGallery;
