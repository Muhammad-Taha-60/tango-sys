import { useEffect, useRef, useState } from 'react';
import { Layers, Zap, Brain, Server, ArrowUpRight } from 'lucide-react';

const services = [
  {
    icon: Layers,
    title: 'Integration',
    description: 'Connect your stack into one coherent pipeline. We unify your tools, data, and workflows.',
    color: 'electric',
  },
  {
    icon: Zap,
    title: 'Automation',
    description: 'Remove repetition. Reduce risk. Increase speed. Build systems that run 24/7.',
    color: 'tango',
  },
  {
    icon: Brain,
    title: 'AI & Analytics',
    description: 'Turn data into decisions with predictive models and intelligent insights.',
    color: 'electric',
  },
  {
    icon: Server,
    title: 'Hardware Procurement',
    description: 'Source, configure, and deploy infrastructure at scale with expert guidance.',
    color: 'navy',
  },
];

const Services = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative w-full py-24 lg:py-32 z-20 bg-offwhite"
    >
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-electric/5 to-transparent" />

      <div className="relative w-full px-6 lg:px-12 xl:px-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Column - Text */}
          <div className="lg:sticky lg:top-32">
            <p
              className={`font-mono text-xs uppercase tracking-[0.14em] text-tango mb-4 transition-all duration-600 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
              }`}
            >
              What we do
            </p>
            <h2
              className={`font-heading font-bold text-navy max-w-lg mb-6 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{
                fontSize: 'clamp(32px, 4vw, 52px)',
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
                transitionDelay: '100ms',
              }}
            >
              End-to-end systems for{' '}
              <span className="text-electric">modern</span> operations.
            </h2>
            <p 
              className={`text-charcoal-muted text-base lg:text-lg max-w-md transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              We architect, build, and maintain the technology infrastructure 
              that powers high-performing teams.
            </p>
          </div>

          {/* Right Column - Cards Grid */}
          <div className="grid sm:grid-cols-2 gap-5">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`group bg-white rounded-2xl p-6 border border-navy/5 shadow-card hover:shadow-lg hover:-translate-y-1 transition-all duration-500 cursor-pointer ${
                  isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-98'
                }`}
                style={{ transitionDelay: `${150 + index * 100}ms` }}
              >
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 ${
                  service.color === 'tango' 
                    ? 'bg-tango/10 group-hover:bg-tango/20' 
                    : service.color === 'electric'
                    ? 'bg-electric/10 group-hover:bg-electric/20'
                    : 'bg-navy/10 group-hover:bg-navy/20'
                }`}>
                  <service.icon 
                    className={`w-6 h-6 ${
                      service.color === 'tango' 
                        ? 'text-tango' 
                        : service.color === 'electric'
                        ? 'text-electric'
                        : 'text-navy'
                    }`} 
                    strokeWidth={1.5} 
                  />
                </div>

                {/* Title */}
                <div className="flex items-center gap-2 mb-3">
                  <h3 className="font-heading font-semibold text-navy text-lg">
                    {service.title}
                  </h3>
                  <ArrowUpRight className="w-4 h-4 text-navy/30 group-hover:text-tango group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                </div>

                {/* Description */}
                <p className="text-sm text-charcoal-muted leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
