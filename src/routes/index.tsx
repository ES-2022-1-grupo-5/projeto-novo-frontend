import { createBrowserRouter } from 'react-router-dom';
import { RequireAuth } from '../components/RequireAuth';
import { Error } from './error';
import { Home } from './home';
import { SignIn } from './signin';
import { Root } from './root';

export enum AppRoutes {
  ROOT = '/',
  HOME = '',
  SIGNIN = '/signin',
  SIGNUP = '/signup',
  RECOVERY = '/recovery',
  PROFILE = '/profile',
}

export const router = createBrowserRouter([
  {
    path: AppRoutes.ROOT,
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: AppRoutes.HOME,
        element: <Home />,
      },
      {
        path: AppRoutes.SIGNIN,
        element: <SignIn />,
      },
      {
        path: AppRoutes.SIGNUP,
        element: <SignIn />,
      },
      {
        path: AppRoutes.RECOVERY,
        element: <SignIn />,
      },
      {
        path: AppRoutes.PROFILE,
        element: (
          <RequireAuth>
            <SignIn />
          </RequireAuth>
        ),
      },
    ],
  },
]);
