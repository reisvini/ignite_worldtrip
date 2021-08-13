import { Flex, Link, Text } from '@chakra-ui/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';

export function ContinentsSlide() {
  SwiperCore.use([Navigation, Pagination]);

  return (
    <Flex
      w="100%"
      maxW="1240px"
      mx="auto"
      mb={['5', '10']}
      h={['250px', '450px']}
      mt="10"
    >
      <Swiper
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        style={{ width: '100%', flex: '1' }}
      >
        <SwiperSlide>
          <Flex
            bgSize="cover"
            w="100%"
            h="100%"
            alignItems="center"
            justify="center"
            direction="column"
            bgImage="url(continents/north-america.jpg)"
          >
            <Link href="/continents/north-america">
              <Text color="#FFF" fontWeight="bold" fontSize={['3xl', '7xl']}>
                América do Norte
              </Text>
              <Text color="#FFF" fontWeight="bold" fontSize={['1xl', '4xl']}>
                O continente mais falado!
              </Text>
            </Link>
          </Flex>
        </SwiperSlide>

        <SwiperSlide>
          <Flex
            bgSize="cover"
            w="100%"
            h="100%"
            alignItems="center"
            justify="center"
            direction="column"
            bgImage="url(continents/south-america.jpg)"
          >
            <Link href="/continents/south-america">
              <Text color="#FFF" fontWeight="bold" fontSize={['3xl', '7xl']}>
                América do Sul
              </Text>
              <Text color="#FFF" fontWeight="bold" fontSize={['1xl', '4xl']}>
                O melhor continente!
              </Text>
            </Link>
          </Flex>
        </SwiperSlide>

        <SwiperSlide>
          <Flex
            bgSize="cover"
            w="100%"
            h="100%"
            alignItems="center"
            justify="center"
            direction="column"
            bgImage="url(continents/asia.jpg)"
          >
            <Link href="/continents/asia">
              <Text color="#FFF" fontWeight="bold" fontSize={['3xl', '7xl']}>
                Ásia
              </Text>
              <Text color="#FFF" fontWeight="bold" fontSize={['1xl', '4xl']}>
                O continente mais cultural!
              </Text>
            </Link>
          </Flex>
        </SwiperSlide>

        <SwiperSlide>
          <Flex
            bgSize="cover"
            w="100%"
            h="100%"
            alignItems="center"
            justify="center"
            direction="column"
            bgImage="url(continents/africa.jpg)"
          >
            <Link href="/continents/africa">
              <Text color="#FFF" fontWeight="bold" fontSize={['3xl', '7xl']}>
                África
              </Text>
              <Text color="#FFF" fontWeight="bold" fontSize={['1xl', '4xl']}>
                O continente com mais diversidade!
              </Text>
            </Link>
          </Flex>
        </SwiperSlide>

        <SwiperSlide>
          <Flex
            bgSize="cover"
            w="100%"
            h="100%"
            alignItems="center"
            justify="center"
            direction="column"
            bgImage="url(continents/europe.jpg)"
          >
            <Link href="/continents/europe">
              <Text color="#FFF" fontWeight="bold" fontSize={['3xl', '7xl']}>
                Europa
              </Text>
              <Text color="#FFF" fontWeight="bold" fontSize={['1xl', '4xl']}>
                O continente mais antigo!
              </Text>
            </Link>
          </Flex>
        </SwiperSlide>

        <SwiperSlide>
          <Flex
            bgSize="cover"
            w="100%"
            h="100%"
            alignItems="center"
            justify="center"
            direction="column"
            bgImage="url(continents/oceania.jpg)"
          >
            <Link href="/continents/oceania">
              <Text color="#FFF" fontWeight="bold" fontSize={['3xl', '7xl']}>
                Oceania
              </Text>
              <Text color="#FFF" fontWeight="bold" fontSize={['1xl', '4xl']}>
                O continente mais isolado!
              </Text>
            </Link>
          </Flex>
        </SwiperSlide>
      </Swiper>
    </Flex>
  );
}
