
import Hero from './components/Hero';
import Qualifications from './components/Qualifications';
import CriminalDefense from './components/CriminalDefense';
import AreasOfActivity from './components/AreasOfActivity';
import CallToAction from './components/CallToAction';
import Biography from './components/Biography';
import LandmarkCases from './components/LandmarkCases';
import Differentials from './components/Differentials';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <Hero />
        <Qualifications />
        <CriminalDefense />
        <AreasOfActivity />
        <CallToAction />
        <Biography />
        <Differentials />
        <LandmarkCases />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
