import Hero from './components/Hero';
import Qualifications from './components/Qualifications';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <Hero />
        <Qualifications />
      </main>
    </div>
  );
}
