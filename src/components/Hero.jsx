import React, { useEffect, useRef } from 'react';
import Script from 'next/script';

const Hero = () => {
  const videoRef = useRef();

  useEffect(() => {
    const handleIntersection = (entries) => {
      if (entries[0].isIntersecting) {
        const script = document.createElement('script');
        script.type = 'module';
        script.src = 'https://interfaces.zapier.com/assets/web-components/zapier-interfaces/zapier-interfaces.esm.js';
        script.defer = true;
        document.body.appendChild(script);
        observer.disconnect();
      }
    };

    const observer = new IntersectionObserver(handleIntersection, { threshold: 0.1 });
    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <div ref={videoRef} className="relative h-screen overflow-hidden">
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
          height: '100vh',
          objectFit: 'cover',
        }}
      ></iframe>
      <div className="absolute top-0 left-0 w-full h-full bg-JonesCo-Blue-900 md:opacity-80"></div>
      <div className="relative z-10 flex items-center justify-center h-full pt-8 md:pt-16">
        <zapier-interfaces-page-embed
          page-id="clx4ut3lm000hqp5wgrxt7v2f"
          no-background="true"
          style={{ width: '100%', height: '100%' }}
        ></zapier-interfaces-page-embed>
      </div>
      <Script
        src="https://interfaces.zapier.com/assets/web-components/zapier-interfaces/zapier-interfaces.esm.js"
        strategy="lazyOnload"
      />
    </div>
  );
};

export default Hero;
