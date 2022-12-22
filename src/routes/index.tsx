import { createBrowserRouter } from 'react-router-dom';
import { RequireAuth } from '../components/RequireAuth';
import { Error } from './error';
import { Home } from './home';
import { Login } from './login';
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
        path: 'login',
        element: <Login />,
      },
      {
        path: 'recovery',
        element: <Login />,
      },
      {
        path: 'signup',
        element: <Login />,
      },
      {
        path: 'profile',
        element: (
          <RequireAuth>
            <Login />
          </RequireAuth>
        ),
      },
    ],
  },
]);
