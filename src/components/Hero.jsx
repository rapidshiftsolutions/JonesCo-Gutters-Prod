import React, { useEffect } from 'react';

const Hero = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://interfaces.zapier.com/assets/web-components/zapier-interfaces/zapier-interfaces.esm.js';
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="relative h-screen">
      <iframe
        className="absolute top-0 left-0 w-full h-full object-cover pt-16 md:pt-36"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1&loop=1&playlist=dQw4w9WgXcQ"
        title="Background Video"
        frameBorder="0"
        allow="autoplay; loop; fullscreen"
      ></iframe>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      <div className="relative z-10 flex items-center justify-center h-full">
        <zapier-interfaces-page-embed
          page-id="clx4ut3lm000hqp5wgrxt7v2f"
          no-background="true"
          style={{ width: '100%', height: '100%' }}
        ></zapier-interfaces-page-embed>
      </div>
    </div>
  );
};

export default Hero;
