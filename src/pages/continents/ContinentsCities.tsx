import { Flex, HStack, Text } from '@chakra-ui/react';
import { TopCity } from './TopCity';

export function ContinentsCities() {
  return (
    <Flex flexDir="column" ml="5rem">
      <Text fontFamily="Poppins" fontSize="36" color="#47585B">
        Cidades +100
      </Text>

      <Flex
        display='grid'
        gridTemplateColumns="1fr 1fr 1fr 1fr 1fr"
        justifyContent="space-between"
        alignItems="center"
        flexDirection="column"
        gridRowGap="4rem"
        w="100%"
      >
        <TopCity />
        <TopCity />
        <TopCity />
        <TopCity />
        <TopCity />
        <TopCity />
        <TopCity />
      </Flex>
    </Flex>
  );
}
