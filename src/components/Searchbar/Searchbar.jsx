import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Searchbar.module.css';

const Searchbar = ({ onSubmit }) => {
  const [search, setSearch] = useState('');
  const { Searchbar, SearchForm, SearchForm__button, SearchForm__input } =
    styles;

  const handleSubmit = evt => {
    evt.preventDefault();
    if (!search.trim()) {
      setSearch('');
      return;
    }
    onSubmit(search);
  };

  const handlerInputChange = evt => {
    const { value } = evt.target;
    setSearch(value);
  };

  return (
    <header className={Searchbar}>
      <form className={SearchForm} onSubmit={handleSubmit}>
        <button className={SearchForm__button} type="submit" disabled={!search}>
          &#128269;
        </button>
        <input
          className={SearchForm__input}
          type="text"
          name="search"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          title="field for entering search query"
          value={search}
          onChange={handlerInputChange}
          required
        />
      </form>
    </header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
