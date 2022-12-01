import { Box, Center } from '@chakra-ui/react';
import { FormEventHandler } from 'react';

export const Login = () => {
  //TODO: find the type of this event
  const handleSubmit = (event: any) => {
    event.preventDefault();

    console.log(event);

    //TODO: send to back end
  };

  return (
    <Center>
      <form onSubmit={handleSubmit}>
        <Box>
          <input id="email" name="email" type="email" />
          <input type="password" />
          <input type="submit" />
        </Box>
      </form>
    </Center>
  );
};
