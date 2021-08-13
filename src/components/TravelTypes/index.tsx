import { Box, Divider, Flex, HStack, Image } from '@chakra-ui/react';

export function TravelTypes() {
  return (
    <>
      <Flex justify="center" pt="20">
        <HStack justify="space-between" w="1160px">
          <Box align="center" fontWeight="semibold" fontSize="24">
            <Image src="./cocktail.svg" alt="" />
            <span>vida noturna</span>
          </Box>

          <Box align="center" fontWeight="semibold" fontSize="24">
            <Image src="./surf.svg" alt="" />
            <span>praia</span>
          </Box>

          <Box align="center" fontWeight="semibold" fontSize="24">
            <Image src="./building.svg" alt="" />
            <span>moderno</span>
          </Box>

          <Box align="center" fontWeight="semibold" fontSize="24">
            <Image src="./museum.svg" alt="" />
            <span>clássico</span>
          </Box>

          <Box align="center" fontWeight="semibold" fontSize="24">
            <Image src="./earth.svg" alt="" />
            <span>e mais...</span>
          </Box>
        </HStack>
      </Flex>
    </>
  );
}
