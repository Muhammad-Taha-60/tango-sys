import { useEffect, useRef, useState } from 'react';
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';

const features = [
  'Data preparation & cleaning',
  'Model training & tuning',
  'Production deployment',
  'Continuous learning',
];

const AISpotlight = () => {
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
      className="relative w-full py-24 lg:py-32 z-40 bg-offwhite overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] -translate-y-1/2 translate-x-1/2 bg-electric/5 rounded-full blur-3xl" />
      </div>

      <div className="relative w-full px-6 lg:px-12 xl:px-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Visual */}
          <div
            className={`relative order-2 lg:order-1 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Main Card */}
              <div className="absolute inset-0 bg-white rounded-3xl shadow-card border border-navy/5 p-8">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-electric/10 flex items-center justify-center">
                      <Sparkles className="w-5 h-5 text-electric" />
                    </div>
                    <div>
                      <p className="font-medium text-navy text-sm">AI Pipeline</p>
                      <p className="text-xs text-charcoal-muted">Live Inference</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-electric/10 text-electric text-xs font-medium rounded-full">
                    Active
                  </span>
                </div>

                {/* Chart Visualization */}
                <div className="h-40 mb-6 relative">
                  <svg className="w-full h-full" viewBox="0 0 300 100" preserveAspectRatio="none">
                    {/* Grid lines */}
                    {[0, 25, 50, 75, 100].map((y) => (
                      <line
                        key={y}
                        x1="0"
                        y1={y}
                        x2="300"
                        y2={y}
                        stroke="#E8ECF2"
                        strokeWidth="1"
                      />
                    ))}
                    {/* Area gradient */}
                    <defs>
                      <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#1F6FEB" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#1F6FEB" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    {/* Area */}
                    <path
                      d="M0,80 Q30,70 60,60 T120,50 T180,35 T240,45 T300,20 L300,100 L0,100 Z"
                      fill="url(#areaGradient)"
                    />
                    {/* Line */}
                    <path
                      d="M0,80 Q30,70 60,60 T120,50 T180,35 T240,45 T300,20"
                      fill="none"
                      stroke="#1F6FEB"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    {/* Data points */}
                    {[
                      { x: 0, y: 80 },
                      { x: 60, y: 60 },
                      { x: 120, y: 50 },
                      { x: 180, y: 35 },
                      { x: 240, y: 45 },
                      { x: 300, y: 20 },
                    ].map((point, i) => (
                      <circle
                        key={i}
                        cx={point.x}
                        cy={point.y}
                        r="4"
                        fill="#1F6FEB"
                        stroke="white"
                        strokeWidth="2"
                      />
                    ))}
                  </svg>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: 'Accuracy', value: '97.3%', trend: '+2.1%' },
                    { label: 'Latency', value: '45ms', trend: '-12%' },
                    { label: 'Requests', value: '8.2K', trend: '+18%' },
                    { label: 'Uptime', value: '99.99%', trend: 'stable' },
                  ].map((metric, index) => (
                    <div key={index} className="bg-offwhite rounded-xl p-4">
                      <p className="text-xs text-charcoal-muted mb-1">{metric.label}</p>
                      <div className="flex items-end gap-2">
                        <p className="font-heading font-bold text-navy text-lg">{metric.value}</p>
                        <span className={`text-xs ${
                          metric.trend.startsWith('+') ? 'text-green-600' :
                          metric.trend.startsWith('-') ? 'text-tango' :
                          'text-charcoal-muted'
                        }`}>
                          {metric.trend}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-electric/10 rounded-2xl -z-10" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-tango/10 rounded-2xl -z-10" />
            </div>
          </div>

          {/* Right Content */}
          <div
            className={`order-1 lg:order-2 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
            }`}
          >
            {/* Label */}
            <p
              className={`font-mono text-xs uppercase tracking-[0.14em] text-electric mb-4 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              AI & Intelligence
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
              Models that learn.
              <br />
              <span className="text-electric">Pipelines that scale.</span>
            </h2>

            {/* Body */}
            <p
              className={`text-charcoal-muted text-base lg:text-lg leading-relaxed mb-8 max-w-lg transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              From data preparation to deployment, we build AI systems that
              integrate with your operations—without breaking your stack.
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
                  <CheckCircle2 className="w-5 h-5 text-electric flex-shrink-0" />
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
              Explore AI solutions
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AISpotlight;
