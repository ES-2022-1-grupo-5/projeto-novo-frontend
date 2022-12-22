import React, { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { AppRoutes } from '../../routes';

interface Props {
  children: JSX.Element;
}

export const RequireAuth = ({ children }: Props) => {
  let auth = useAuth();
  let location = useLocation();

  if (!auth.user) {
    return (
      <Navigate to={AppRoutes.SIGNIN} state={{ from: location }} replace />
    );
  }

  return children;
};
