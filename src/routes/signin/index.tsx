import {
  Box,
  Input,
  Text,
  Button,
  VStack,
  Flex,
  Image,
  Center,
  Divider,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { AppRoutes } from '..';
import LoginIllustration from '../../assets/illustrations/login-illustration.svg';

export const SignIn = () => {
  //TODO: find the type of this event
  const handleSubmit = (event: any) => {
    event.preventDefault();

    console.log(event);

    //TODO: send to back end
  };

  return (
    <Flex as="main" direction="row-reverse" h="100%" px="2rem" py="4rem">
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
      <Box bg="#262E57" p="2rem" borderRadius="0.4rem">
        <Text fontSize="3xl" color="white" pb="3rem">
          Entre para encontrar seu próximo racha!
        </Text>
        <form onSubmit={handleSubmit}>
          <VStack spacing="2rem" pb="0.5rem">
            <Input
              bg="white"
              id="email"
              name="email"
              type="email"
              placeholder="email"
            />
            <Input bg="white" type="password" placeholder="senha" />
          </VStack>
          <Link to={AppRoutes.RECOVERY}>
            <Text color="white">Esqueceu sua senha?</Text>
          </Link>
          <Center py="2rem">
            <Button colorScheme="red" color="white">
              Entrar
            </Button>
          </Center>
          <Divider colorScheme="whiteAlpha" />
          <Center pt="2rem">
            <Text color="white">
              Não tem uma conta?{' '}
              <Link to={AppRoutes.SIGNUP}>
                <Text as="span" color="red.500">
                  Cadastre-se
                </Text>
              </Link>
            </Text>
          </Center>
        </form>
      </Box>
    </Flex>
  );
};
