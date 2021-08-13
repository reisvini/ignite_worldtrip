import {
  Box,
  Flex,
  Image,
  Text,
} from '@chakra-ui/react';

export function TopCity() {
  return (
    <Flex
      w="256px"
      h="279px"
      boxShadow="2px 2px #FFBA08"
      flexDirection="column"
    >
      <Image
        src="https://mundoviajar.com.br/wp-content/uploads/2018/06/Estação-London-Bridge-Londres-3.jpg"
        alt="London Bridge"
        htmlHeight="173px"
        htmlWidth="256px"
      />

      <Flex
        flexDir="column"
        display="grid"
        gridTemplateColumns="1fr 1fr"
        alignItems="center"
        alignContent="center"
      >
        <Box fontFamily="Poppins">
          <Text fontWeight="600" fontSize="22px" color="gray.600" mt="3" ml="5">
            Londres
          </Text>
          <Text fontWeight="500" color="gray.400" mt="3" ml="5">
            Inglaterra
          </Text>
        </Box>

        <Box ml="75" w="50px" pt="3">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Flag_of_England.svg/1200px-Flag_of_England.svg.png"
            alt="U.K Flag"
            borderRadius="50%"
            boxSize="40px"
          />
        </Box>
      </Flex>
    </Flex>
  );
}
