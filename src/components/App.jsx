import { useState } from 'react';

import styles from './App.module.css';
import ImageGallery from './ImageGallery';
import Searchbar from './Searchbar';

// idle, resolved, reject
const App = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const submitFormHandler = search => {
    setSearchQuery(search.trim().toLowerCase());
  };

  return (
    <div className={styles.App}>
      <Searchbar onSubmit={submitFormHandler} />
      {searchQuery && <ImageGallery searchQuery={searchQuery} />}
    </div>
  );
};

export default App;
