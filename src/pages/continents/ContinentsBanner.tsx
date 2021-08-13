import { Flex, Text } from '@chakra-ui/react';

interface ContinentsBannerProps {
  slug: string;
}

export function ContinentsBanner({ slug }: ContinentsBannerProps) {
  let translatedSlug = ''
  switch (slug) {
    case 'north-america':
      translatedSlug = 'América do Norte'
      break
    case 'south-america':
      translatedSlug = 'América do Sul'
      break
    case 'asia':
      translatedSlug = 'Ásia'
      break
    case 'africa':
      translatedSlug = 'África'
      break
    case 'europe':
      translatedSlug = 'Europa'
      break
    case 'oceania':
      translatedSlug = 'Oceania'
      break
  }

  return (
    <Flex bgImg={`/continents/${slug}1.jpg`} bgSize="cover" w="100%" h={500}>
      <Flex
        as="text"
        alignSelf="flex-end"
        m="5rem"
        color="white"
        fontSize="4rem"
        fontFamily="Poppins"
        fontStyle="semibold"
      >
        {translatedSlug}
      </Flex>
    </Flex>
  );
}
