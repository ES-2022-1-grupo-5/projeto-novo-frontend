import { createBrowserRouter } from 'react-router-dom';
import { RequireAuth } from '../components/RequireAuth';
import { Error } from './error';
import { Home } from './home';
import { SignIn } from './signin';
import { Root } from './root';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'sigin',
        element: <SignIn />,
      },
      {
        path: 'signup',
        element: <SignIn />,
      },
      {
        path: 'recovery',
        element: <SignIn />,
      },
      {
        path: 'profile',
        element: (
          <RequireAuth>
            <SignIn />
          </RequireAuth>
        ),
      },
    ],
  },
]);
