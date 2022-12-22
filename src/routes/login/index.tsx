import {
  Box,
  Input,
  Text,
  Button,
  VStack,
  Flex,
  Image,
} from '@chakra-ui/react';
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
    <Flex as="main" direction="row-reverse" h="100%" px="6rem" py="4rem">
      <Image
        src={LoginIllustration}
        position="absolute"
        top="0"
        left="0"
        h="100%"
        zIndex="-1"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        backgroundPosition="left"
      />
      <Box bg="#262E57" p="3rem">
        <Text fontSize="3xl" color="white">
          Entre para encontrar seu próximo racha!
        </Text>
        <form onSubmit={handleSubmit}>
          <VStack spacing="2">
            <Input
              bg="white"
              id="email"
              name="email"
              type="email"
              placeholder="email"
            />
            <Input bg="white" type="password" placeholder="senha" />
          </VStack>
          <Text color="white">Esqueceu sua senha?</Text>
          <Button>Entrar</Button>
        </form>
      </Box>
    </Flex>
  );
};
