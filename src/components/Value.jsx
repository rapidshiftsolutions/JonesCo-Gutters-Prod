export default function ValueProps() {
  const valueProps = [
    {
      icon: '🔨',
      title: 'Quality Craftsmanship',
      description: 'Expert installation with top-quality materials for seamless gutter installation.',
    },
    {
      icon: '📞',
      title: 'Free Estimates',
      description: 'No-obligation consultations to assess your needs for gutter installation and maintenance.',
    },
    {
      icon: '🤝',
      title: 'Experienced Team',
      description: 'Years of industry experience guarantee the best results for gutter replacement and cleaning services.',
    },
    {
      icon: '✅',
      title: 'Customer Satisfaction',
      description: 'Our priority is your happiness with our residential and commercial gutter services.',
    },
  ];

  return (
    <div className="bg-gradient-to-r sm:bg-gradient-to-b from-JonesCo-Blue-100 to-JonesCo-Blue-200 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-base font-semibold leading-7 text-JonesCo-Blue-600">Why Use JonesCo Gutters?</h2>
          <p className="mt-2 mb-6 text-2xl font-black tracking-tight text-JonesCo-Blue-950 sm:text-4xl">It&apos;s done right, the first time.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {valueProps.map((prop, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center text-center"
            >
              <div className="text-3xl mb-2 text-JonesCo-Blue-500">{prop.icon}</div>
              <h3 className="text-lg font-bold mb-1">{prop.title}</h3>
              <p className="text-sm text-gray-600">{prop.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
