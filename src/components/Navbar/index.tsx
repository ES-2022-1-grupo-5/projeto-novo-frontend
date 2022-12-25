import {
  Button,
  Collapse,
  Flex,
  HStack,
  Icon,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { AppRoutes } from "../../routes";
import LogoIcon from "../../assets/icons/logo.svg";
import { BellIcon } from "@chakra-ui/icons";
import User from "react-icons";
import { RiUser3Line } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

import React from "react";

const options = [
  { icon: User, label: "Perfil", link: "/profile" },
  { icon: User, label: "Grupos", link: "" },
  { icon: User, label: "Ajuda", link: "" },
  { icon: User, label: "Sair", link: "" },
];

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

  const [showLogin, setShowLogin] = React.useState<boolean>(false);

  const onToggle = () => {
    setShowLogin((oldvalue) => !oldvalue);
  };

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
        bg={location.pathname === AppRoutes.SIGNUP ? "#8F2031" : "#262e57"}
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
        <VStack spacing="0" alignItems="center">
          <Button bg="transparent" onClick={onToggle} onBlur={onToggle}>
            <Icon name={"user"} color="white" />
          </Button>
          <Flex
            bg="white"
            position={"absolute"}
            flex="1"
            top="4rem"
            shadow="dark-lg"
          >
            <Collapse in={showLogin}>
              <VStack flex="1 " p="2">
                {options.map((value) => (
                  <Link key={value.link} to={value.link}>
                    <HStack spacing="1">
                      <Icon as={value.icon} color="black" />
                      <Text fontSize={"12px"} color="black">
                        {value.label}
                      </Text>
                    </HStack>
                  </Link>
                ))}
              </VStack>
            </Collapse>
          </Flex>
        </VStack>
      </HStack>
    </Flex>
  );
};
