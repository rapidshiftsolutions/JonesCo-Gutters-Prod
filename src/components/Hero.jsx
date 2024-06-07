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
    <div className="relative bg-JonesCo-Blue-900 text-white py-20 px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">Protect Your Home with Seamless Gutters</h1>
          <p className="text-lg md:text-xl mb-8">Get a free, no-obligation quote today!</p>
        </div>
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <div style={{ maxWidth: '900px', height: '500px' }}>
            <zapier-interfaces-page-embed
              page-id="clx4ut3lm000hqp5wgrxt7v2f"
              no-background="true"
              allow-query-params="true"
              query-params=""
              style={{ maxWidth: '900px', height: '500px' }}
            ></zapier-interfaces-page-embed>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
