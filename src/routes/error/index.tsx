import { useRouteError } from 'react-router-dom';

//TODO: this route is beautiful.
export const Error = () => {
  const error: any = useRouteError(); //TODO: find a type for this

  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};
