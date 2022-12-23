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
  HStack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { AppRoutes } from '..';
import SignUpIllustration from '../../assets/illustrations/singup-illustration.svg';

export const SignUp = () => {
  //TODO: find the type of this event
  const handleSubmit = (event: any) => {
    event.preventDefault();

    console.log(event);

    //TODO: send to back end
  };

  return (
    <Flex as="main" h="90vh" px="3rem" alignItems="center">
      <Image
        src={SignUpIllustration}
        position="absolute"
        top="0"
        right="0"
        h="100%"
        zIndex="-1"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        backgroundPosition="right"
      />
      <Box bg="#8F2031" p="2rem" borderRadius="0.4rem">
        <Text fontSize="3xl" color="white" pb="3rem">
          Cadastre-se para encontrar seu racha!
        </Text>
        <form onSubmit={handleSubmit}>
          <VStack spacing="2rem" pb="0.5rem">
            <HStack w="100%">
              <Input
                bg="white"
                id="nome"
                name="nome"
                type="text"
                placeholder="nome"
              />
              <Input
                bg="white"
                id="sobrenome"
                name="sobrenome"
                type="text"
                placeholder="sobrenome"
              />
            </HStack>
            <Input
              bg="white"
              id="email"
              name="email"
              type="email"
              placeholder="email"
            />
            <Input
              bg="white"
              id="senha1"
              name="senha1"
              type="password"
              placeholder="crie sua senha"
            />
            <Input
              bg="white"
              id="senha2"
              name="senha2"
              type="password"
              placeholder="confirme sua senha"
            />
          </VStack>
          <Center py="2rem">
            <Button colorScheme="red" color="white">
              Criar conta
            </Button>
          </Center>
        </form>
      </Box>
    </Flex>
  );
};
