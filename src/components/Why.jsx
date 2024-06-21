import { CheckCircleIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

const facts = [
  { id: 1, icon: CheckCircleIcon, title: 'Prevent Water Damage', description: 'Clean gutters redirect water away from your home.' },
  { id: 2, icon: CheckCircleIcon, title: 'Reduce Pest Infestation', description: 'Avoid attracting insects and rodents with clear gutters.' },
  { id: 3, icon: CheckCircleIcon, title: 'Stop Mold Growth', description: 'Reduce the risk of mold and mildew with proper drainage.' },
  { id: 4, icon: CheckCircleIcon, title: 'Maintain Curb Appeal', description: 'Keep your home looking its best with well-maintained gutters.' },
  { id: 5, icon: CheckCircleIcon, title: 'Eliminate Fire Hazards', description: 'Remove debris to reduce fire risk during dry seasons.' },
  { id: 6, icon: CheckCircleIcon, title: 'Extend Gutter Life', description: 'Regular cleaning extends the lifespan of your gutter system.' },
];

export default function GutterMaintenanceCTA() {
  return (
    <div className="bg-gradient-to-r from-JonesCo-Blue-800 to-JonesCo-Green-800 py-16 px-4 sm:py-24 sm:px-6 lg:px-8 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <ExclamationTriangleIcon className="h-12 w-12 text-yellow-400 mx-auto mb-4 animate-bounce" />
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Why Clean Your Gutters?</h2>
          <p className="mt-4 text-lg leading-8">Regular gutter maintenance prevents costly damage and keeps your home safe. Here’s why it matters:</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {facts.map((fact) => (
            <motion.div 
              key={fact.id} 
              className="flex flex-col items-center bg-white bg-opacity-10 p-6 rounded-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <fact.icon className="h-10 w-10 text-yellow-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">{fact.title}</h3>
              <p className="text-center">{fact.description}</p>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <motion.a
            href="/contact"
            className="inline-flex items-center justify-center rounded-md bg-white px-8 py-3 text-lg font-medium text-JonesCo-Blue-900 hover:bg-yellow-600"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            Book Your Free Estimate
          </motion.a>
        </div>
      </div>
    </div>
  );
}
