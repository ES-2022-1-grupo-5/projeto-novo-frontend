import { Navigate, useLocation } from 'react-router-dom';

interface Props {
  children: React.ReactNode;
}

export const RequireAuth: React.FC<Props> = ({ children }) => {
  //   let auth = useAuth();
  let location = useLocation();

  //   if (!auth.user) {
  if (true) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};
