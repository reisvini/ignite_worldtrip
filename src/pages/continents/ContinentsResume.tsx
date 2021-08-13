import { Box, Flex, HStack, Spacer, Text } from '@chakra-ui/react';
import { RiInformationLine } from 'react-icons/ri';

export function ContinentsResume() {
  return (
    <HStack spacing="30" m="5rem" justify="center" fontFamily="Poppins">
      <Box w="60rem">
        <Text fontSize="24" fontWeight="400">
          A Europa é, por convenção, um dos seis continentes do mundo.
          Compreendendo a península ocidental da Eurásia, a Europa geralmente
          divide-se da Ásia a leste pela divisória de águas dos montes Urais, o
          rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
        </Text>
      </Box>

      <Spacer />

      <Flex justify="space-between" w="450px">
        <Box align="center" fontWeight="semibold">
          <Text fontSize="48" margin="0" color="#FFBA08">
            44
          </Text>
          <Text fontSize="24" margin="0" color="#47585B">
            países
          </Text>
        </Box>

        <Box align="center" fontWeight="semibold">
          <Text fontSize="48" margin="0" color="#FFBA08">
            44
          </Text>
          <Text fontSize="24" margin="0" color="#47585B">
            línguas
          </Text>
        </Box>

        <Box align="center" fontWeight="semibold">
          <Text fontSize="48" margin="0" color="#FFBA08">
            44
          </Text>
          <Text fontSize="24" margin="0" color="#47585B">
            cidades +100
            <RiInformationLine fontSize="16" color="#999999" />
          </Text>
        </Box>
      </Flex>
    </HStack>
  );
}
