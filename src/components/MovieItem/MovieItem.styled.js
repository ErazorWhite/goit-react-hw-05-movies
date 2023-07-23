import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLi = styled.li`
  padding: 10px 0;
  &:nth-child(2n) {
    background-color: #f5f5f5;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  padding: 5px;
  transition: outline ease-in 250ms;

  &:hover,
  &:focus {
    outline: 3px solid purple;
  }
`;

export const MovieThumb = styled.div`
  display: flex;
  min-width: 200px;
`;

export const MovieOverview = styled.p`
  padding: 20px;
`;

