import { NavLink, Outlet } from 'react-router-dom';
import { Main } from './Layout.styled';
import { StyledUl, StyledLi } from 'Layout/Layout.styled';
export const Layout = () => (
  <>
    <header>
      <nav className="container">
        <StyledUl>
          <StyledLi>
            <NavLink to="/">Home</NavLink>
          </StyledLi>
          <StyledLi>
            <NavLink to="/movies">Movies</NavLink>
          </StyledLi>
        </StyledUl>
      </nav>
    </header>

    <main className="container">
      <Outlet />
    </main>
  </>
);
