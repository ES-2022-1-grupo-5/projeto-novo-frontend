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
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { AppRoutes } from "../../routes";
import LogoIcon from "../../assets/icons/logo.svg";

import React from "react";

const options = [
  { icon: User, label: "Perfil", link: "/profile" },
  { icon: User, label: "Grupos", link: "" },
  { icon: User, label: "Ajuda", link: "" },
  { icon: User, label: "Sair", link: "" },
];

export const Navbar = () => {
  const location = useLocation();

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
        <Image src={LogoIcon} alt="logo" />
      </Link>

      <HStack spacing="2rem">
        <Link to={AppRoutes.SIGNUP}>
          <Text color="white">Criar Conta</Text>
        </Link>
        <Link to={AppRoutes.SIGNIN}>
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
