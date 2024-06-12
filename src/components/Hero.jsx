import React, { useEffect, useRef, useState } from 'react';

const Hero = () => {
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);
  const heroRef = useRef();

  useEffect(() => {
    const loadScript = () => {
      const script = document.createElement('script');
      script.type = 'module';
      script.src = 'https://interfaces.zapier.com/assets/web-components/zapier-interfaces/zapier-interfaces.esm.js';
      script.defer = true;
      script.onload = () => setIsScriptLoaded(true);
      document.body.appendChild(script);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadScript();
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <div ref={heroRef} className="relative h-screen overflow-hidden">
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src="https://www.youtube.com/embed/CwsZA7ljSlk?autoplay=1&mute=1&loop=1&playlist=CwsZA7ljSlk"
        title="Background Video"
        frameBorder="0"
        allow="autoplay; loop; fullscreen"
        loading="lazy"
        style={{
          top: '0',
          left: '0',
          width: '100vw',
          height: '120vh',
          transform: 'translateY(-5%)',
        }}
      ></iframe>
      <div className="absolute top-0 left-0 w-full h-full bg-JonesCo-Blue-900 md:opacity-80"></div>
      <div className="relative z-10 flex items-center justify-center h-full pt-8 md:pt-16">
        {isScriptLoaded && (
          <zapier-interfaces-page-embed
            page-id="clx4ut3lm000hqp5wgrxt7v2f"
            no-background="true"
            style={{ width: '100%', height: '100%' }}
          ></zapier-interfaces-page-embed>
        )}
      </div>
    </div>
  );
};

export default Hero;
