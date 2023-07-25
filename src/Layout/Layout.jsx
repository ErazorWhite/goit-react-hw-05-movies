import { Outlet } from 'react-router-dom';
import { StyledNavLink } from './Layout.styled';
import { StyledUl, StyledLi } from 'Layout/Layout.styled';
import { Suspense } from 'react';
export const Layout = () => (
  <>
    <header>
      <nav className="container">
        <StyledUl>
          <StyledLi>
            <StyledNavLink to="/">Home</StyledNavLink>
          </StyledLi>
          <StyledLi>
            <StyledNavLink to="/movies">Movies</StyledNavLink>
          </StyledLi>
        </StyledUl>
      </nav>
    </header>

    <main className="container">
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </main>
  </>
);
