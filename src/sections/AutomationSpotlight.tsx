import { useEffect, useRef, useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const features = [
  'Workflow mapping & analysis',
  'Bottleneck elimination',
  '24/7 automated processes',
  'Real-time monitoring',
];

const AutomationSpotlight = () => {
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
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="solutions"
      className="relative w-full py-24 lg:py-32 z-30 bg-offwhite overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] -translate-y-1/2 -translate-x-1/2 bg-tango/5 rounded-full blur-3xl" />
      </div>

      <div className="relative w-full px-6 lg:px-12 xl:px-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
            }`}
          >
            {/* Label */}
            <p
              className={`font-mono text-xs uppercase tracking-[0.14em] text-tango mb-4 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              Automation
            </p>

            {/* Headline */}
            <h2
              className={`font-heading font-bold text-navy mb-6 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{
                fontSize: 'clamp(32px, 4vw, 52px)',
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
                transitionDelay: '300ms',
              }}
            >
              Repeatable work.
              <br />
              <span className="text-tango">Reliable output.</span>
            </h2>

            {/* Body */}
            <p
              className={`text-charcoal-muted text-base lg:text-lg leading-relaxed mb-8 max-w-lg transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              We map your workflows, eliminate bottlenecks, and build automations
              that keep running—quietly, correctly, overnight.
            </p>

            {/* Features List */}
            <div 
              className={`grid sm:grid-cols-2 gap-3 mb-8 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
              style={{ transitionDelay: '500ms' }}
            >
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-tango flex-shrink-0" />
                  <span className="text-sm text-navy">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <button
              onClick={scrollToContact}
              className={`group inline-flex items-center gap-2 px-6 py-3 bg-navy hover:bg-navy-light text-white text-sm font-medium rounded-full transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
              style={{ transitionDelay: '600ms' }}
            >
              See automation examples
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>

          {/* Right Visual */}
          <div
            className={`relative transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Main Card */}
              <div className="absolute inset-0 bg-white rounded-3xl shadow-card border border-navy/5 p-8 flex flex-col">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-tango/10 flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-tango" />
                    </div>
                    <div>
                      <p className="font-medium text-navy text-sm">Automation Flow</p>
                      <p className="text-xs text-charcoal-muted">Running • 24/7</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                    Active
                  </span>
                </div>

                {/* Flow Visualization */}
                <div className="flex-1 flex flex-col justify-center gap-4">
                  {[
                    { name: 'Data Ingestion', status: 'complete', time: '2s' },
                    { name: 'Processing', status: 'complete', time: '5s' },
                    { name: 'Validation', status: 'running', time: '1s' },
                    { name: 'Output', status: 'pending', time: '--' },
                  ].map((step, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                        step.status === 'complete' ? 'bg-green-100' :
                        step.status === 'running' ? 'bg-tango/10' :
                        'bg-navy/5'
                      }`}>
                        {step.status === 'complete' ? (
                          <CheckCircle2 className="w-4 h-4 text-green-600" />
                        ) : step.status === 'running' ? (
                          <div className="w-3 h-3 rounded-full bg-tango animate-pulse" />
                        ) : (
                          <div className="w-3 h-3 rounded-full bg-navy/20" />
                        )}
                      </div>
                      <div className="flex-1">
                        <p className={`text-sm font-medium ${
                          step.status === 'pending' ? 'text-navy/40' : 'text-navy'
                        }`}>
                          {step.name}
                        </p>
                      </div>
                      <span className={`text-xs font-mono ${
                        step.status === 'pending' ? 'text-navy/30' : 'text-charcoal-muted'
                      }`}>
                        {step.time}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Stats */}
                <div className="mt-6 pt-6 border-t border-navy/5 grid grid-cols-3 gap-4">
                  {[
                    { label: 'Tasks', value: '12.4K' },
                    { label: 'Success', value: '99.9%' },
                    { label: 'Time Saved', value: '240h' },
                  ].map((stat, index) => (
                    <div key={index} className="text-center">
                      <p className="font-heading font-bold text-navy">{stat.value}</p>
                      <p className="text-xs text-charcoal-muted">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-tango/10 rounded-2xl -z-10" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-electric/10 rounded-2xl -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutomationSpotlight;
