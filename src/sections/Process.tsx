import { useEffect, useRef, useState } from 'react';
import { Search, PenTool, Rocket, TrendingUp } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Discover',
    description: 'Map your workflows, constraints, and goals.',
    icon: Search,
    color: 'navy',
  },
  {
    number: '02',
    title: 'Design',
    description: 'Architect the integration and automation plan.',
    icon: PenTool,
    color: 'electric',
  },
  {
    number: '03',
    title: 'Deploy',
    description: 'Implement with testing, monitoring, and docs.',
    icon: Rocket,
    color: 'tango',
  },
  {
    number: '04',
    title: 'Optimize',
    description: 'Tune performance and expand capabilities.',
    icon: TrendingUp,
    color: 'electric',
  },
];

const Process = () => {
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
      id="process"
      className="relative w-full py-24 lg:py-32 z-50 bg-offwhite"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-navy/10 to-transparent" />
      </div>

      <div className="relative w-full px-6 lg:px-12 xl:px-20">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <p
            className={`font-mono text-xs uppercase tracking-[0.14em] text-tango mb-4 transition-all duration-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
            }`}
          >
            Our Process
          </p>
          <h2
            className={`font-heading font-bold text-navy transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{
              fontSize: 'clamp(32px, 4vw, 52px)',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              transitionDelay: '100ms',
            }}
          >
            How we <span className="text-electric">build.</span>
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`relative group transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              {/* Card */}
              <div className="bg-white rounded-2xl p-6 border border-navy/5 shadow-card hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full">
                {/* Number Badge */}
                <div className={`inline-flex items-center justify-center w-10 h-10 rounded-xl mb-5 ${
                  step.color === 'tango' ? 'bg-tango/10' :
                  step.color === 'electric' ? 'bg-electric/10' :
                  'bg-navy/10'
                }`}>
                  <span className={`font-mono font-bold text-sm ${
                    step.color === 'tango' ? 'text-tango' :
                    step.color === 'electric' ? 'text-electric' :
                    'text-navy'
                  }`}>
                    {step.number}
                  </span>
                </div>

                {/* Icon */}
                <div className="mb-4">
                  <step.icon 
                    className={`w-6 h-6 ${
                      step.color === 'tango' ? 'text-tango' :
                      step.color === 'electric' ? 'text-electric' :
                      'text-navy'
                    }`}
                    strokeWidth={1.5}
                  />
                </div>

                {/* Content */}
                <h3 className="font-heading font-semibold text-navy text-xl mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-charcoal-muted leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Connector (hidden on last item and mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-navy/10">
                  <div className={`absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full ${
                    step.color === 'tango' ? 'bg-tango' :
                    step.color === 'electric' ? 'bg-electric' :
                    'bg-navy'
                  }`} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
