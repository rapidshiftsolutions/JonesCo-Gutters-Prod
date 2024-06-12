import React, { useEffect, useState } from 'react';

const Hero = () => {
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://interfaces.zapier.com/assets/web-components/zapier-interfaces/zapier-interfaces.esm.js';
    script.defer = true;
    script.onload = () => setScriptLoaded(true);
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">
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
        {scriptLoaded && (
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
