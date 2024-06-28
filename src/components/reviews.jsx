import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles

const reviews = [
  {
    author_name: 'Jennifer McKinney',
    text: 'John and his team did a fantastic job. True professionals! They were in constant communication with us from the initial call to completion of the job. The gutters look great and really adds a nice accent to our house. We will definitely call them again for other projects.',
    rating: 5,
    time: 1719537924, // Unix timestamp
    imgSrc: '/images/reviewers/Jennifer.png',
  },
  {
    author_name: 'Carla Harrison',
    text: 'I can’t say enough about this company! They are professional and do an excellent job. I Used them to put gutters on my rental cabin. It’s hard to work around bookings but they got it done in a hurry so I lost no rent! They went above and beyond their duties by picking up nails and scrap boards left behind by the carpenters. I would definitely use them again.',
    rating: 5,
    time: 1719365124,
    imgSrc: '/images/reviewers/Carla.png',
  },
  {
    author_name: 'Mark Meade',
    text: 'Showed up as scheduled worked quickly & efficiently until they were finished. Looks amazing.',
    rating: 5,
    time: 1718414724,
    imgSrc: '/images/reviewers/Mark.png',
  },
];

const GoogleReviews = () => {
  const [formattedReviews, setFormattedReviews] = useState([]);

  useEffect(() => {
    const formatted = reviews.map(review => ({
      ...review,
      formattedTime: new Date(review.time * 1000).toLocaleDateString(),
    }));
    setFormattedReviews(formatted);
  }, []);

  return (
    <div className="bg-JonesCo-Blue-700 py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl">
        <div className="text-center">
          <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
            5-Stars on Google
          </h2>
          <p className="mt-4 text-md leading-8 text-JonesCo-Green-200">
            See what our customers are saying about us.
          </p>
        </div>
        <Carousel
          showThumbs={false}
          showStatus={false}
          autoPlay
          infiniteLoop
          interval={5000}
          className="mt-12"
        >
          {formattedReviews.map((review, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-md mb-12">
              <div className="w-16 h-16 mx-auto mb-4 relative">
                <img 
                  src={review.imgSrc} 
                  alt={review.author_name} 
                  className="absolute inset-0 w-full h-full object-cover rounded-full" 
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{review.author_name}</h3>
              <p className="text-gray-600 mb-4">{review.text}</p>
              <div className="text-yellow-500 text-3xl">
                {Array(review.rating).fill().map((_, i) => (
                  <span key={i}>⭐️</span>
                ))}
              </div>
              <p className="text-md text-gray-500">{review.formattedTime}</p>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default GoogleReviews;
