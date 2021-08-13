import { Box, Flex, Image, Stack } from '@chakra-ui/react';

export function Banner() {
  return (
    <Flex w="100%" h="40vh" >
      <Stack
        direction={['column', 'row']}
        bgImage={'./Background.png'}
        bgRepeat="no-repeat"
        bgSize="cover"
        w="100%"
        h="36vh"
        justify="space-between"
      >
        <Box color="white" alignSelf="center" ml="20">
          <Stack fontSize="36px" fontFamily="Poppins" fontStyle="medium">
            <h1>
              5 Continentes, <br /> infinitas possibilidades.
            </h1>
          </Stack>

          <Stack fontSize="20px" fontFamily="Poppins" fontStyle="regular">
            <span>
              Chegou a hora de tirar do papel a viagem que você sempre sonhou.
            </span>
          </Stack>
        <Image
          src="./Airplane.svg"
          alt="Airplane"
          transform="rotate(3deg)"
          w="30rem"
          position="absolute"
          ml="1200"
          mt="-180"
        />
        </Box>
      </Stack>
    </Flex>
  );
}
