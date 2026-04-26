import Banner from '@/components/Banner/Banner';
import Hero from '@/components/Hero/Hero';
import Ticker from '@/components/Ticker/Ticker';
import ArabicDeco from '@/components/ArabicDeco/ArabicDeco';
import WhyPortfolio from '@/components/WhyPortfolio/WhyPortfolio';
import Stats from '@/components/Stats/Stats';
import About from '@/components/About/About';
import Experiences from '@/components/Experiences/Experiences';
import Projects from '@/components/Projects/Projects';
import Blog from '@/components/Blog/Blog';
import Contact from '@/components/Contact/Contact';

export const metadata = {
  title: 'Emir Bindwemba — Ingénieur Énergie',
  description:
    'Portfolio de Emir Bindwemba, étudiant ingénieur en dernière année spécialisé en Énergie & Villes du Futur.',
};

export default function Home() {
  return (
    <>
      <Banner />
      <Hero />
      <Ticker />
      <ArabicDeco />
      <WhyPortfolio />
      <Stats />
      <About />
      <Experiences />
      <Projects />
      <Blog />
      <Contact />
    </>
  );
}
