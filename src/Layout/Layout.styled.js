import { styled } from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledUl = styled.ul`
  list-style: none;
  display: flex;
`;

export const StyledLi = styled.li`
  color: white;
  transition: background-color ease-in 250ms;
  &:hover,
  &:focus {
    background-color: darkcyan;
  }
`;

export const StyledNavLink = styled(NavLink)`
  padding: 20px 20px;
`;
