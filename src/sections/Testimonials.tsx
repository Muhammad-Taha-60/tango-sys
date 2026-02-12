import { useEffect, useRef, useState } from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: 'Tango turned our patchwork stack into a single pipeline.',
    author: 'A. R.',
    role: 'CTO',
    company: 'TechCorp',
  },
  {
    quote: 'The automation saved us 20+ hours a week within the first month.',
    author: 'M. S.',
    role: 'VP Ops',
    company: 'ScaleUp Inc',
  },
  {
    quote: 'They speak both business and engineering—rare.',
    author: 'L. K.',
    role: 'Product Lead',
    company: 'InnovateLabs',
  },
  {
    quote: 'Our AI rollout was production-ready faster than expected.',
    author: 'J. T.',
    role: 'Data Director',
    company: 'DataFlow',
  },
  {
    quote: 'Documentation, monitoring, handoffs—handled.',
    author: 'P. D.',
    role: 'Engineering Manager',
    company: 'CloudFirst',
  },
  {
    quote: 'Reliable, opinionated, and fast.',
    author: 'S. N.',
    role: 'Founder',
    company: 'StartupXYZ',
  },
];

const Testimonials = () => {
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
      className="relative w-full py-24 lg:py-32 z-50 bg-offwhite"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-tango/5 rounded-full blur-3xl" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-electric/5 rounded-full blur-3xl" />
      </div>

      <div className="relative w-full px-6 lg:px-12 xl:px-20">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <p
            className={`font-mono text-xs uppercase tracking-[0.14em] text-electric mb-4 transition-all duration-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
            }`}
          >
            Testimonials
          </p>
          <h2
            className={`font-heading font-bold text-navy transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
            style={{
              fontSize: 'clamp(32px, 4vw, 52px)',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              transitionDelay: '100ms',
            }}
          >
            Built for teams that <span className="text-tango">ship.</span>
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`group bg-white rounded-2xl p-6 border border-navy/5 shadow-card hover:shadow-lg hover:-translate-y-1 transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-9 scale-98'
              }`}
              style={{ transitionDelay: `${150 + (index % 3) * 80}ms` }}
            >
              {/* Quote Icon */}
              <div className="mb-4">
                <Quote className="w-8 h-8 text-tango/20" />
              </div>

              {/* Quote Text */}
              <p className="text-navy text-base leading-relaxed mb-6">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-navy/5">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  index % 3 === 0 ? 'bg-tango/10' :
                  index % 3 === 1 ? 'bg-electric/10' :
                  'bg-navy/10'
                }`}>
                  <span className={`font-mono font-bold text-sm ${
                    index % 3 === 0 ? 'text-tango' :
                    index % 3 === 1 ? 'text-electric' :
                    'text-navy'
                  }`}>
                    {testimonial.author.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <p className="text-navy text-sm font-medium">
                    {testimonial.author}
                  </p>
                  <p className="text-charcoal-muted text-xs">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
