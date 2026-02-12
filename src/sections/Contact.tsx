import { useEffect, useRef, useState } from 'react';
import { Mail, MapPin, ArrowRight, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
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
      id="contact"
      className="relative w-full py-24 lg:py-32 z-50 bg-navy overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-electric/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-tango/10 rounded-full blur-3xl" />
        
        {/* Grid */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(#fff 1px, transparent 1px),
              linear-gradient(90deg, #fff 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative w-full px-6 lg:px-12 xl:px-20">
        {/* Header */}
        <div className="text-center mb-12">
          <p
            className={`font-mono text-xs uppercase tracking-[0.14em] text-tango mb-4 transition-all duration-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
            }`}
          >
            Get in Touch
          </p>
          <h2
            className={`font-heading font-bold text-white mb-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{
              fontSize: 'clamp(32px, 4vw, 56px)',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              transitionDelay: '100ms',
            }}
          >
            Let's build your next <span className="text-electric">system.</span>
          </h2>
          <p
            className={`text-white/60 text-base lg:text-lg max-w-md mx-auto transition-all duration-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            Tell us what you're solving. We'll reply within 24 hours.
          </p>
        </div>

        {/* Contact Card */}
        <div
          className={`max-w-2xl mx-auto transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-98'
          }`}
          style={{ transitionDelay: '300ms' }}
        >
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 lg:p-10 border border-white/10">
            {/* Contact Info Grid */}
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-tango/20 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-tango" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-white/50 text-xs font-mono uppercase tracking-wider mb-1">
                    Email
                  </p>
                  <a
                    href="mailto:hello@tangosystems.io"
                    className="text-white hover:text-tango transition-colors duration-300"
                  >
                    hello@tangosystems.io
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-electric/20 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-electric" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-white/50 text-xs font-mono uppercase tracking-wider mb-1">
                    Location
                  </p>
                  <p className="text-white">Remote-first • UTC-8 to UTC+3</p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <a
              href="mailto:hello@tangosystems.io?subject=Discovery%20Call%20Request"
              className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-tango hover:bg-tango-dark text-white font-medium rounded-full transition-all duration-300 hover:shadow-glow hover:-translate-y-0.5 group"
            >
              Book a discovery call
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </div>

        {/* Footer */}
        <div
          className={`mt-20 pt-8 border-t border-white/10 transition-all duration-600 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ transitionDelay: '500ms' }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-tango to-tango-dark flex items-center justify-center">
                <span className="text-white font-heading font-bold text-lg">T</span>
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-white text-lg leading-none">
                  Tango
                </span>
                <span className="font-mono text-[10px] text-white/50 uppercase tracking-wider">
                  Systems
                </span>
              </div>
            </div>

            {/* Copyright */}
            <p className="text-white/40 text-sm">
              © {new Date().getFullYear()} Tango Systems. All rights reserved.
            </p>

            {/* Social & Links */}
            <div className="flex items-center gap-6">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all duration-300"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all duration-300"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <div className="h-4 w-px bg-white/10" />
              <a
                href="#"
                className="text-white/50 hover:text-white text-sm transition-colors duration-300"
              >
                Privacy
              </a>
              <a
                href="#"
                className="text-white/50 hover:text-white text-sm transition-colors duration-300"
              >
                Terms
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
