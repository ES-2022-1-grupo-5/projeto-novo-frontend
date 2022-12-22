import { Button, Flex, HStack, Image, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { AppRoutes } from '../../routes';

export const Navbar = () => {
  const location = useLocation();

  if (
    location.pathname === AppRoutes.SIGNUP ||
    location.pathname === AppRoutes.SIGNIN
  ) {
    return (
      <Flex
        as="nav"
        justifyContent="space-between"
        alignItems="center"
        px="1rem"
        h="4rem"
        bg={location.pathname === AppRoutes.SIGNUP ? '#8F2031' : '#262e57'}
      >
        <Link to={AppRoutes.ROOT}>
          <Image src="/logo.png" alt="logo" />
        </Link>

        <HStack spacing="2rem">
          <Link to={AppRoutes.ROOT}>
            <Button colorScheme="orange">Precisa de ajuda?</Button>
          </Link>
        </HStack>
      </Flex>
    );
  }

  return (
    <Flex
      as="nav"
      justifyContent="space-between"
      alignItems="center"
      px="1rem"
      h="4rem"
      bg="#262e57"
    >
      <Link to={AppRoutes.ROOT}>
        <Image src="/logo.png" alt="logo" />
      </Link>

      <HStack spacing="2rem">
        <Link to={AppRoutes.SIGNUP}>
          <Text color="white">Criar Conta</Text>
        </Link>
        <Link to={AppRoutes.SIGNIN}>
          <Button colorScheme="orange">Entrar</Button>
        </Link>
      </HStack>
    </Flex>
  );
};
