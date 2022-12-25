import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { beforeEach, describe, expect, it } from 'vitest';
import { Navbar } from '.';
import { AuthContext } from '../../contexts/AuthContext';
import { AppRoutes } from '../../routes';

describe('Navbar', () => {
  describe('when user is logged in', () => {
    beforeEach(() => {
      render(
        <MemoryRouter>
          <AuthContext.Provider
            value={{
              signin: () => {},
              signout: () => {},
              user: {
                id: '1',
                name: 'John Doe',
                email: 'john_doe@gmail.com',
              },
            }}
          >
            <Navbar />
          </AuthContext.Provider>
        </MemoryRouter>
      );
    });

    it('should render the navbar', () => {
      expect(screen.getByText('Criar grupo')).toBeTruthy();
    });

    it('should render the bell icon', () => {
      expect(screen.getByTestId('notification-button')).toBeTruthy();
    });

    it('should render the user icon', () => {
      expect(screen.getByTestId('user-button')).toBeTruthy();
    });

    it('should have red background color', () => {
      expect(screen.getByTestId('navbar')).toHaveStyle(
        'background-color: #8F2031'
      );
    });
  });

  describe('when user is not logged in', () => {
    beforeEach(() => {
      render(
        <MemoryRouter>
          <AuthContext.Provider
            value={{
              signin: () => {},
              signout: () => {},
              user: null,
            }}
          >
            <Navbar />
          </AuthContext.Provider>
        </MemoryRouter>
      );
    });

    it('should have a blue background color', () => {
      expect(screen.getByTestId('navbar')).toHaveStyle(
        'background-color: #262e57'
      );
    });

    it('should render sign in button', () => {
      expect(screen.getByTestId('sign-up-button')).toHaveTextContent(
        'Criar Conta'
      );
    });

    it('should sign up button redirect to sign up page', () => {
      expect(screen.getByTestId('sign-up-button')).toHaveAttribute(
        'href',
        '/signup'
      );
    });

    it('should render sign up button', () => {
      expect(screen.getByTestId('sign-in-button')).toHaveTextContent('Entrar');
    });

    it('should sign in button redirect to sign in page', () => {
      expect(screen.getByTestId('sign-in-button')).toHaveAttribute(
        'href',
        '/signin'
      );
    });
  });

  describe('when user is on sign up page', () => {
    beforeEach(() => {
      render(
        <MemoryRouter initialEntries={[AppRoutes.SIGNUP]}>
          <AuthContext.Provider
            value={{
              signin: () => {},
              signout: () => {},
              user: null,
            }}
          >
            <Navbar />
          </AuthContext.Provider>
        </MemoryRouter>
      );
    });

    it('should have a red background color', () => {
      expect(screen.getByTestId('navbar')).toHaveStyle(
        'background-color: #8F2031'
      );
    });

    it('should render need help button', () => {
      expect(screen.getByTestId('need-help-button')).toHaveTextContent(
        'Precisa de ajuda?'
      );
    });
  });

  describe('when user is on sign in page', () => {
    beforeEach(() => {
      render(
        <MemoryRouter initialEntries={[AppRoutes.SIGNIN]}>
          <AuthContext.Provider
            value={{
              signin: () => {},
              signout: () => {},
              user: null,
            }}
          >
            <Navbar />
          </AuthContext.Provider>
        </MemoryRouter>
      );
    });

    it('should have a blue background color', () => {
      expect(screen.getByTestId('navbar')).toHaveStyle(
        'background-color: #262e57'
      );
    });

    it('should render need help button', () => {
      expect(screen.getByTestId('need-help-button')).toHaveTextContent(
        'Precisa de ajuda?'
      );
    });
  });
});
