import { ChakraProvider } from '@chakra-ui/react';
import { Banner } from '../components/Banner';
import { ContinentsSlide } from '../components/ContinentsSlide';
import { Header } from '../components/Header';
import { LetsGoText } from '../components/LetsGoText';
import { TravelTypes } from '../components/TravelTypes';
import { theme } from '../styles/theme';

export default function Home() {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Banner />
      <TravelTypes />
      <LetsGoText />
      <ContinentsSlide />
    </ChakraProvider>
  );
}
