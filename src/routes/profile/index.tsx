import {
  Box,
  Button,
  Flex,
  Icon,
  Input,
  Select,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { FiUser } from "react-icons/fi";

const user = {
  name: "Kitty Cat",
  email: "kitty.loves.basketball@gmail.com",
  celular: "(83) 91234-5678",
  genero: "F",
  interests: ["volei", "basquete"],
};

const genderOption = [
  { value: "F", label: "Feminino" },
  { value: "M", label: "Masculino" },
  { value: "NB", label: "Não-binário" },
];

const Profile = () => {
  return (
    <Flex as="main" flexDir="column">
      <Flex h="100vh" bg="#F8F3F3">
        <Flex w="100vw" justifyContent="center">
          <Box
            position={"absolute"}
            mt="8"
            h="32"
            w="32"
            bg="white"
            borderRadius="full"
            borderWidth="2px"
            borderColor="#8F2031"
            left="350"
          >
            <Flex flex="1" justifyContent="center" mt="8">
              <Icon as={FiUser} color="black" w="16" h="16" />
            </Flex>
          </Box>
          <VStack w="20vw" alignItems="start" spacing="6" mt="8">
            <Text fontSize="48px" fontWeight="500" color="black">
              {user.name}
            </Text>
            <VStack w="100%" alignItems="start">
              <Text fontSize="16px" fontWeight="500" color="gray.700">
                Email
              </Text>
              <Input value={user.email} type="email" bgColor="white" />
            </VStack>
            <VStack w="100%" alignItems="start">
              <Text fontSize="16px" fontWeight="500" color="gray.700">
                Celular
              </Text>
              <Input
                value={user.celular}
                placeholder="(83) 91234-5678"
                bgColor="white"
              />
            </VStack>
            <VStack w="100%" alignItems="start">
              <Text fontSize="16px" fontWeight="500" color="gray.700">
                Gênero
              </Text>
              <Select bgColor="white">
                {genderOption.map((option) => (
                  <option value={option.value}>{option.label}</option>
                ))}
              </Select>
            </VStack>
            <VStack w="100%" alignItems="start">
              <Text fontSize="16px" fontWeight="500" color="gray.700">
                Alterar senha
              </Text>
              <Input
                type="password"
                placeholder="Digite sua senha atual"
                bgColor="white"
              />
            </VStack>
            <VStack w="100%" alignItems="start">
              <Text fontSize="16px" fontWeight="500" color="gray.500">
                Digiste sua Nova Senha
              </Text>
              <Input
                type="password"
                placeholder="Digite sua senha nova"
                bgColor="white"
              />
            </VStack>
            <VStack w="100%" alignItems="start">
              <Text fontSize="16px" fontWeight="500" color="gray.700">
                Esportes de interesse
              </Text>
              <Textarea bg="white" disabled />
            </VStack>
            <Button bgColor="green.400" color="white" alignSelf="center">
              Salvar
            </Button>
          </VStack>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Profile;
