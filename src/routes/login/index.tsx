import { Box, Input, Text, Button, VStack } from '@chakra-ui/react';
import LoginIllustration from '../../assets/illustrations/login-illustration.svg';
import './index.css';

export const Login = () => {
  //TODO: find the type of this event
  const handleSubmit = (event: any) => {
    event.preventDefault();

    console.log(event);

    //TODO: send to back end
  };

  return (
    <main className="login">
      <img src={LoginIllustration} className="background-illustration" />
      <Box bg="#262E57" className="container">
        <Text fontSize="3xl" color="white">
          Entre para encontrar seu próximo racha!
        </Text>
        <form onSubmit={handleSubmit} className="form">
          <VStack spacing="2">
            <Input id="email" name="email" type="email" />
            <Input type="password" />
            <Button>Entrar</Button>
          </VStack>
        </form>
      </Box>
    </main>
  );
};
