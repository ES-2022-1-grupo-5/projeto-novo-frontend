import { GroupCard } from '../../components/GroupCard';
import VolleyBall from '../../assets/icons/volleyball.svg';
import {
  Box,
  Text,
  Flex,
  Input,
  Stack,
  VStack,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

export const Home = () => {
  const groups = [
    {
      name: 'Futebol',
      slots: 5,
    },
    {
      name: 'Basquete',
    },
    {
      name: 'Vôlei',
      icon: VolleyBall,
    },
  ];

  return (
    <Flex as="main" flexDir="column" py="3rem">
      <VStack spacing="1rem" py="4rem" px="12rem" bgColor="#262e57">
        <Box alignSelf="flex-start" maxW="32rem">
          <Text fontSize="4xl" color="white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
          <Text fontSize="xl" color="white">
            Ut dictum mauris consectetur at viverra.
          </Text>
        </Box>
        <InputGroup>
          <Input placeholder="Pesquisar" bgColor="white" />
          <InputRightElement
            children={<SearchIcon color="red" fontSize="1.2em" />}
          />
        </InputGroup>
      </VStack>
      <Stack
        spacing="1rem"
        direction={['column', 'row']}
        justifyContent="center"
        w="100%"
        pt="3rem"
      >
        {groups.map(group => (
          <GroupCard {...group} />
        ))}
      </Stack>
    </Flex>
  );
};
