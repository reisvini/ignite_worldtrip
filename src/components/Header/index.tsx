import { Flex, Image } from '@chakra-ui/react';

export function Header() {
  return (
    <Flex as="header" align="center" mx="auto" w="100%" justify="center" h="10vh">
      <Image src="/Logo.svg" alt="Logo" />
    </Flex>
  );
}
