import { useState, useMemo, useCallback } from 'react';
import PropTypes from 'prop-types';
import styles from './ImageGalleryItem.module.css';
import Modal from 'components/Modal';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';

const ImageGalleryItem = ({ largeImageURL, webformatURL, tags, id }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const { ImageGalleryItem, ImageGalleryItem__image, ImageGalleryItem__large } =
    styles;

  function handlerModalToggle() {
    setModalOpen(!modalOpen);
  }

  const memoModalToggle = useCallback(handlerModalToggle, [handlerModalToggle]);

  return useMemo(
    () => (
      <li className={ImageGalleryItem}>
        {modalOpen && (
          <Modal onClose={memoModalToggle}>
            <LazyLoadImage
              className={ImageGalleryItem__large}
              src={largeImageURL}
              alt={tags}
              effect="opacity"
            />
          </Modal>
        )}
        <LazyLoadImage
          className={ImageGalleryItem__image}
          src={webformatURL}
          alt={tags}
          id={id}
          onClick={memoModalToggle}
        />
      </li>
    ),
    [
      id,
      tags,
      webformatURL,
      largeImageURL,
      ImageGalleryItem,
      ImageGalleryItem__image,
      ImageGalleryItem__large,
      modalOpen,
      memoModalToggle,
    ]
  );
};

ImageGalleryItem.propTypes = {
  id: PropTypes.number.isRequired,
  tags: PropTypes.string.isRequired,
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};

export default ImageGalleryItem;
