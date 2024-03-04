import styled from 'styled-components';
import { useSearch } from '../hooks/useSearch';

const Input = styled.input.attrs({
  type: 'search',
  placeholder: 'Поиск по названию статьи',
})`
  padding: 12px 14px;
  margin: 32px 0;
  width: 100%;
  height: 48px;
  outline: none;
  border: 1px solid rgba(145, 158, 171, 0.32);
  border-radius: 6px;
`;

export const Search = () => {
  const [value, handleChange] = useSearch();

  return (
    <Input value={value} onChange={handleChange} />
  );
};