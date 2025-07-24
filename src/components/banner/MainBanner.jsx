import React from 'react';

function MainBanner() {
  return (
    <section className="relative w-full h-[200px] md:h-[200px] lg:h-[400px] overflow-hidden">
      {/* Banner Image */}
      <img
        src="https://images.unsplash.com/photo-1585238342028-9445c44a1a3b?auto=format&fit=crop&w=1470&q=80"
        alt="Banner"
        className="w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 flex flex-col justify-center items-center bg-black/50 px-4 text-center">
        <h1 className="mb-4 font-bold text-white text-3xl md:text-5xl">
          Welcome to MyStore
        </h1>
        <p className="mb-6 text-white text-base md:text-lg">
          Discover our latest products and exclusive offers.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full font-semibold text-white transition-colors">
          Learn More
        </button>
      </div>
    </section>
  );
}

export default MainBanner;
