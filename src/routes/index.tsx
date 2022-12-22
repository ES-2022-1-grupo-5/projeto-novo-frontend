import { createBrowserRouter } from 'react-router-dom';
import { RequireAuth } from '../components/RequireAuth';
import { Error } from './error';
import { Home } from './home';
import { SignIn } from './signin';
import { Root } from './root';
import { SignUp } from './signup';
import { Recovery } from './recovery';

export enum AppRoutes {
  ROOT = '/',
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
        index: true,
        element: <Home />,
      },
      {
        path: AppRoutes.SIGNIN,
        element: <SignIn />,
      },
      {
        path: AppRoutes.SIGNUP,
        element: <SignUp />,
      },
      {
        path: AppRoutes.RECOVERY,
        element: <Recovery />,
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
