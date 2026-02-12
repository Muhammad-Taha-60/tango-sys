import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import Services from './sections/Services';
import AutomationSpotlight from './sections/AutomationSpotlight';
import AISpotlight from './sections/AISpotlight';
import Process from './sections/Process';
import Testimonials from './sections/Testimonials';
import Contact from './sections/Contact';

function App() {
  return (
    <div className="relative min-h-screen bg-offwhite">
      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main className="relative">
        {/* Section 1: Hero */}
        <Hero />

        {/* Section 2: Services */}
        <Services />

        {/* Section 3: Automation Spotlight */}
        <AutomationSpotlight />

        {/* Section 4: AI Spotlight */}
        <AISpotlight />

        {/* Section 5: Process */}
        <Process />

        {/* Section 6: Testimonials */}
        <Testimonials />

        {/* Section 7: Contact */}
        <Contact />
      </main>
    </div>
  );
}

export default App;
