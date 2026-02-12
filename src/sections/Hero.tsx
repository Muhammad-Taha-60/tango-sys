import { useEffect, useRef, useState } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen overflow-hidden z-10 flex items-center justify-center bg-offwhite"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <div 
          className={`absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-electric/10 blur-3xl transition-all duration-1000 ${
            isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
          }`}
        />
        <div 
          className={`absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-tango/5 blur-3xl transition-all duration-1000 delay-200 ${
            isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
          }`}
        />
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(#0B1F3B 1px, transparent 1px),
              linear-gradient(90deg, #0B1F3B 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative w-full px-6 lg:px-12 pt-24 pb-16">
        <div className="max-w-5xl mx-auto">
          {/* Badge */}
          <div 
            className={`flex justify-center mb-8 transition-all duration-700 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-card border border-navy/5">
              <span className="w-2 h-2 rounded-full bg-tango animate-pulse" />
              <span className="font-mono text-xs text-navy uppercase tracking-wider">
                Integration • Automation • Intelligence
              </span>
            </div>
          </div>

          {/* Headline */}
          <h1
            className={`font-heading font-bold text-navy text-center mb-6 transition-all duration-700 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{
              fontSize: 'clamp(36px, 6vw, 72px)',
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
              transitionDelay: '300ms',
            }}
          >
            Systems that move
            <br />
            <span className="text-gradient">like clockwork.</span>
          </h1>

          {/* Subheadline */}
          <p 
            className={`text-center text-charcoal-muted text-lg lg:text-xl max-w-2xl mx-auto mb-10 transition-all duration-700 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            End-to-end technology solutions that integrate, automate, and elevate 
            your operations—so you can focus on what matters.
          </p>

          {/* CTA Buttons */}
          <div 
            className={`flex flex-wrap items-center justify-center gap-4 transition-all duration-700 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: '500ms' }}
          >
            <button
              onClick={scrollToContact}
              className="group flex items-center gap-2 px-8 py-4 bg-tango hover:bg-tango-dark text-white text-base font-medium rounded-full transition-all duration-300 hover:shadow-glow hover:-translate-y-0.5"
            >
              Book a discovery call
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <button
              onClick={scrollToServices}
              className="group flex items-center gap-2 px-8 py-4 bg-white hover:bg-offwhite-dark text-navy text-base font-medium rounded-full transition-all duration-300 shadow-card hover:shadow-lg hover:-translate-y-0.5 border border-navy/5"
            >
              Explore solutions
              <ChevronDown className="w-5 h-5 group-hover:translate-y-0.5 transition-transform duration-300" />
            </button>
          </div>

          {/* Stats */}
          <div 
            className={`flex flex-wrap items-center justify-center gap-8 lg:gap-16 mt-16 pt-10 border-t border-navy/10 transition-all duration-700 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: '600ms' }}
          >
            {[
              { value: '150+', label: 'Projects Delivered' },
              { value: '98%', label: 'Client Satisfaction' },
              { value: '24h', label: 'Response Time' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-heading font-bold text-navy text-2xl lg:text-3xl mb-1">
                  {stat.value}
                </div>
                <div className="font-mono text-xs text-charcoal-muted uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Hint */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-500 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ transitionDelay: '800ms' }}
      >
        <span className="font-mono text-xs uppercase tracking-[0.14em] text-charcoal-muted">
          Scroll
        </span>
        <ChevronDown className="w-4 h-4 text-charcoal-muted animate-float" />
      </div>
    </section>
  );
};

export default Hero;
