const Hero = () => {
  return (
    <section className="relative bg-black text-white overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop"
          alt="Running shoe"
          className="w-full h-full object-cover opacity-50"
        />
      </div>
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-48 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight mb-4 animate-fade-in-up">
          Step Up Your Game
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mb-8 text-gray-200 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Discover our latest collection of high-performance footwear, designed for comfort, style, and durability.
        </p>
        <a
          href="#"
          className="px-8 py-3 bg-white text-black font-semibold rounded-lg shadow-lg hover:bg-gray-200 transform hover:scale-105 transition-all duration-300 animate-fade-in-up"
          style={{ animationDelay: '0.4s' }}
        >
          Shop Now
        </a>
      </div>
    </section>
  );
};

export default Hero;