import Hero from './components/Hero';
import Qualifications from './components/Qualifications';
import AreasOfActivity from './components/AreasOfActivity';
import Biography from './components/Biography';
import LandmarkCases from './components/LandmarkCases';
import Differentials from './components/Differentials';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <Hero />
        <Qualifications />
        <AreasOfActivity />
        <Biography />
        <LandmarkCases />
        <Differentials />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
