import { styled } from 'styled-components';

export const H2 = styled.h2`
  font-size: 1.1em;
  margin-bottom: 10px;
`;

export const Ul = styled.ul`
  padding: 5px;
  list-style: none;
  border: 5px solid darkgoldenrod;
`;
export const Li = styled.li`
  &:not(:last-child) {
    margin-bottom: 30px;
  }
`;
