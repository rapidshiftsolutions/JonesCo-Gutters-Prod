export default function ContactUs() {
    return (
      <div className="bg-JonesCo-Green-100 py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-3xl font-black tracking-tight text-JonesCo-Green-900 sm:text-4xl">Get in Touch</h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">We&apos;re here to help you with all your gutter needs.</p>
          </div>
  
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
            {/* Phone */}
            <div className="flex flex-col items-center">
              <span className="text-5xl mb-3 text-JonesCo-Blue-500">📞</span> 
              <p className="text-xl font-medium text-gray-900">Call Us</p>
              <a href="tel:4239007901" className="text-gray-600 hover:text-gray-800">423-207-3325</a>
            </div>
            {/* Email */}
            <div className="flex flex-col items-center">
              <span className="text-5xl mb-3 text-JonesCo-Blue-500">📧</span> 
              <p className="text-xl font-medium text-gray-900">Email Us</p>
              <a href="mailto:hey@jonescogutters.com" className="text-gray-600 hover:text-gray-800">hey@jonescogutters.com</a>
            </div>
            {/* Email */}
            <div className="flex flex-col items-center">
              <span className="text-5xl mb-3 text-JonesCo-Blue-500">💻</span> 
              <p className="text-xl font-medium text-gray-900">Book time</p>
              <a href="https://clienthub.getjobber.com/booking/cfb34696-fc96-46da-87a4-b54410c83f3b" className="text-gray-600 hover:text-gray-800">Jobber Booking</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
  