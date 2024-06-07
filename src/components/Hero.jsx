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
    <div className="relative h-screen bg-black">
      <iframe 
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="https://www.youtube.com/embed/your-video-id?autoplay=1&mute=1&loop=1&playlist=your-video-id"
        title="Background Video"
        frameBorder="0"
        allow="autoplay; loop; fullscreen"
      ></iframe>
      <div className="absolute top-0 left-0 w-full h-24 bg-black opacity-50"></div>
      <div className="relative z-10 container mx-auto flex flex-col md:flex-row items-center h-full">
        <div className="md:w-1/2 flex justify-center md:justify-start mb-8 md:mb-0">
          <div className="max-w-md w-full p-4 bg-white rounded-lg shadow-lg">
            <zapier-interfaces-page-embed
              page-id="clx4ut3lm000hqp5wgrxt7v2f"
              no-background="true"
              allow-query-params="true"
              query-params=""
              style={{ width: '100%', height: 'auto' }}
            ></zapier-interfaces-page-embed>
          </div>
        </div>
        <div className="md:w-1/2 text-center md:text-left text-white">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">Protect Your Home with Seamless Gutters</h1>
          <p className="text-lg md:text-xl mb-8">Get a free, no-obligation quote today!</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
