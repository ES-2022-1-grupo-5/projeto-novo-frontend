import { BellIcon } from '@chakra-ui/icons';
import { Button, Flex, HStack, Icon, Image, Text } from '@chakra-ui/react';
import { RiUser3Line } from 'react-icons/ri';
import { Link, useLocation } from 'react-router-dom';
import LogoIcon from '../../assets/icons/logo.svg';
import { useAuth } from '../../contexts/AuthContext';
import { AppRoutes } from '../../routes';

export const Navbar = () => {
  const location = useLocation();
  const { user } = useAuth();

  if (user) {
    return (
      <Flex
        as="nav"
        data-testid="navbar"
        justifyContent="space-between"
        alignItems="center"
        px="5rem"
        h="4rem"
        bg="#8F2031"
      >
        <Link to={AppRoutes.ROOT}>
          <Image src={LogoIcon} alt="logo" />
        </Link>

        <HStack spacing="2rem">
          <Button colorScheme="orange">Criar grupo</Button>
          <BellIcon
            data-testid="notification-button"
            color="orange"
            boxSize="2rem"
            cursor="pointer"
          />
          <Icon
            data-testid="user-button"
            as={RiUser3Line}
            color="white"
            boxSize="2rem"
            cursor="pointer"
          />
        </HStack>
      </Flex>
    );
  }

  if (
    location.pathname === AppRoutes.SIGNUP ||
    location.pathname === AppRoutes.SIGNIN
  ) {
    return (
      <Flex
        as="nav"
        data-testid="navbar"
        justifyContent="space-between"
        alignItems="center"
        px="1rem"
        h="4rem"
        bg={location.pathname === AppRoutes.SIGNUP ? '#8F2031' : '#262e57'}
      >
        <Link to={AppRoutes.ROOT}>
          <Image src={LogoIcon} alt="logo" />
        </Link>

        <HStack spacing="2rem">
          <Link data-testid="need-help-button" to={AppRoutes.ROOT}>
            <Button colorScheme="orange">Precisa de ajuda?</Button>
          </Link>
        </HStack>
      </Flex>
    );
  }

  return (
    <Flex
      as="nav"
      data-testid="navbar"
      justifyContent="space-between"
      alignItems="center"
      px="1rem"
      h="4rem"
      bg="#262e57"
    >
      <Link to={AppRoutes.ROOT}>
        <Image src={LogoIcon} alt="logo" />
      </Link>

      <HStack spacing="2rem">
        <Link data-testid="sign-up-button" to={AppRoutes.SIGNUP}>
          <Text color="white">Criar Conta</Text>
        </Link>
        <Link data-testid="sign-in-button" to={AppRoutes.SIGNIN}>
          <Button colorScheme="orange">Entrar</Button>
        </Link>
      </HStack>
    </Flex>
  );
};
