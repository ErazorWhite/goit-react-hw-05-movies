import { Form, Button, Input } from './SearchForm.styled';

export const SearchForm = () => {
  return (
    <Form>
      <Input
        name="search"
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
      />
      <Button type="submit">Search</Button>
    </Form>
  );
};
