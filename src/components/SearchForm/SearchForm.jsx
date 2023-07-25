import { useState } from 'react';
import { Form, Button, Input } from './SearchForm.styled';
import PropTypes from 'prop-types';

export const SearchForm = ({ onSearch }) => {
  const [searchValue, setSearchValue] = useState('');

  // Функция-обработчик для обновления состояния значения input при его изменении
  const handleChange = e => {
    setSearchValue(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSearch(searchValue);
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Input
        name="search"
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
        value={searchValue} // Значение input берется из состояния
        onChange={handleChange} // При изменении input вызывается функция-обработчик handleChange
      />
      <Button type="submit">Search</Button>
    </Form>
  );
};

SearchForm.propTypes = {
  onSearch: PropTypes.func.isRequired,
};
