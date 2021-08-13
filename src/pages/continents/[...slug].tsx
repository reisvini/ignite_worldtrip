import { useRouter } from 'next/router';
import { Header } from '../../components/Header';
import { ContinentsBanner } from './ContinentsBanner';
import { ContinentsCities } from './ContinentsCities';
import { ContinentsResume } from './ContinentsResume';

export default function ContinentPage() {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <>
      <Header />
      <ContinentsBanner slug={String(slug)} />
      <ContinentsResume />
      <ContinentsCities />
    </>
  );
}
